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
        return new Promise((resolve, reject) => {
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

                    resolve('equipment added')
                }
            )
        })
    }

    static LSaveEquipmentsPushRange(equipmentsIn) {
        return new Promise((resolve, reject) => {
            this.LGetEquipments().then((d) => {
                const equipments = d !== null ? d : []
                const equipmentsCopy = equipmentsIn

                this.LGetLastEquipmentID().then((d) => {
                    var counter = 1

                    equipmentsCopy.forEach(element => {
                        element.id = d + 1 + counter
                        equipments.push(element)
                        counter = counter + 1
                    });

                    this.LSetLastEquipmentID(equipments[equipments.length - 1].id)

                    this.LSaveEquipmentsReset(equipments)

                    resolve('equipments added')
                })
            
            })
        })
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
            console.log("Getting local equipments...")

            this.LGetEquipments().then( async (lEquipments) => {
                console.log(lEquipments)

                let sliceStart = 0
                let sliceLength = 5
                let sliceEnd = sliceStart + sliceLength
                let slicing = true
                let stopSlicing = false

                console.log("Slicing...")

                while(slicing && lEquipments !== null){
                    if (sliceStart + sliceLength >= lEquipments.length) {
                        sliceEnd = lEquipments.length
                        stopSlicing = true
                    }
    
                    const equipmentSlice = lEquipments.slice(sliceStart, sliceEnd)
                    console.log("Equipment Slice = ")
                    console.log(equipmentSlice)
                    console.log("JSON Stringfying...")
                    console.log("Stringfied slice = ")
                    console.log(JSON.stringify(equipmentSlice))

                    try {
                        const response = await fetch('https://memas106.000webhostapp.com/equipments/update', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                          },
                          body: new URLSearchParams({
                            'equipments': JSON.stringify(equipmentSlice)}).toString()
                        })

                        console.log("Waiting for response")
                        const data = await response.json();

                        data.forEach(element => {
                            console.log("From for loop : " + element.name);
                            this.LUpdateEquipment(element);
                        });
                    } catch (error) {
                        console.error(error);
                    }
                      

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
    static OLoadMoreEquipment(page, exceptions){
        const loadEquipments = async (page, exceptions) => {
            try {
                var excep = ''
                exceptions.forEach(element => {
                    excep = excep + element + ','
                });

                excep = excep + '0'
            
                const response = await fetch(
                    'https://memas106.000webhostapp.com/equipments?page=' + page + '&group_length=10&exceptions=' + excep
                );

                const data = await response.json();

                return data;
            } catch (error) {
                console.error(error);
                return null;
            }
        }

        return loadEquipments(page, exceptions);
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

    static OPostTest() {
        const uploadEquipment = async () => {
            console.log("Conducting OPtest...")

            try {
                const response = await fetch('https://memas106.000webhostapp.com/post/test', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: new URLSearchParams({
                    'test': 'wow'}).toString()
                })

                console.log("Waiting for response")
                const data = await response.text();
                console.log("Response = ")
                console.log(data)


            } catch (error) {
                console.error(error);
            }
        }

        return uploadEquipment();
    }
}


