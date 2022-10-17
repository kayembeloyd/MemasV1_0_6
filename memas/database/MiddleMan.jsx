import AsyncStorage from '@react-native-async-storage/async-storage';

export default class MiddleMan {
    static sendData(key_, value_){
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

    static getData(key_){
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

    static setLastEquipmentID(id) {
        this.sendData('last_equipment_id', id)
    }

    static getNewID(){
        return this.getData('last_equipment_id')    
    }

    syncChangesWithServer(){
        
    }

}
