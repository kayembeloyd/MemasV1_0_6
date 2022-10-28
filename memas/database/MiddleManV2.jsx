import AsyncStorage from '@react-native-async-storage/async-storage';

export default class MiddleManV2 {

    // Local database section 
    
    // Private Local
    static LSaveData(key_, value_){
        const s_ = async (k_, v_) => {
            try {
                const m_v_ = JSON.stringify(v_)
                await AsyncStorage.setItem(k_, m_v_)
            } catch (e) {
                // error e
            }
        }

        s_(key_, value_);
    }

    // Private Local
    static LGetData(key_){
        const s_ = async (k_) => {
            try {
                const v_ = await AsyncStorage.getItem(k_)
                return v_ != null ? JSON.parse(v_) : null;
            } catch (e) {
                // error e
            }
        }

        return s_(key_)
    }

    // Private Local
    static LSetLastEquipmentID(id) {
        this.LSaveData('last_equipment_id', id)
    }

    // Private Local
    static LGetLastEquipmentID(){
        return this.LGetData('last_equipment_id')    
    }

    // Public Local
    static LSaveEquipmentsReset(equipments){
        const removeValue = async () => {
            try {
              await AsyncStorage.removeItem('equipments')
            } catch(e) {
              // remove error
            }          
        }

        removeValue().then(
            () => {
                this.LSaveData('equipments', equipments)
            }
        )
    }

    // Public Local Promise
    static LGetEquipments() {
        return this.LGetData('equipments')
    }

    // Public Local
    static LSaveEquipmentsPush(equipment){
        this.LGetEquipments().then(
            (d) => {
                const equipments = d !== null ? d : []
                const equipmentCopy = equipment
                
                this.LGetLastEquipmentID().then((d) => {
                    equipmentCopy.id = d + 1
                    this.LSetLastEquipmentID(equipmentCopy.id)

                    equipments.push(equipmentCopy)

                    this.LSaveEquipmentsReset(equipments)
                })
            }
        )
    }

    // Public Local
    static LUpdateEquipment(equipment) {
        this.LGetEquipments().then((d) => {
            const equipments = d !== null ? d : []

            const original_equipment_index = equipments.findIndex(original_equipment => original_equipment.id === equipment.id)

            equipments[original_equipment_index] = equipment

            this.LSaveEquipmentsReset(equipments)
        })
    }

    // Public Local Online
    static Sync(){
        return new Promise((resolve, reject) => {
            this.LGetEquipments().then( async (lEquipments) => {
                let sliceStart = 0
                let sliceLength = 5
                let sliceEnd = sliceStart + sliceLength
                let slicing = true
                let stopSlicing = false

                while(slicing){
                    if (sliceStart + sliceLength >= lEquipments.length) {
                        sliceEnd = lEquipments.length
                        stopSlicing = true
                    }
    
                    const equipmentSlice = lEquipments.slice(sliceStart, sliceEnd)

                    console.log(equipmentSlice);
    
                    await new Promise((resolve) => {
                        setTimeout(() => {
                            resolve("Timer completed 3 seconds of server call and response delay simulation")
                        }, 10000);
                    }).then((d) => console.log(d));

                    // Long Server call
                    /*try {
                        const response = await fetch(
                          'https://memas106.000webhostapp.com/equipments/update'
                        );
          
                        const data = await response.json();
          
                        console.log({ data });
          
                      } catch (error) {
                        console.error(error);
                      }*/
    
                    if (stopSlicing){
                        slicing = false
                    }
        
                    sliceStart = sliceEnd
                    sliceEnd = sliceStart + sliceLength
                }

                resolve("Synchronization complete");

            })
          });

        
    }


    // Public Online 
    // Note these equipments will not be stored in the local database
    // They will be stored if clicked only 
    static OLoadMoreEquipment(page){
        const loadEquipments = async (page) => {
            try {
                const response = await fetch(
                    'https://memas106.000webhostapp.com/equipments?page=' + page + '&group_length=10&exceptions=0'
                );

                const data = await response.json();

                return data;
            } catch (error) {
                console.error(error);
                return null;
            }
        }

        return loadEquipments(page);
    }

    static OTest(){
        const getEquipment = async () => {
            try {
              const response = await fetch(
                'https://memas106.000webhostapp.com/equipments/1'
              );

              const data = await response.json();

              console.log({ data });

            } catch (error) {
              console.error(error);
            }
        };

        return getEquipment();
    }
}


