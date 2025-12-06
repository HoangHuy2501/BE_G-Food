const {PostNewsShareModel,CategoryModel,ReceivePostModel} = require("../models/index");

class CountRepository {
    async getCountPostNewShare() {
        const SumPostShare=await PostNewsShareModel.count();
        const SumPostActive=await PostNewsShareModel.count({where:{status:"active"}});
        const SumPostLock=await PostNewsShareModel.count({where:{status:"lock"}});
        const SumCategory=await CategoryModel.count();
        const SumReceivePost=await ReceivePostModel.count({where:{status:true}});
        const Total={
            SumPostShare:SumPostShare,
            SumPostActive:SumPostActive,
            SumPostLock:SumPostLock,
            SumCategory:SumCategory,
            SumReceivePost:SumReceivePost
        }
        return {
            ...Total
        }
    }
}

module.exports =new CountRepository();