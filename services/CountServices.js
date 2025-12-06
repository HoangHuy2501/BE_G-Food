const CountRepository=require('../repository/CountRepository');
class CountServices{
    async CountPostNewShare() {
        try {
            const CountPostNewShare=await CountRepository.getCountPostNewShare();
            return CountPostNewShare;
        } catch (error) {
            throw error;
        }
    }
}
module.exports=new CountServices();