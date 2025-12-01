const { connectAI } = require("../config/connectAI");
const ApiSuccess = require("../utils/ApiSuccess");
const ApiErorr = require("../utils/ApiError");
exports.ChatAI=async (req, res, next) => {
  try {
    const text= req.body;
    if(!text || !text.content){
        throw ApiErorr.ValidationError("No input text provided");
    }
    console.log("data",text.content);
    
    const prompt=`
  Bạn là chuyên gia về bảo quản thực phẩm và thức ăn dư thừa.

Người dùng có thể nhập tên thực phẩm hoặc món ăn ở dạng:
- Rất ngắn gọn
- Viết tắt
- Tên món đã nấu
- Thực phẩm dư thừa
- Thực phẩm tươi mới

Luôn cố gắng suy luận đúng loại thực phẩm và cung cấp:
- Cách bảo quản tối ưu
- Ngắn gọn, dễ hiểu
- Tiết kiệm chi phí
- An toàn, đúng kỹ thuật
- Trình bày bằng tiếng Việt 
Nội dung người dùng cung cấp cần được bảo quản dù là thực phẩm tươi mới hay thức ăn dư thừa.:
Tên thực phẩm hoặc thức ăn dư thừa là: "${text.content}", bạn hãy đưa ra cách bảo quản ngắn gọn nhất và phù hợp nhất với người dùng.
-Hãy trả lời  chỉ dùng thẻ <br> để xuống dòng nhưng không kèm theo (/n và **), không dùng Markdown (** hay *) và không còn (\n). 
ví dụ:
Chào bạn, tôi là chuyên gia về bảo quản thực phẩm. Với "thịt heo",
 đây là cách bảo quản tốt nhất:<br>Thịt heo tươi sống:<br> Ngắn hạn (1-2 ngày):
 Bảo quản trong ngăn mát tủ lạnh (0-4°C). Bọc kín bằng màng bọc thực phẩm hoặc túi zip để tránh lây nhiễm vi khuẩn và giữ độ ẩm.<br>\
 Dài hạn (trên 2 ngày): Cấp đông. Chia nhỏ thành các phần ăn vừa đủ, bọc kín (màng bọc, túi zip, hộp đựng thực phẩm). Ghi rõ ngày cấp đông để dễ theo dõi. Thịt heo có thể giữ được 2-3 tháng trong ngăn đá.<br>
 Thịt heo đã nấu chín (thức ăn thừa):<br>\
 Để nguội hoàn toàn trước khi cho vào tủ lạnh (trong vòng 2 giờ sau khi nấu).<br>
  Bảo quản trong hộp kín hoặc túi zip, để trong ngăn mát tủ lạnh.<br>   Nên dùng trong vòng 3-4 ngày.<br>
  Lưu ý chung:<br>
Rã đông thịt heo trong ngăn mát tủ lạnh hoặc bằng lò vi sóng (chế độ rã đông). Không rã đông ở nhiệt độ phòng để tránh vi khuẩn phát triển.<br>
 Thịt đã rã đông nên được chế biến ngay, không nên cấp đông lại.<br>
 Luôn đảm bảo vệ sinh khi chế biến và bảo quản thực phẩm.
    `;
    const data = {
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ]
  };
    const result = await connectAI(data);

    return res.json(ApiSuccess.getSelect("AI", result.candidates?.[0]?.content?.parts?.[0]?.text));
  } catch (error) {
    return next(error);
  }
}