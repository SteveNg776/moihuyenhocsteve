// Dữ liệu 64 quẻ Kinh Dịch hoàn chỉnh
export interface HexagramData {
  number: number;
  name: string;
  symbol: string;
  structure: string;
  meaning: string;
  lines: string[];
  keywords: string[];
  advice: string;
  upperTrigram: string;
  lowerTrigram: string;
  element: string;
  season: string;
}

export const hexagram_data: { [key: number]: HexagramData } = {
  1: {
    number: 1,
    name: "Càn vi thiên",
    symbol: "☰",
    structure: "111111",
    meaning: "Con rồng bay quá cao chỉ còn một nước là rơi xuống. Thiers bảo rằng: Làm chính trị không nên thành công quá mức. (En politique, il ne faut pastrop réussir). Ở ngôi cao chính là lúc con người chính trị lâm nguy nhất. Nếu không đủ khả năng tài trí thì chẳng khác nào con rồng non mà đã cuộn bay lên cao vượt sức của nó. Thất bại chua cay của Hitler chính là kết quả của những thắng lợi quá nhanh của ông. Như cây trứng cá lớn thật mau nên rễ không sâu, không thể chống lại với sức gió to. Kẻ thừa được thế chỉ biết mù quáng phát triển mà không củng cố tất có điều hối hận về sau. Mỗi thành công đều cần sự củng cố để vững vàng tiến lên thành công khác. Không biết củng cố thì sẽ lâm vào cái cảnh Kháng long hữu hối.",
    lines: [
      "Hào 1: Tiềm long, chớ dùng - Rồng ẩn dưới nước, chưa nên hành động",
      "Hào 2: Hiện long tại điền - Rồng xuất hiện trên đồng, có thể gặp bậc hiền",
      "Hào 3: Quân tử chung nhật càn càn - Người quân tử suốt ngày siêng năng",
      "Hào 4: Hoặc dược ư uyên - Có thể nhảy lên vực sâu",
      "Hào 5: Phi long tại thiên - Rồng bay trên trời, có lợi gặp người lớn",
      "Hào 6: Cang long hữu hối - Rồng kiêu ngạo sẽ có hối hận"
    ],
    keywords: ["Sáng tạo", "Lãnh đạo", "Khởi đầu", "Năng động", "Quyền lực"],
    advice: "Quẻ Thuần Càn là quẻ Đại Cát, đặc biệt vui sướng. Người xem thấy quẻ này rất mừng, mọi việc như ý, không sợ họa hung.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Càn (Trời)",
    element: "Kim",
    season: "Thu"
  },
  2: {
    number: 2,
    name: "Khôn vi địa",
    symbol: "☷",
    structure: "000000",
    meaning: "Ngược với con rồng là con tẫn mã (ngựa cái) tượng trưng cho người chính trị đang ở vào cái thế cực khó chỉ có thể hết sức giữ gìn nhượng bộ mới khỏi nguy đến tính mạng. Lưu Bị ở với Viên Thiệu trong khi Quan Vân Trường ở với Tào Tháo. Quân Viên Tào đụng độ, Quan Vân Trường để trả ơn Tào đã giết hai tướng của phe họ Viên là Nhan Lương Văn Xú. Tin báo về, Viên Thiệu quay Lưu Bị, nếu Lưu Bị không có thái độ chính trị của con tẫn mã thì đã bị Viên Thiệu giết ngay. Thủ đoạn nhu thuận của Lưu Bị quả đã lên đến cao độ khi ông quỳ xuống trước Tôn phu nhân mà khóc vì trông thấy chung quanh động phòng có nhiều người cầm binh khí. Fouché có một thời kỳ khá lâu lẩn tránh Robespierre không dám ra mặt đương đầu. Fouché nhẫn nại chờ đợi giờ phút Robespierre bước hụt để xông tới hạ thủ.",
    lines: [
      "Hào 1: Lý sương, âm băng chí - Đạp lên sương giá, băng cứng sẽ đến",
      "Hào 2: Trực, phương, đại - Thẳng thắn, vuông vắn, lớn lao",
      "Hào 3: Hàm chương khả trinh - Giữ kín tài năng có thể được trinh cát",
      "Hào 4: Quát nang, vô cữu vô dự - Buộc bao, không lỗi không lợi",
      "Hào 5: Hoàng thường, nguyên cát - Áo vàng, rất cát lành",
      "Hào 6: Long chiến ư dã - Rồng chiến đấu ngoài đồng"
    ],
    keywords: ["Nuôi dưỡng", "Khiêm nhường", "Tiếp nhận", "Bao dung", "Hỗ trợ"],
    advice: "Tìm người thấy người, mất của tìm được, bệnh tật khỏi dần, mọi việc như ý.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Khôn (Đất)",
    element: "Thổ",
    season: "Cuối hè"
  },
  3: {
    number: 3,
    name: "Thủy lôi độn",
    symbol: "☳☵",
    structure: "100010",
    meaning: "Trời sắp giông bão thì không khí uất kết. Chính trị sắp có biến chuyển lớn tất tình trạng ngột ngạt. Ở vào thế này tuy đầy hy vọng nhưng cũng tràn ngập nguy nan. Sa chân nhỡ bước một có thể gây nên thất bại lớn lao (Kinh Dịch gọi quẻ này là một trong bốn quẻ khó khăn nhất). Mầm non cây cối đang nẩy ra dưới làn tuyết phủ chỉ chờ tuyết tan là vươn lên. Cảnh này là cảnh đòi hỏi sự chuẩn bị chu đáo tu dưỡng khả năng, đợi thời cơ đến để gấp rút ra tay như Tư Mã Ý giả ốm chờ Tào Sảng đi săn vùng dậy chớp nhoáng đánh úp kinh đô Ngụy. Koutouzov chờ gió mùa đông thổi mà tấn công Nã Phá Luân. Lénine viết một lọat bài về kỹ thuật tổng khởi nghĩa cho cán bộ học tập.",
    lines: [
      "Hào 1: Bàn hoàn, lợi cư trinh - Chậm chạp quay quần, lợi ở yên để trinh",
      "Hào 2: Thuần như, bàn như - Khó khăn như, chậm chạp như",
      "Hào 3: Tức lộc không, vãng cát - Đuổi theo hươu không người dẫn đường",
      "Hào 4: Thừa mã ban như - Cưỡi ngựa chậm chạp như",
      "Hào 5: Thuần kỳ cao, tiểu trinh cát - Khó khăn về của cải nhỏ",
      "Hào 6: Thừa mã ban như, khấp huyết lệ như - Cưỡi ngựa chậm chạp, khóc lóc như"
    ],
    keywords: ["Khởi đầu", "Khó khăn", "Kiên nhẫn", "Bền bỉ", "Thử thách"],
    advice: "Bệnh tật khó chữa khỏi, hôn nhân không hay, cãi nhau chuyện vặt, mọi việc rối mù.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Khảm (Nước)",
    element: "Mộc",
    season: "Xuân"
  },
  4: {
    number: 4,
    name: "Sơn thủy mông",
    symbol: "☶☵",
    structure: "001010",
    meaning: "Lúc khởi thủy không có gì to lớn ngay. Phải học tập, phải khinh thường đấu tranh, đi từ nhỏ đến lớn, đi từ không đến có. Kiên nhẫn và bền chí là hai điều kiện cơ bản. Đảng Quốc xã khởi nghiệp với bảy người và đã có lần (1923) Hitler bị ăn cả tràng đạn rồi bị giam vào ngục mấy năm trường. Ở đấy ông nghiền ngẫm rồi viết ra cuốn Mein Kampf. Văn Vương vui vẻ vào nhà ngục ở Dữu lý để suy nghĩ cơ trời.",
    lines: [
      "Hào 1: Phát mông, lợi dụng hình nhân - Khai mông, lợi dùng hình phạt",
      "Hào 2: Bao mông cát - Bao dung sự non nớt thì cát",
      "Hào 3: Vật dụng thủ nữ - Không nên cưới người nữ",
      "Hào 4: Khốn mông, lận - Bế tắc vì non nớt, khó khăn",
      "Hào 5: Đồng mông, cát - Trẻ con non nớt, cát lành",
      "Hào 6: Kích mông, bất lợi vi khấu - Đánh đuổi sự non nớt"
    ],
    keywords: ["Học hỏi", "Non nớt", "Giáo dục", "Hướng dẫn", "Khiêm tốn"],
    advice: "Việc hôn nhân, việc góp vốn kinh doanh không thành. Mọi việc gian lao vất vả, phí công vô ích.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Khảm (Nước)",
    element: "Thủy",
    season: "Đông"
  },
  5: {
    number: 5,
    name: "Thủy thiên nhu",
    symbol: "☰☵",
    structure: "111010",
    meaning: "Có thực lực rồi, nhưng phải chờ đúng lúc để phát huy thực lực. Muốn qua sông thì hoặc phải tìm chỗ nông, hoặc phải đến nơi nước đóng thành băng, hoặc phải đợi sóng bớt dữ, hoặc phải chờ đò ngang. César chỉ có thể vượt Rubicon đúng ngày hôm ấy nghĩa là giữa lúc Rome cần có César. Đảng Bôn-sê-vích chắc chắn không thành công nếu không có khoảng thời gian đêm của chính phủ Kérensky. Cũng bởi lẽ này nên Khổng Minh mới thu xếp kế họach chờ mùa gió đông để thắng trận Xích Bích. Không đúng lúc là không xong. Năm 1960 Tổng thống Eisenhower quyết định sang thăm Nhật, hai chính phủ chính thức thông báo đi và đón. Chẳng còn cái gì ngăn trở cuộc viếng thăm này nữa. Rút cục vì cái thế Thủy thiên nhu mà không thực hiện được, lý do dân Nhật rầm rộ biểu tình phản đối.",
    lines: [
      "Hào 1: Nhu ư giao, lợi hằng - Chờ đợi ở ngoại ô, lợi kiên trì",
      "Hào 2: Nhu ư sa, tiểu hữu ngôn - Chờ đợi trên cát, có lời nói nhỏ",
      "Hào 3: Nhu ư nê, trí khấu chí - Chờ đợi trong bùn, khiến giặc đến",
      "Hào 4: Nhu ư huyết, xuất tự huyệt - Chờ đợi trong máu, thoát khỏi hố",
      "Hào 5: Nhu ư tửu thực, trinh cát - Chờ đợi với rượu thức ăn, trinh cát",
      "Hào 6: Nhập ư huyệt, hữu bất tốc chi khách tam nhân lai - Vào trong hố"
    ],
    keywords: ["Chờ đợi", "Kiên nhẫn", "Thời cơ", "Chuẩn bị", "Tin tưởng"],
    advice: "Mưu việc tất thành, hôn nhân hòa hợp, cầu tài như ý, ước nguyện thỏa mãn.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Khảm (Nước)",
    element: "Thủy",
    season: "Đông"
  },
  6: {
    number: 6,
    name: "Thiên thủy tụng",
    symbol: "☵☰",
    structure: "010111",
    meaning: "Va chạm vô ích là điều tối kỵ của chính trị. Lạn Tương Như mỗi lần trông thấy Liêm Pha liền bảo mã phu lùi xe vào ngõ hẻm, tự ẩn mình cho khuất mắt Liêm Pha, bởi Liêm Pha là võ tướng hiếu thắng, chạm vào cái hiếu thắng ấy chỉ có hại cho nước là mang đến sự chia rẽ nội bộ. Phải giảm bớt chủ trương cứng rắn để đạt thắng lợi. Thái độ chính trị cần chuyển biến luôn cho hợp với tình thế thực tiễn. Đại úy Rohm với lực lượng SS (SA?) quá trớn hoành hành nên đụng độ với phe quân nhân, thiếu sự ủng hộ của phe quân nhân thì đảng Quốc xã không thể nắm chính quyền đuợc. Do đó Hitler phải giết Rohm. Vua Charles đệ nhị của Anh quốc đã tạo thanh thế cho Cromwell chặt cổ mình vì lập trường ngoan cố hẹp hòi.",
    lines: [
      "Hào 1: Bất vĩnh sở sự, tiểu hữu ngôn - Không kéo dài việc, có lời nói nhỏ",
      "Hào 2: Bất khắc tụng, quy nhi dật chi - Không thắng được tranh tụng",
      "Hào 3: Thực cựu đức, trinh lệ - Ăn theo đức cũ, trinh nguy",
      "Hào 4: Bất khắc tụng, phục tức mệnh - Không thắng tranh tụng, trở về",
      "Hào 5: Tụng, nguyên cát - Tranh tụng, rất cát lành",
      "Hào 6: Hoặc tích chi cấm đái - Có thể được ban cho đai lưng"
    ],
    keywords: ["Tranh chấp", "Xung đột", "Hòa giải", "Công lý", "Thận trọng"],
    advice: "Tránh xung đột không cần thiết. Nếu phải tranh chấp, hãy đảm bảo mình đứng về phía công lý.",
    upperTrigram: "Khảm (Nước)",
    lowerTrigram: "Càn (Trời)",
    element: "Kim",
    season: "Thu"
  },
  7: {
    number: 7,
    name: "Địa thủy sư",
    symbol: "☷☵",
    structure: "000010",
    meaning: "Cái thế không thể lùi được nữa, phải phát động chiến tranh, phải quyết liệt chỉ có một con đường duy nhất là chiến thắng. Đó là lúc cần bộ tham mưu sáng suốt, cần quân đội thiện chiến, cần những cán bộ tinh thông. Thiếu những điều kiện này làm cơ sở khai vận tất phải thất bại. Sở Bá Vương sức muôn người khôn địch đánh đâu thắng đấy, một sớm bỏ mất Phạm Tăng là sự nghiệp kể như sụp đổ. Lưu Bang, bác đình trưởng nhỏ bé, với bộ tham mưu Trương Lương, Tiêu Hà, với tài nguyên súy của Hàn Tín chỉ một trận Cai Hạ là cướp toàn thiên hạ. Napoléon chập chững bước vào chính trị, nếu không nhờ những vận dụng chính trị quỷ quyệt của Talleyrand và Fouché chắc hẳn Napoléon đã rơi đầu.",
    lines: [
      "Hào 1: Sư xuất dĩ luật - Quân đội xuất phát với kỷ luật",
      "Hào 2: Tại sư trung, cát vô cữu - Ở giữa quân đội, cát không lỗi",
      "Hào 3: Sư hoặc dư thi - Quân đội có thể chở xác chết",
      "Hào 4: Sư tả thứ, vô cữu - Quân đội đóng ở bên trái, không lỗi",
      "Hào 5: Điền hữu cầm, lợi chấp ngôn - Ruộng có chim, lợi nói lời",
      "Hào 6: Đại quân hữu mệnh - Vua lớn có lệnh"
    ],
    keywords: ["Tổ chức", "Kỷ luật", "Lãnh đạo", "Chiến lược", "Đoàn kết"],
    advice: "Cần tổ chức tốt và có kỷ luật. Lãnh đạo phải công minh và có tầm nhìn xa.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Khảm (Nước)",
    element: "Thổ",
    season: "Cuối hè"
  },
  8: {
    number: 8,
    name: "Thủy đại tỷ",
    symbol: "☵☷",
    structure: "010000",
    meaning: "Khi nước tràn ngập vào ruộng thì lúa thi nhau mọc. Hoàn cảnh của xã hội sau thời gian xơ xác vì chiến tranh, mọi người vui vẻ thuận hòa để mừng rỡ vận hội mới. Nhưng coi chừng bên trong vẫn có những mầm mống đấu tranh gay gắt. Người chính trị đừng quên cuộc giải phóng nước Pháp chẳng đuợc mấy ngày hoan lạc liền đấy là những cuộc tranh giành. De Gaulle người anh hùng giải phóng phải rút về nhà viết hồi ký với lời hứa hai mươi năm sau. Làm thế nào để không thương tổn đại thế quốc gia dân tộc cũng không bị đứng sau người, đấy là điều tuyệt khó trong cái thế Thủy đại tỉ vậy.",
    lines: [
      "Hào 1: Hữu phu tỷ chi, vô cữu - Có lòng thành gần gũi, không lỗi",
      "Hào 2: Tỷ chi tự nội, trinh cát - Gần gũi từ trong, trinh cát",
      "Hào 3: Tỷ chi phi nhân - Gần gũi với người không tốt",
      "Hào 4: Ngoại tỷ chi, trinh cát - Gần gũi từ ngoài, trinh cát",
      "Hào 5: Hiển tỷ, vương dụng tam qu - Gần gũi rõ ràng",
      "Hào 6: Tỷ chi vô thủ, hung - Gần gũi không có đầu, hung"
    ],
    keywords: ["Hợp tác", "Đoàn kết", "Gần gũi", "Hỗ trợ", "Tình bạn"],
    advice: "Thời điểm tốt để xây dựng mối quan hệ và hợp tác. Hãy chọn đúng người để gần gũi.",
    upperTrigram: "Khảm (Nước)",
    lowerTrigram: "Khôn (Đất)",
    element: "Thủy",
    season: "Đông"
  },
  9: {
    number: 9,
    name: "Phong thiên tiểu súc",
    symbol: "☰☴",
    structure: "111011",
    meaning: "Chưa có gì rõ rệt, lòng người muốn lắm mong lắm nhưng vẫn còn giữ thái độ trông và chờ ví như kẻ lữ hành trú vào quán bên đường, nếu vắng thì tiếp tục đi, mưa thì dừng chân hẳn. Người chính trị ở trường hợp này dù có thực lực chăng nữa mà hành động chưa chắc đã thành. Quyết định lúc mây u ám chưa mưa là quyết định dậy non, cho nên cuộc khởi nghĩa 1923 của Hitler mới thất bại. Đảng Cộng sản Pháp lâm vào ngõ bí chẳng biết động thủ thế nào cho phải suốt thời kỳ hiệp ước Đức Nga thân thiện. Phật giáo đã ném ra vài chính  sách hòa bình khi mới chỉ được trông thấy vài đám mây hòa bình do C.I.A chiếu lên nên bị đại bại. Mật vân bất (vũ?) là chuyện thường hiện ra trên chính trị, bởi thế thái độ chính trị truyền thống của người Anh là wait and see thường là thái độ chính xác.",
    lines: [
      "Hào 1: Phục tự đạo, hà kỳ cữu - Trở về con đường, có gì lỗi",
      "Hào 2: Khiên phục, cát - Kéo về, cát lành",
      "Hào 3: Dư thuyết phụ, phu thê phản mục - Xe bị bung nan hoa",
      "Hào 4: Hữu phu, huyết khứ tích xuất - Có lòng thành, máu đi sợ ra",
      "Hào 5: Hữu phu loan như, phú dĩ kỳ lân - Có lòng thành ràng buộc",
      "Hào 6: Ký vũ ký xử - Đã mưa đã dứt"
    ],
    keywords: ["Tích lũy", "Kiên nhẫn", "Từ từ", "Chuẩn bị", "Nhỏ nhưng bền"],
    advice: "Thời điểm tích lũy từng chút một. Không nên vội vàng, hãy kiên nhẫn xây dựng nền tảng.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Tốn (Gió)",
    element: "Mộc",
    season: "Xuân"
  },
  10: {
    number: 10,
    name: "Thiên trạch lý",
    symbol: "☰☱",
    structure: "111011",
    meaning: "Lúc cực nguy nan sống chết treo bằng sợi tóc. Tài trí quyền biến được thử thách đến mức tối đa. Quyết định chậm là thua, quyết định sai là chết. Gia Cát Lượng sực bị đại quân Tư Mã Ý đến, biết có chạy ngay cũng chẳng thóat, liền mở toang cánh cửa thành ngồi ung dung gẩy đàn lừa quân Tư Mã Ý sợ có quân mai phục rút lui ra xa rồi Gia Cát mới chạy. Tào Tháo hết lương trong trận chiến Quan độ, nẩy ra ý táo bạo cướp đốt kho lương của Viên Thiệu ở Ô sào để giải nguy cho mình. Ra lấy được Bắc hà rồ, Chúa Tây sơn cũng nhận thấy cái người đáng quan tâm hơn hết ở đất Bắc là Nguyễn Hữu Chỉnh. Bởi Chỉnh là người trong bọn lại hay giảo quyệt nên Chúa Tây sơn vẫn phải giá ngự bằng đủ mọi cách. Trong lòng Chúa Tây Sơn nẩy ra ý, bỏ rơi Chỉnh để cho người Bắc hà giết để trừ sạch hậu họa. Chúa Tây Sơn mới mật sai các quan đều phải sắp sửa nai nịt để chờ hiệu lệnh. Nhưng ngòai mặt, Chúa Tây Sơn vẫn làm ra vẻ ung dung nhàn hạ cho Chỉnh khỏi ngờ vực. Canh hai đêm ấy, Chúa Tây Sơn sai người vào cáo biệt vua Lê rồi thần tốc rút đi. Gần sáng quân mật báo của Chỉnh về cho Chỉnh hay là Chúa Tây Sơn rút đi rồi. Chỉnh nghe tin đó trong lòng cực kỳ phân vân, tự biết mình thất thế, không dám ở lại, nhưng mà đi cũng khó, đường thuỷ không có thuyền, đường bộ không có quân, muốn trốn không có chỗ trốn, không biết nên đi đường nào. Trong lúc sống chết kinh khủng như vậy, Chỉnh còn nói đùa rằng: Ta đã đi chín châu bốn biển, đến lúc trở về xó bếp lại bị chuột chù cắn chân. Không sợ, không sợ, ta cứ ở đây xem sao. Bấy giờ thuộc hạ của Chỉnh mới hơi vững dạ. Chỉnh bèn mật sai mấy tên thủ túc ra bến Cơ Xá tìm thuyền. Sáng ra, kiếm được một chiếc thuyền buồm, họ liền về báo với Chỉnh. Chỉnh bèn đem cả mấy chục tên thuộc hạ cùng ra cửa Ô Tây long. Người ở kinh đô tứ phía kéo về đuổi bắt Chỉnh. Chỉnh tự vác gươm chống đánh và (mở?) đường xuống đò chạy theo quân của Nguyễn Huệ. Khi nghe tin Chỉnh theo kịp mình, Nguyễn Huệ giật mình nói: Thằng chết lại khéo tìm đường sống. Thật giống con quỷ dạ xoa rều rệu ám ảnh, cắt không thể đứt. Phần Chỉnh ở dưới thuyền, thủ hạ chỉ còn vỏn vẹn ba chục người không dám bỏ thuyền lên cạn. Người xứ Nghệ an thấy Chỉnh cùng đường, họ bàn nhau định ngày khởi công bắt Chỉnh. Chỉnh biết thế mới tính nước bài táo bạo là mưu cướp trận Nghệ an vì nếu không đánh trước thì cũng chết. Chỉnh bèn liều lên bờ thảo hịch mộ quân, và ra lệnh chậm một khắc thì chém. Ở làng ấy có vài người bướng bỉnh, nửa đêm Chỉnh đem toàn lực đến chém sạch những kẻ chống lại lệnh của mình. Những người khác sợ phải theo Chỉnh, chỉ nội trong mấy ngày Chỉnh đã mộ được ngàn quân. Cướp được Nghệ an rồi, Chỉnh sai người ra bắc xin vua Lê phong cho mình làm Trấn thủ Nghệ an để tạo danh nghĩa. Gặp lúc Bắc hà kiêu binh lại nổi loạn, Chỉnh liền đem quân ra bắc giúp vua Lê dẹp loạn. Từ đó quyền Chỉnh ngang với vua. Ngày 1 tháng 11-1963, ông Ngô Đình Diệm bị xô vào cái thế giẫm lên đuôi hổ. Hồi chuông điện thoại của người Mỹ yêu cầu ông từ chức và lên máy bay đi khỏi nước. Ông từ chối và bị giết chết vì quyết định sai đó. Trong khi những Trujillo, Péron cũng ở trong cái thế tương tự đã quyết định trái ngược hẳn với ông Ngô Đình Diệm đều thoát chết.",
    lines: [
      "Hào 1: Tố lý, vãng vô cữu - Đi giày đơn giản, đi không lỗi",
      "Hào 2: Lý đạo thản thản, u nhân trinh cát - Đi đường bằng phẳng",
      "Hào 3: Miễn năng thị, bả năng hành - Mắt mờ có thể nhìn",
      "Hào 4: Lý hổ vĩ, tất tất chung cát - Đạp đuôi hổ, run rẩy",
      "Hào 5: Quế lý, trinh lệ - Đi cương quyết, trinh nguy",
      "Hào 6: Thị lý khảo tường kỳ tường - Xem việc đi, xét kỹ cát hung"
    ],
    keywords: ["Cẩn thận", "Đúng đường", "Thận trọng", "Dũng cảm", "Tự tin"],
    advice: "Hãy cẩn thận nhưng dũng cảm. Đi đúng đường và giữ thái độ khiêm tốn.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Kim",
    season: "Thu"
  },
  11: {
    number: 11,
    name: "Địa thiên thái",
    symbol: "☷☰",
    structure: "000111",
    meaning: "Khoảng giáp thế kỷ thứ 20, Âu châu đã có hơn 30 năm cực thịnh, các nhà làm sử đặt tên thời kỳ này là belle époque. Xã hội yên bình, buôn bán phát đạt, chinh phục dễ dàng, như vậy kinh Dịch gọi là cảnh địa thiên thái. Thuận buồm xuôi gió nói lên cái lợi thế của người làm chính trị trong quãng thời gian nào đó, như Napoléon kể từ 1812 là bắt đầu hết thời kỳ địa thiên thái.",
    lines: [
      "Hào 1: Bạt mao như, dĩ kỳ hối - Nhổ cỏ tranh, cùng với loại",
      "Hào 2: Bao hoang, dụng phùng hà - Bao dung hoang dã, dùng qua sông",
      "Hào 3: Vô bình bất lục, vô vãng bất phục - Không bằng không dốc",
      "Hào 4: Phiên phiên, bất phú dĩ kỳ lân - Bay bay, không giàu cùng hàng xóm",
      "Hào 5: Đế Ất quy muội, dĩ tường nguyên cát - Vua Ất gả em gái",
      "Hào 6: Thành phục ư hoạt, vật dụng sư - Thành đổ xuống hào"
    ],
    keywords: ["Thịnh vượng", "Hòa hợp", "Thuận lợi", "Phát triển", "Cân bằng"],
    advice: "Thời kỳ thịnh vượng và thuận lợi. Hãy tận dụng cơ hội nhưng không được kiêu ngạo.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Càn (Trời)",
    element: "Thổ",
    season: "Xuân"
  },
  12: {
    number: 12,
    name: "Thiên địa bĩ",
    symbol: "☰☷",
    structure: "111000",
    meaning: "Ý kiến dân chúng ngược với chính phủ, việc làm của chính phủ không được dân chúng ủng hộ, như vị Tsar cuối cùng của dòng họ Romano vào những năm 1916, 1917. Mussolini lúc quân Đức Quốc xã tràn vào đất Ý, tổng thống Hoover (Hoa kỳ) trước khủng hoảng kinh tế trầm trọng năm 1929, như Trotsky trước vụ án Mạc tư khoa (Procès de Moscou). Soekarno sau vụ đảo chính của Cộng sản. Chính trị chỉ ra thóat ngõ bí với thái độ và hành động của tập đoàn Phạm Lãi, Văn Chủng và Việt Vương Câu Tiễn sau nhục nhã Cối kê là đoàn kết, nhịn nhục và cố gắng lấy lại sức mạnh. Nếu hành động giống Tôn thất Thuyết, Nguyễn văn Tường và vua Hàm Nghi thì chỉ càng đi sâu vào ngõ bí.",
    lines: [
      "Hào 1: Bạt mao như, dĩ kỳ hối - Nhổ cỏ tranh, cùng với loại",
      "Hào 2: Bao thừa, tiểu nhân cát - Bao dung chịu đựng, tiểu nhân cát",
      "Hào 3: Bao sỉ - Bao dung sự xấu hổ",
      "Hào 4: Hữu mệnh vô cữu - Có lệnh không lỗi",
      "Hào 5: Hưu phủ, đại nhân cát - Dừng tắc nghẽn, đại nhân cát",
      "Hào 6: Khuynh phủ, tiên phủ hậu hỷ - Lật đổ tắc nghẽn"
    ],
    keywords: ["Tắc nghẽn", "Khó khăn", "Kiên nhẫn", "Chờ đợi", "Chuẩn bị"],
    advice: "Thời kỳ khó khăn, cần kiên nhẫn chờ đợi. Không nên hành động vội vàng.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Khôn (Đất)",
    element: "Kim",
    season: "Thu"
  },
  13: {
    number: 13,
    name: "Thiên hỏa đồng nhân",
    symbol: "☰☲",
    structure: "111101",
    meaning: "Lúa chiêm phải có sấm động mới vuợt tốt lên. Khi Franco tiến quân về Madrid, nói với các báo rằng: Tôi hiện có bốn đạo quân tiến đánh thủ đô, ấy là chưa kể đạo quân thứ năm đã nằm sẵn tại đó. Đạo quân thứ năm của Franco là hệ thống tăng lữ Thiên Chúa giáo, Giáo hòang Pie 12 chống lại chế độ Cộng sản. Ngòai ra Franco còn được phe Đức Quốc xã tận tình giúp đỡ. Hitler thả sức một mình không thể đủ khả năng lật đổ cộng hòa Weimar, nhưng quyết định của Von Hindenburg, Tổng thống Đức đã như chất đạm do sấm làm tỏa xuống bón cho lúa chiêm quốc xã. Kinh Dịch viết: Quân tử hòa nhi bất đồng. Thế thiên hỏa đồng nhân là thế mặc dầu có lực sẵn nhưng phải cần sự giúp đỡ bên ngòai, tuy nhiên đấy chỉ là chuyện mượn sức thôi, không thể bị hóa.",
    lines: [
      "Hào 1: Đồng nhân ư môn, vô cữu - Đoàn kết ở cửa, không lỗi",
      "Hào 2: Đồng nhân ư tông, lận - Đoàn kết trong họ, khó khăn",
      "Hào 3: Phục nhung ư mạc, thăng kỳ cao lăng - Ẩn binh trong bụi",
      "Hào 4: Thừa kỳ ung, phất khắc công - Cưỡi lên tường thành",
      "Hào 5: Đồng nhân, tiên hào đào nhi hậu tiếu - Đoàn kết, trước khóc sau cười",
      "Hào 6: Đồng nhân ư giao, vô hối - Đoàn kết ở ngoại ô, không hối"
    ],
    keywords: ["Đoàn kết", "Hợp tác", "Cộng đồng", "Chia sẻ", "Hòa hợp"],
    advice: "Thời điểm tốt để hợp tác và xây dựng mối quan hệ. Hãy mở rộng tầm nhìn ra toàn thể.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Ly (Lửa)",
    element: "Hỏa",
    season: "Hè"
  },
  14: {
    number: 14,
    name: "Hỏa thiên đại hữu",
    symbol: "☲☰",
    structure: "101111",
    meaning: "Thời cơ cực thuận tiện, lòng người, sức mạnh đều dư dụ như Bắc Bình Vương Nguyễn Huệ hai lần đem quân ra Bắc. Hãy tập trung vào mục đích và làm tới không để lỡ thời cơ. Nhưng hãy cẩn trọng vì mặt trời lên đỉnh trời là tới tuần đi xuống. Nếu không tiếp tục duy trì thì cán bộ sinh kiêu sa, lười biếng trong khi kẻ thù đang quyết chí tổ chức phá họai.",
    lines: [
      "Hào 1: Vô giao hại, phi cữu - Không giao thiệp với tệ hại",
      "Hào 2: Đại xa dĩ tải, hữu du vãng - Xe lớn để chở, có chỗ đi",
      "Hào 3: Công dụng hưởng ư thiên tử - Công hầu dâng lên thiên tử",
      "Hào 4: Phỉ kỳ bành, vô cữu - Không phải sự phồng to, không lỗi",
      "Hào 5: Quyết phu giao như, uy như - Lòng thành giao hảo như",
      "Hào 6: Tự thiên hựu chi, cát vô bất lợi - Từ trời phù hộ"
    ],
    keywords: ["Giàu có", "Thành công", "Phồn thịnh", "Chia sẻ", "Khiêm tốn"],
    advice: "Thời kỳ thành công lớn. Hãy biết chia sẻ và không được kiêu ngạo.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Càn (Trời)",
    element: "Hỏa",
    season: "Hè"
  },
  15: {
    number: 15,
    name: "Địa sơn khiêm",
    symbol: "☷☶",
    structure: "000001",
    meaning: "Lực thiệt mạnh mà thái độ rất khiêm hư để tranh thắng. Lấy bề cao của núi lớn mà đối với mức thấp của thung lũng. Ở địa vị lớn mà sử dụng kẻ dưới thì thái độ khiêm hư lúc nào cũng là thủ đọan đáng áp dụng nhất. Lối gào thét của Đức Quốc xã dọa nạt chỉ ăn được thời gian đầu, về sau bị thù ghét. Lối xâm nhập bằng chủ nghĩa, bằng mê hoặc, bằng ảo tưởng xã hội anh em nguy hiểm hơn. Tính kiêu hãnh khinh bạc của Trotsky nhổ nước bọt vào tay Staline khi Staline chìa tay ra chào Trotsky, tất nhiên phải thua tính tình nhẫn nhục, trầm lặng gan dạ của Staline.",
    lines: [
      "Hào 1: Khiêm khiêm quân tử - Khiêm tốn khiêm tốn quân tử",
      "Hào 2: Minh khiêm, trinh cát - Khiêm tốn sáng suốt, trinh cát",
      "Hào 3: Lao khiêm quân tử - Có công mà khiêm tốn",
      "Hào 4: Vô bất lợi, suy khiêm - Không gì không lợi, khiêm tốn",
      "Hào 5: Bất phú dĩ kỳ lân - Không giàu cùng hàng xóm",
      "Hào 6: Minh khiêm, lợi dụng hành sư - Khiêm tốn sáng suốt"
    ],
    keywords: ["Khiêm tốn", "Nhún nhường", "Khiêm nhường", "Đức hạnh", "Cân bằng"],
    advice: "Thời điểm để thực hành đức khiêm tốn. Sự khiêm nhường sẽ mang lại may mắn.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Cấn (Núi)",
    element: "Thổ",
    season: "Cuối hè"
  },
  16: {
    number: 16,
    name: "Lôi địa dự",
    symbol: "☳☷",
    structure: "100000",
    meaning: "Mùa xuân tuy sấm chưa động lớn nhưng lộc cây cỏ đã nẩy ra trong lòng đất, giấc ngủ triền miên của mùa đông sắp hết, đó là lúc đòi hỏi sự chuẩn bị trên mọi mặt, những điều dự đóan, dự ngôn suy tính rất cần thiết. Lúc vừa thắng giặc, mải vui với chiến thắng người ta thường tự cho mình là tài giỏi hơn người nên quên mọi nguy hiểm có thể đưa dẫn đến đại bại. Napoléon đánh dấn tới Moscou mà quên mất mùa đông của nước Nga. Lúc vừa thất trận, bàng hòang với thua thiệt, người ta thường không dám nghĩ đến khả năng thắng trong tương lai. Cả hai tình trạng thiếu chuẩn bị, thiếu dự tri đều nguy hại như nhau.",
    lines: [
      "Hào 1: Minh dự, hung - Khoe khoang vui vẻ, hung",
      "Hào 2: Giới ư thạch, bất chung nhật - Cứng như đá, không cần cả ngày",
      "Hào 3: Cần dự hối, trì hữu hối - Nhìn lên mà vui, chậm có hối",
      "Hào 4: Do dự, đại hữu đắc - Từ vui vẻ, có được lớn",
      "Hào 5: Trinh tật, hằng bất tử - Trinh bệnh, kiên trì không chết",
      "Hào 6: Minh dự, thành hữu du - Mê vui vẻ, thành có thay đổi"
    ],
    keywords: ["Vui vẻ", "Hài lòng", "Chuẩn bị", "Thoải mái", "Cảnh giác"],
    advice: "Thời điểm vui vẻ nhưng cần cảnh giác. Đừng quá đắm chìm trong niềm vui.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Khôn (Đất)",
    element: "Mộc",
    season: "Xuân"
  },
  17: {
    number: 17,
    name: "Trạch lôi tùy",
    symbol: "☱☳",
    structure: "011100",
    meaning: "Đang ở thế chủ động, bị dồn vào thế bị động, muốn tự điều khiển cũng không được nữa, chẳng khác gì tiếng sấm giữa mùa thu, sấm vẫn lớn, nhưng cây lúa không cần nó nữa. Đấy là hòan cảnh của các lực lượng chính trị tại các nước nhỏ yếu trước những biến chuyển chính trị do các nước đại cường thao túng. Tất cả mọi họat động đều phải tùy thuộc một thế khác. Thỏa thuận Nga- Mỹ can thiệp quân sự của Mỹ tới Việt Nam đã biến Mặt trận Giải phóng miền Nam thành một lọai sấm dậy lỗi thời đang mạnh trở nên yếu.",
    lines: [
      "Hào 1: Quan hữu du, trinh cát - Quan có thay đổi, trinh cát",
      "Hào 2: Hệ tiểu tử, thất trượng phu - Buộc đứa bé, mất người đàn ông",
      "Hào 3: Hệ trượng phu, thất tiểu tử - Buộc người đàn ông, mất đứa bé",
      "Hào 4: Tùy hữu hoạch, trinh hung - Theo có được, trinh hung",
      "Hào 5: Gia ư gia mỹ, cát - Chân thành ở điều tốt đẹp, cát",
      "Hào 6: Cữ chi nãi tùy, vương dụng hưởng ư tây sơn - Giữ nó rồi theo"
    ],
    keywords: ["Theo đuổi", "Tuân theo", "Thích ứng", "Linh hoạt", "Chọn lựa"],
    advice: "Biết khi nào nên theo và khi nào nên dẫn dắt. Hãy chọn đúng người để theo.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Chấn (Sấm)",
    element: "Kim",
    season: "Thu"
  },
  18: {
    number: 18,
    name: "Sơn phong cổ",
    symbol: "☶☴",
    structure: "001011",
    meaning: "Bên ngoài được che đậy bằng nước sơn tốt đẹp, bên trong đã bị mối ăn ruỗng. Tưởng Giới Thạch sau Thế chiến thứ Hai, đưa Trung quốc vào hàng tứ cường, kháng chiến thắng lợi, hội hoa đăng khắp nơi tưng bừng. Kỳ thực đồng quan kim mất giá nhanh như tên bay, nội bộ Quốc Dân đảng lục tục chia rẽ, khắp mọi cơ quan bị Cộng sản tiềm nhập phá họai. Chỉ một năm chiến tranh Quốc Cộng cái thế đại cường của Tưởng sụp đổ tan tành. Con ròi nằm trong ruột là một điều rất đáng sợ đối với chính trị. Với cá nhân Tần Cối, cá nhân Thái Tể Bĩ đã làm cho Tống và Ngô mất nước dễ dàng. Bởi với vấn đề chấn chỉnh, tổ chức nội bộ bao giờ cũng là vấn đề hàng đầu của đấu tranh chính trị. Nhiệm vụ của người lãnh đạo là sớm phát hiện những mâu thuẫn, mâu thuẫn giữa ta và địch và mâu thuẫn nội bộ.",
    lines: [
      "Hào 1: Cán phụ chi cổ, hữu tử - Sửa chữa việc của cha",
      "Hào 2: Cán mẫu chi cổ, bất khả trinh - Sửa chữa việc của mẹ",
      "Hào 3: Cán phụ chi cổ, tiểu hữu hối - Sửa chữa việc của cha",
      "Hào 4: Du phụ chi cổ, vãng kiến lận - Khoan dung việc của cha",
      "Hào 5: Cán phụ chi cổ, dụng gia - Sửa chữa việc của cha, dùng khen",
      "Hào 6: Bất sự vương hầu, cao thượng kỳ sự - Không phụng sự vua"
    ],
    keywords: ["Sửa chữa", "Cải thiện", "Khắc phục", "Trách nhiệm", "Kiên trì"],
    advice: "Thời điểm để sửa chữa và cải thiện. Hãy có trách nhiệm với những gì cần khắc phục.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Tốn (Gió)",
    element: "Thổ",
    season: "Cuối hè"
  },
  19: {
    number: 19,
    name: "Địa trạch lâm",
    symbol: "☷☱",
    structure: "000011",
    meaning: "Đường lối mượn gió bẻ măng. Có một chủ trương nhất định nhưng cũng có một  sách lược khôn khéo lựa theo thực tiễn trước. Talleyrand đi hội nghị Vienne sau khi Napoléon bị lưu đầy. Nhiệm vụ của Talleyrand là làm sao cho nước Pháp vẫn giữ địa vị cường quốc mặc dầu Pháp bại trận. Muốn thế Talleyrand phải áp dụng thái độ tuyệt đối mềm dẻo có thể biến ra nhiều hình thù khác nhau.",
    lines: [
      "Hào 1: Hàm lâm, trinh cát - Cùng nhau tiếp cận, trinh cát",
      "Hào 2: Hàm lâm, cát vô bất lợi - Cùng nhau tiếp cận, cát không bất lợi",
      "Hào 3: Cam lâm, vô du lợi - Ngọt ngào tiếp cận, không có lợi",
      "Hào 4: Chí lâm, vô cữu - Đến tiếp cận, không lỗi",
      "Hào 5: Tri lâm, đại quân chi nghi - Khôn ngoan tiếp cận",
      "Hào 6: Đôn lâm, cát vô cữu - Hậu hĩ tiếp cận, cát không lỗi"
    ],
    keywords: ["Tiếp cận", "Đến gần", "Cơ hội", "Phát triển", "Mở rộng"],
    advice: "Thời điểm tốt để tiếp cận và mở rộng. Hãy tận dụng cơ hội một cách khôn ngoan.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Thổ",
    season: "Cuối hè"
  },
  20: {
    number: 20,
    name: "Phong địa quan",
    symbol: "☴☷",
    structure: "011000",
    meaning: "Cơn gió lớn thổi mạnh làm mù trời mù đất, đó là lúc vạn sự nan hành, dấn thân họat động sẽ đem đến nhầm lẫn bước hụt. Tốt hơn hãy bình tâm tĩnh khí, kiên thủ cương vị cho qua cơn mù bụi. Nhìn tức là quan, ý nói chẳng những phải yên lặng còn phải kiểm thảo toàn bộ chính sách. De Gaulle thời kỳ đệ Tứ Cộng hòa bị hất ra ngòai, ông lui về ẩn một nơi để viết hồi ký, bồi dưỡng lực lượng, suy tưởng chính sách tương lai. Sau 14 năm ông xuất quân và thành lập đệ Ngũ Cộng hòa Pháp. Sắp thua ở Hoa lục, Tưởng Giới Thạch đẩy Lý Tôn Nhân ra làm Tổng thống để thân mình được rảnh gánh vác việc đảng, thu xếp căn cứ địa Đài loan.",
    lines: [
      "Hào 1: Đồng quan, tiểu tử vô cữu - Quan sát như trẻ con, tiểu tử không lỗi",
      "Hào 2: Khuy quan, lợi nữ trinh - Nhìn qua khe cửa, lợi nữ trinh",
      "Hào 3: Quan ngã sinh, tiến thối - Quan sát đời mình, tiến hay lùi",
      "Hào 4: Quan quốc chi quang - Quan sát vinh quang của nước",
      "Hào 5: Quan ngã sinh, quân tử vô cữu - Quan sát đời mình",
      "Hào 6: Quan kỳ sinh, quân tử vô cữu - Quan sát đời người khác"
    ],
    keywords: ["Quan sát", "Nhìn ngắm", "Suy ngẫm", "Học hỏi", "Hiểu biết"],
    advice: "Thời điểm để quan sát và học hỏi. Hãy nhìn xa và suy ngẫm sâu sắc.",
    upperTrigram: "Tốn (Gió)",
    lowerTrigram: "Khôn (Đất)",
    element: "Mộc",
    season: "Xuân"
  },
  21: {
    number: 21,
    name: "Hỏa lôi phê hạp",
    symbol: "☲☳",
    structure: "101001",
    meaning: "Đây là một thế chính trị gặp chướng ngại vật len vào giữa và cần phải đập vỡ thì mới tiến đến mục tiêu. Tỷ dụ minh ước hợp tung của sáu nước khiến Tần không thôn tính được lục quốc, phải phá vỡ minh ước hợp tung mới mong xâm lấn thống nhất. Việt Câu Tiễn mê hoặc vua Ngô, vua Ngô có Ngũ Tử Tư can gián nên còn tỉnh táo, vì vậy phe Việt Câu Tiễn phải lập mưu giết Ngũ Tử Tư trước. Năm 1945 quân đội Trung hoa đóng ở Bắc vĩ tuyến là một chướng ngại vật ngáng giữa họng Việt Minh không cho nắm trọn chính quyền, quân đội Trung hoa cũng đồng thời là một chướng ngại vật trung gian không cho Pháp tiến vào miền Bắc.",
    lines: [
      "Hào 1: Lý hiệu diệt chỉ, vô cữu - Đeo cùm diệt ngón chân, không lỗi",
      "Hào 2: Thệ phù diệt tị, vô cữu - Cắn thịt mềm diệt mũi, không lỗi",
      "Hào 3: Thệ lạp nhục, ngộ độc - Cắn thịt khô, gặp độc",
      "Hào 4: Thệ can tử, đắc kim thỉ - Cắn thịt khô có xương",
      "Hào 5: Thệ can nhục, đắc hoàng kim - Cắn thịt khô, được vàng",
      "Hào 6: Hà giá diệt nhĩ, hung - Đeo cùm diệt tai, hung"
    ],
    keywords: ["Quyết đoán", "Cắt đứt", "Công lý", "Kỷ luật", "Hành động"],
    advice: "Thời điểm cần quyết đoán và hành động. Đừng do dự khi phải đưa ra quyết định khó khăn.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Chấn (Sấm)",
    element: "Hỏa",
    season: "Hè"
  },
  22: {
    number: 22,
    name: "Hỏa sơn bí",
    symbol: "☶☲",
    structure: "001101",
    meaning: "Thu sơn hồng diệp ánh tà dương, buổi chiều nắng xế rực rỡ nơi chân trời và sau đấy là đêm tối. Chính trị thấy hiện ra màu sắc giả dối này, cuộc cách mạng Pháp đã được báo hiệu bằng kim cương vàng ngọc hội hè tưng bừng của cuối triều vua Louis 16. Paris vào năm 1939 thật hoa lệ, các nhà lãnh đạo tin tưởng vào chiến lũy Maginot thừa sức ngăn chặn xâm lược Đức, nước Pháp mạnh hơn bao giờ hết. Nhiều chính trị gia trong cũng như ngòai nước bị lừa vì vẻ huy hòang ảo ảnh đó.",
    lines: [
      "Hào 1: Bí kỳ chỉ, xá xa nhi đồ - Trang trí ngón chân, bỏ xe mà đi bộ",
      "Hào 2: Bí kỳ tu - Trang trí râu ria",
      "Hào 3: Bí như, nhu như - Trang trí như, mềm mại như",
      "Hào 4: Bí như, bạch mã hàn như - Trang trí như, ngựa trắng như",
      "Hào 5: Bí ư khâu viên, thúc bạch thúc - Trang trí ở đồi vườn",
      "Hào 6: Bạch bí, vô cữu - Trang trí trắng, không lỗi"
    ],
    keywords: ["Vẻ đẹp", "Trang trí", "Hình thức", "Nghệ thuật", "Tinh tế"],
    advice: "Chú ý đến vẻ bề ngoài nhưng đừng quên bản chất. Cân bằng giữa hình thức và nội dung.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Ly (Lửa)",
    element: "Hỏa",
    season: "Hè"
  },
  23: {
    number: 23,
    name: "Sơn địa bác",
    symbol: "☶☷",
    structure: "001000",
    meaning: "Tình thế hết đường cứu vãn, trên thân hình con sư tử đầy những vết thương ròi bọ nhung nhúc, như chế độ Tsar hòang năm 1917 và Tuởng Giới Thạch năm 1949. Hitler sau khi thất trận tại Léningrad. An Dương Vương bị Trọng Thủy đánh cắp mất nỏ thần.",
    lines: [
      "Hào 1: Bác sàng dĩ túc, miệt trinh hung - Bóc giường từ chân",
      "Hào 2: Bác sàng dĩ biện, miệt trinh hung - Bóc giường từ mép",
      "Hào 3: Bác chi, vô cữu - Bóc lột nó, không lỗi",
      "Hào 4: Bác sàng dĩ phù, hung - Bóc giường đến da, hung",
      "Hào 5: Quán ngư, dĩ cung nhân sủng - Xâu cá, được cung nhân sủng",
      "Hào 6: Thạc quả bất thực - Quả lớn không ăn"
    ],
    keywords: ["Suy tàn", "Bóc lột", "Khó khăn", "Kiên nhẫn", "Chờ đợi"],
    advice: "Thời kỳ khó khăn và suy tàn. Hãy kiên nhẫn chờ đợi thời cơ mới.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Khôn (Đất)",
    element: "Thổ",
    season: "Cuối hè"
  },
  24: {
    number: 24,
    name: "Địa lôi phục",
    symbol: "☷☳",
    structure: "000001",
    meaning: "Do không khí tiêu trầm của 1905 tiến lên nhiệt náo hăng say của 1917. Lénine nhìn sự thất bại của cuộc nổi dậy 1905 để rút ra bao kinh nghiệm đấu tranh, ông hy vọng sự khôi phục, ông chờ đợi một mùa xuân nếu biết sửa đổi lối làm việc. Lénine coi cuộc đấu tranh 1905 như là việc phải học tập của những người muốn làm sử, ông căn cứ vào ưu khuyết điểm từ đấy mà suy nghĩ cho kế họach mới. Phải có 1905 Lénine mới nhận thấy rằng: vô sản công nghiệp đã đại bại vì không có quần chúng nông dân hưởng ứng cách mạng.",
    lines: [
      "Hào 1: Bất viễn phục, vô kỳ hối - Không xa mà trở lại, không có hối",
      "Hào 2: Hưu phục, cát - Tốt đẹp trở lại, cát",
      "Hào 3: Tần phục, lệ vô cữu - Thường xuyên trở lại, nguy không lỗi",
      "Hào 4: Trung hành độc phục - Đi giữa đường một mình trở lại",
      "Hào 5: Đôn phục, vô hối - Hậu hĩ trở lại, không hối",
      "Hào 6: Mê phục, hung - Mê muội trở lại, hung"
    ],
    keywords: ["Trở lại", "Phục hồi", "Khởi đầu mới", "Cơ hội", "Hy vọng"],
    advice: "Thời điểm để bắt đầu lại và phục hồi. Cơ hội mới đang đến.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Chấn (Sấm)",
    element: "Mộc",
    season: "Đông chí"
  },
  25: {
    number: 25,
    name: "Thiên lôi vô vọng",
    symbol: "☰☳",
    structure: "111001",
    meaning: "Nữ văn sỹ Pearl Buck trong cuốn Good Earth có tả thảm cảnh của bác nông dân Vương Long đang tràn ngập hy vọng với lúa chín đầy đồng thì bỗng đâu bão táp đổ xuống, sau đến châu chấu kéo đến phá họai đồng ruộng. Có những lúc sự nghiệp chính trị cũng chịu chung một hòan cảnh với Vương Long, bị những thế lớn ở đâu sập đến làm bao xây dựng đổ vỡ. Trốn cũng chẳng được nào, vậy hãy bình tĩnh tiếp thụ hòan cảnh mới như bác Vương Long nhẫn nại tiếp tục chiến đấu.",
    lines: [
      "Hào 1: Vô vọng, vãng cát - Không có ý đồ xấu, đi cát",
      "Hào 2: Bất canh hoạch, bất bồ thu - Không cày mà gặt, không gieo mà thu",
      "Hào 3: Vô vọng chi tai - Tai họa của không có ý đồ xấu",
      "Hào 4: Khả trinh, vô cữu - Có thể trinh, không lỗi",
      "Hào 5: Vô vọng chi tật, vật dược hữu hỷ - Bệnh không có ý đồ xấu",
      "Hào 6: Vô vọng, hành hữu quyên - Không có ý đồ xấu, hành có lỗi"
    ],
    keywords: ["Chân thành", "Tự nhiên", "Không tham", "Thuần khiết", "Đơn giản"],
    advice: "Hãy giữ tâm chân thành và hành động tự nhiên. Đừng có ý đồ xấu.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Chấn (Sấm)",
    element: "Kim",
    season: "Thu"
  },
  26: {
    number: 26,
    name: "Sơn địa đại súc",
    symbol: "☶☰",
    structure: "001111",
    meaning: "Trong Việt Nam sử lược, ông Trần Trọng Kim viết: May lúc ấy có một đấng anh hùng nổi lên, kéo cờ nghĩa để chống với giặc Minh, trong 10 năm ấy lại được giang sơn cũ, và xây đắp lại nền độc lập cho nước Nam. Đấng anh hùng ấy, người ở làng Lam Sơn, huyện Thụy Nguyên, phủ Thiệu Hóa, tỉnh Thanh Hóa, họ Lê, tên là Lợi. Đã mấy đời làm nghề canh nông, nhà vẫn giàu có, lại hay giúp đỡ cho kẻ nghèo khó, cho nên mọi người đều phục, và những tôi tớ ước có hàng nghìn người... Ông giấu tiếng ở chốn sơn lâm, đón mời những kẻ hào kiệt, chiêu tập những kẻ lưu vong. Bất cứ nghiệp lớn nào trước khi nó thành tựu cũng đều phải qua một thời gian dưỡng trí tích lực. Trước khi mở một chiến dịch tất cần điều nghiên và chuẩn bị.",
    lines: [
      "Hào 1: Hữu lệ, lợi dĩ - Có nguy hiểm, lợi dừng lại",
      "Hào 2: Dư thuyết phụ - Xe bị bung nan hoa",
      "Hào 3: Lương mã trục, lợi gian nan trinh - Ngựa tốt đuổi theo",
      "Hào 4: Đồng ngưu chi cổ, nguyên cát - Ách của bò con, rất cát",
      "Hào 5: Thí hạn chi nha, cát - Răng của heo thiến, cát",
      "Hào 6: Hà thiên chi cù, hanh - Con đường của trời, hanh thông"
    ],
    keywords: ["Tích lũy lớn", "Nuôi dưỡng", "Kiềm chế", "Chuẩn bị", "Kiên nhẫn"],
    advice: "Thời điểm tích lũy và chuẩn bị cho tương lai. Hãy kiên nhẫn nuôi dưỡng sức mạnh.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Càn (Trời)",
    element: "Thổ",
    season: "Cuối hè"
  },
  27: {
    number: 27,
    name: "Sơn lôi dĩnh",
    symbol: "☶☳",
    structure: "001001",
    meaning: "Kinh Dịch giảng Sơn lôi dĩnh rằng: Quan dĩnh tự cầu khẩu thực. Ý nói hãy đo miệng mà nuốt mồi. Lực lượng chính trị đã đủ để phát huy, nhưng coi chừng phải tính sức mà tung hòanh. Kinh Dịch lại giảng thêm: Hổ thị trầm trầm, kỳ dục trục trục, nghĩa là con hổ đăm đăm nhìn vào con mồi cái thèm cuồn cuộn nổi dậy. Ý nói đã đành nên lượng sức, nhưng cũng phải say mê tìm chiến thắng.",
    lines: [
      "Hào 1: Xá nhĩ linh quy, quan ngã đoạt di - Bỏ linh quy của ngươi",
      "Hào 2: Điên di, phất kinh ư khâu di - Nuôi dưỡng lộn ngược",
      "Hào 3: Phất di, trinh hung - Trái với nuôi dưỡng, trinh hung",
      "Hào 4: Điên di cát - Nuôi dưỡng lộn ngược cát",
      "Hào 5: Phất kinh, cư trinh cát - Trái với thường, ở trinh cát",
      "Hào 6: Do di, lệ cát - Từ nuôi dưỡng, nguy cát"
    ],
    keywords: ["Nuôi dưỡng", "Chăm sóc", "Dinh dưỡng", "Tự chăm sóc", "Cân bằng"],
    advice: "Chú ý đến việc nuôi dưỡng bản thân và người khác. Cân bằng giữa cho và nhận.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Chấn (Sấm)",
    element: "Thổ",
    season: "Cuối hè"
  },
  28: {
    number: 28,
    name: "Trạch phong đại quá",
    symbol: "☱☴",
    structure: "011110",
    meaning: "Con trăn quấn được heo rừng. Con heo rừng lớn, trăn nuốt vào bụng chưa tiêu. Lúc ấy chính là lúc con trăn yếu nhất. Chung quanh chiến thắng là những nguy biến rình rập. Nhật vào Trung quốc thật dễ, nhưng chính Nhật đã sa lầy ở đó. Phe Brutus giết César rồi, nhưng không nắm vững tình hình, bị Marc Antoine dấy động dân chúng đánh đuổi, Brutus phải tự vẫn. Vương Dõan giết Đổng Trác rồi lên nắm chính quyền, trong vòng vài tháng chính quyền tan rã và bị Lý Thôi Quách Dĩ đâm chết.",
    lines: [
      "Hào 1: Tạ dĩ bạch mao, vô cữu - Lót bằng cỏ tranh trắng, không lỗi",
      "Hào 2: Khô dương sinh đễ - Cây dương khô mọc chồi",
      "Hào 3: Đống nạo hung, vô cữu - Đòn tay gãy, hung, không lỗi",
      "Hào 4: Đống long cát, hữu tha lận - Đòn tay cong cát, có khác khó",
      "Hào 5: Khô dương sinh hoa - Cây dương khô nở hoa",
      "Hào 6: Quá thiệp diệt đảnh, hung vô cữu - Lội nước qua đầu"
    ],
    keywords: ["Vượt quá", "Thái quá", "Cực đoan", "Cân bằng", "Thận trọng"],
    advice: "Tình huống vượt quá giới hạn. Cần thận trọng và tìm cách cân bằng lại.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Tốn (Gió)",
    element: "Kim",
    season: "Thu"
  },
  29: {
    number: 29,
    name: "Khảm vi thủy",
    symbol: "☵☵",
    structure: "010010",
    meaning: "Hoàn cảnh đen tối nhất cho người làm chính trị mênh mông sóng nước ngút trời. Đây là lúc mà người chính trị cần hơn lúc nào hết lòng gan dạ, nhẫn nại chiến đấu với sóng nước trùng trùng, lúc nào cũng giữ cho đầu nhô khỏi nước không bị chìm. Phải có thái độ ấy Mao Trạch Đông vá tập đòan của ông mới thực hiện được cuộc Vạn lý trường chinh gian khổ suốt từ miền Nam lên miền Bắc, từ Thụy kim tới Diên an. Ngũ Tử Tư trốn tránh vua Sở, chỉ một đêm lo nghĩ mà đầu đã bạc phơ. Gia Long trốn lủi trong rừng, đói quá phải đào củ chuối mà ăn.Hòan cảnh đen tối nhất cho người làm chính trị mênh mông sóng nước ngút trời. Đây là lúc mà người chính trị cần hơn lúc nào hết lòng gan dạ, nhẫn nại chiến đấu với sóng nước trùng trùng, lúc nào cũng giữ cho đầu nhô khỏi nước không bị chìm. Phải có thái độ ấy Mao Trạch Đông vá tập đòan của ông mới thực hiện được cuộc Vạn lý trường chinh gian khổ suốt từ miền Nam lên miền Bắc, từ Thụy kim tới Diên an. Ngũ Tử Tư trốn tránh vua Sở, chỉ một đêm lo nghĩ mà đầu đã bạc phơ. Gia Long trốn lủi trong rừng, đói quá phải đào củ chuối mà ăn.",
    lines: [
      "Hào 1: Tập khảm, nhập ư khảm hãm - Khảm chồng khảm, vào hố khảm",
      "Hào 2: Khảm hữu hiểm, cầu tiểu đắc - Khảm có hiểm, cầu nhỏ được",
      "Hào 3: Lai chi khảm khảm - Đến thì khảm khảm",
      "Hào 4: Phiêu tửu, phiêu quỹ - Rượu một chén, quỹ một cái",
      "Hào 5: Khảm bất doanh, kỳ lai vô cữu - Khảm không đầy, chỉ đến không lỗi",
      "Hào 6: Hệ dụng thằng thằng - Buộc bằng dây thừng"
    ],
    keywords: ["Hiểm nguy", "Thử thách", "Kiên trì", "Thích ứng", "Vượt qua"],
    advice: "Thời kỳ thử thách và khó khăn. Hãy kiên trì và tìm cách thích ứng để vượt qua.",
    upperTrigram: "Khảm (Nước)",
    lowerTrigram: "Khảm (Nước)",
    element: "Thủy",
    season: "Đông"
  },
  30: {
    number: 30,
    name: "Ly vi hỏa",
    symbol: "☲☲",
    structure: "101101",
    meaning: "Nắng đầu mùa hạ, đem ánh sáng diệp lục tố xuống cho cỏ cây xanh tốt. Khí thế của một lực lượng đang lên thay thế cho những gì đã lỗi thời như vị Hòang thái tử lên nối ngôi vua, lòng tràn ngập bao lý tưởng tốt đẹp hăng hái. Tuy nhiên phải coi chừng vì Ly là lửa, lửa rất cần nhưng nếu quá lạm sẽ thành hỏa tai. Ánh nắng đem nguồn sống cho cỏ cây, nhưng nếu nắng gắt sẽ làm sự sống héo hon. Vua Constantin của Hy lạp năm 1967 đã thất bại vì sự quá lạm gay gắt đó. Vương Mãng sụp đổ vì thi hành chính  sách quá mới mẻ mà lại quá vội vã.",
    lines: [
      "Hào 1: Lý chi bộ, kính chi vô cữu - Bước của ly, kính trọng không lỗi",
      "Hào 2: Hoàng ly, nguyên cát - Ly vàng, rất cát",
      "Hào 3: Nhật chiết chi ly, bất cổ phủ nhi ca - Ly của mặt trời lặn",
      "Hào 4: Đột như kỳ lai như - Đột ngột như, đến như",
      "Hào 5: Xuất thế như, thích thế như - Ra nước mắt như, thở dài như",
      "Hào 6: Vương dụng xuất chinh - Vua dùng xuất chinh"
    ],
    keywords: ["Ánh sáng", "Sáng suốt", "Bám víu", "Rõ ràng", "Chiếu sáng"],
    advice: "Thời điểm sáng suốt và rõ ràng. Hãy sử dụng trí tuệ để chiếu sáng con đường.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Ly (Lửa)",
    element: "Hỏa",
    season: "Hè"
  },
  31: {
    number: 31,
    name: "Trạch sơn hàm",
    symbol: "☱☶",
    structure: "011001",
    meaning: "Thời thế mới mẻ, lòng người quá rung động bồng bột. Đó là lúc mau mau chớp ngay nhân tâm chớ để lỡ cơ hội, cảm tình lúc ban sơ thật quan trọng, nên việc hay hay dở không là do vấn đề xử sự lúc đầu. Năm 1945, Nhật bản đầu hàng, phe Quốc gia đã bỏ cuộc chạy đua với Cộng sản để cướp lấy cái thế mới mẻ, gây thành cuộc chiến gian khổ kéo dài cả mấy chục năm.",
    lines: [
      "Hào 1: Hàm kỳ bác - Cảm ứng ngón chân cái",
      "Hào 2: Hàm kỳ phệ, hung - Cảm ứng bắp chân, hung",
      "Hào 3: Hàm kỳ cổ, chấp kỳ tùy - Cảm ứng đùi, giữ theo",
      "Hào 4: Trinh cát, hối vong - Trinh cát, hối mất",
      "Hào 5: Hàm kỳ mai, vô hối - Cảm ứng lưng, không hối",
      "Hào 6: Hàm kỳ phụ giáp thiệt - Cảm ứng má, hàm, lưỡi"
    ],
    keywords: ["Cảm ứng", "Tương tác", "Thu hút", "Ảnh hưởng", "Kết nối"],
    advice: "Thời điểm tốt để tương tác và kết nối. Hãy mở lòng để cảm nhận và ảnh hưởng lẫn nhau.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Cấn (Núi)",
    element: "Kim",
    season: "Thu"
  },
  32: {
    number: 32,
    name: "Lôi phong hằng",
    symbol: "☳☴",
    structure: "100011",
    meaning: "Churchill phê bình Hitler là anh chàng bắt cá vụng về, cậy sức nhẩy ùm xuống ao quấy rộn nước lên, rồi tay chộp con này tay bắt con khác rút cục mệt xác mà cá không bắt được hết. Nếu là tôi... lời Churchill, thì tôi sẽ từ từ tát cạn ao, ao khô cá nằm chềnh ềnh chỉ việc thò tay tóm từng chú bỏ vào rọ. Trong trận Thế chiến thứ Hai, Churchill đã đem thái độ trầm tĩnh của một người lão luyện tuổi tác để mà chống thái độ bột khí thiên tài của Hitler. Kết quả Churchill thắng. Dùng ít sức mà dành được thắng nhiều là lẽ thường của chính trị. Lôi phong hằng theo Dịch lý tìm được cái tĩnh trong sự động. Tâm vững như bàn thạch mà tung đòn ra đánh người. Tôn Tử nói: Trước hết phải lập được cái thế không bại rồi sau mới nói tới chuyện thắng.",
    lines: [
      "Hào 1: Tuân hằng, trinh hung - Đào sâu kiên trì, trinh hung",
      "Hào 2: Hối vong - Hối mất",
      "Hào 3: Bất hằng kỳ đức - Không kiên trì đức hạnh",
      "Hào 4: Điền vô cầm - Ruộng không chim",
      "Hào 5: Hằng kỳ đức, trinh - Kiên trì đức hạnh, trinh",
      "Hào 6: Chấn hằng, hung - Rung động kiên trì, hung"
    ],
    keywords: ["Bền vững", "Kiên trì", "Lâu dài", "Ổn định", "Nhất quán"],
    advice: "Thời điểm cần kiên trì và bền vững. Hãy duy trì sự nhất quán trong hành động.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Tốn (Gió)",
    element: "Mộc",
    season: "Xuân"
  },
  33: {
    number: 33,
    name: "Thiên sơn độn",
    symbol: "☰☶",
    structure: "111001",
    meaning: "Vận khí suy thóai, không thể găng mà đương đầu, phải chạy để bảo tòan thân mạng. Năm 1907, tình hình mỗi ngày một nặng, tập đòan Bôn-sê-vích ở Phần lan bị bao vây, vòng vây mật vụ khép chặt dần. Trung ương đảng bộ họp gấp và chuyển cơ sở chạy sang một nước khác. Đêm di chuyển Lénine phải đi qua con sông đóng băng, bỗng một tảng băng sụt dưới chân ông, may mắn Lénine thóat nạn, quay lại nhìn dòng nước xóay, Lénine tự nghĩ nếu vừa rồi mà thụt chân xuống thì thật là một cái chết cực ngu xuẩn. Nguyễn Hòang thấy anh là Nguyễn Thông bị Trịnh Kiểm nghi ngờ giết đi, nên sợ có ngày Trịnh Kiểm tính đến chuyện ám hại cả mình, nên nhờ chị là bà Ngọc Bảo xin Trịnh Kiểm cho vào trấn phía Nam.",
    lines: [
      "Hào 1: Độn vĩ, lệ - Rút lui đuôi, nguy",
      "Hào 2: Chấp chi dụng hoàng ngưu chi cách - Giữ nó bằng da bò vàng",
      "Hào 3: Hệ độn, hữu tật lệ - Buộc rút lui, có bệnh nguy",
      "Hào 4: Hảo độn quân tử cát - Rút lui tốt, quân tử cát",
      "Hào 5: Gia độn, trinh cát - Rút lui tốt đẹp, trinh cát",
      "Hào 6: Phì độn, vô bất lợi - Rút lui béo tốt, không gì không lợi"
    ],
    keywords: ["Rút lui", "Ẩn náu", "Thời cơ", "Chờ đợi", "Khôn ngoan"],
    advice: "Thời điểm nên rút lui và chờ đợi. Đây không phải lúc để tiến lên.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Cấn (Núi)",
    element: "Kim",
    season: "Thu"
  },
  34: {
    number: 34,
    name: "Lôi thiên đại tráng",
    symbol: "☳☰",
    structure: "100111",
    meaning: "Thừa thắng nhuệ khí như con ngựa đua vừa nghe hiệu lệnh khởi hành. Nhưng mới vài vòng đã có nhiều con vì không biết dưỡng lực vì tưởng mình đủ sức, nên yếu dần, có nhiều con chạy bừa bãi nên vấp ngã. Vừa chiếm chính quyền Nga, Trotsky lên tiếng cổ vũ cho cuộc cách mạng đỏ trên tòan thế giới ngay tức khắc, trong khi Lénine và nhất là Staline chủ trương nước Nga trước đã, hãy cách mạng cho nước Nga thôi. Đường lối của Trotsky quả đã kém chính xác, kém thực tế không nhìn thấy rằng Nga sau 1917 chỉ là một người ốm lâu ngày mới khỏi. Nếu đường lối ấy mà áp dụng thì tất cả nước tư bản Âu châu đã quây quần tiêu diệt bằng được chính thể xã hội Nga để tự vệ.",
    lines: [
      "Hào 1: Tráng ư chỉ, chinh hung - Mạnh ở ngón chân, chinh hung",
      "Hào 2: Trinh cát - Trinh cát",
      "Hào 3: Tiểu nhân dụng tráng - Tiểu nhân dùng mạnh",
      "Hào 4: Trinh cát hối vong - Trinh cát hối mất",
      "Hào 5: Táng dương ư dịch, vô hối - Mất dê ở Yi, không hối",
      "Hào 6: Dương xúc phiên, bất năng thối - Dê húc hàng rào"
    ],
    keywords: ["Sức mạnh", "Hùng mạnh", "Quyền lực", "Thận trọng", "Kiểm soát"],
    advice: "Thời kỳ có sức mạnh lớn. Hãy sử dụng quyền lực một cách khôn ngoan và thận trọng.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Càn (Trời)",
    element: "Mộc",
    season: "Xuân"
  },
  35: {
    number: 35,
    name: "Hỏa địa tấn",
    symbol: "☲☷",
    structure: "101000",
    meaning: "Nắng sớm đầy tia sáng hy vọng cho một ngày đẹp trời. Vạn sự khởi đầu nan, ánh nắng ban mai tượng trưng cho lực lượng chính trị mới xuất hiện nên cần động viên khí sức để gây ấn tượng cho mọi người. Tập đòan trẻ trung của J.F. Kennedy tiến quân vào tòa Bạch ốc năm 1960, các báo chí gọi là đợt sóng mới của Hoa kỳ đã làm cho không khí chính trị Hoa kỳ mát mẻ trở lại, phe bảo thủ cảm thấy lo sợ.",
    lines: [
      "Hào 1: Tấn như, tồi như - Tiến như, chậm như",
      "Hào 2: Tấn như, sầu như - Tiến như, buồn như",
      "Hào 3: Chúng duẫn, hối vong - Mọi người tin tưởng, hối mất",
      "Hào 4: Tấn như thạc thử - Tiến như chuột cống",
      "Hào 5: Hối vong, thất đắc vật tuất - Hối mất, mất được đừng lo",
      "Hào 6: Tấn kỳ giác - Tiến sừng của nó"
    ],
    keywords: ["Tiến bộ", "Thăng tiến", "Phát triển", "Cơ hội", "Thành công"],
    advice: "Thời điểm tốt để tiến bộ và phát triển. Hãy tận dụng cơ hội để thăng tiến.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Khôn (Đất)",
    element: "Hỏa",
    season: "Hè"
  },
  36: {
    number: 36,
    name: "Địa hỏa minh di",
    symbol: "☷☲",
    structure: "000101",
    meaning: "Minh di, kinh Dịch giải là ánh sáng bị tiêu diệt. Trời đất tối hù, càng bước càng hụt. Tốt hơn là ẩn một nơi đợi trời sáng. Vầng thái dương rơi xuống đất ví như người chính trị tài ba, nhưng bị bao vây bởi nhiều kẻ thù ganh ghét, thế tất phải lẩn trốn cho mau không thì họa đến sau lưng.Vầng thái dương rơi xuống đất cũng ví như người chính trị trước đây đứng trên một cái thế chói lọi nào đó, nay thời cục biến chuyển cái thế ấy mất đi, như Laurenti Béria sau khi Staline qua đời. Béria bị bao vây và bị bắt giết mặc dầu Béria rất quỷ quyệt cũng đã tính trước nhiều nước cờ.",
    lines: [
      "Hào 1: Minh di ư phi, thùy kỳ dực - Ánh sáng bị thương khi bay",
      "Hào 2: Minh di, di ư tả cổ - Ánh sáng bị thương, thương ở đùi trái",
      "Hào 3: Minh di ư nam sưu - Ánh sáng bị thương ở Nam săn",
      "Hào 4: Nhập ư tả phúc - Vào bụng bên trái",
      "Hào 5: Cơ tử chi minh di - Ánh sáng bị thương của Cơ Tử",
      "Hào 6: Bất minh, tối - Không sáng, tối"
    ],
    keywords: ["Khó khăn", "Tổn thương", "Kiên nhẫn", "Ẩn náu", "Chờ đợi"],
    advice: "Thời kỳ khó khăn và tối tăm. Hãy kiên nhẫn và bảo vệ ánh sáng bên trong.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Ly (Lửa)",
    element: "Thổ",
    season: "Cuối hè"
  },
  37: {
    number: 37,
    name: "Phong hỏa gia nhân",
    symbol: "☴☲",
    structure: "011101",
    meaning: "Trở về nhà bên người vợ hiền với ngọn lửa bếp reo vui. Đây là một thế chính trị đã hết phát triển, nên phải cố thủ. Tôn Quyền ở Giang đông khi nối ngôi Tôn  Sách rút kinh nghiệm những quẫy động không ăn thua gì vì Giang Đông không đủ điều kiện như Trung Nguyên của nhà Ngụy, nên đành chỉ thu vén việc nhà củng cố đất Giang đông để nắm lấy một khu vực ngày nào mà thế chia ba chân vạc vẫn tồn tại. Ngọn lửa bếp của Tôn Quyền do tể tướng Tưởng Uyển chịu trách nhiệm.",
    lines: [
      "Hào 1: Nhàn hữu gia, hối vong - Ngăn chặn có gia, hối mất",
      "Hào 2: Vô du tùy, tại trung quỹ - Không đi theo, ở giữa nuôi",
      "Hào 3: Gia nhân hách hách - Gia nhân nghiêm khắc",
      "Hào 4: Phú gia, đại cát - Gia giàu, đại cát",
      "Hào 5: Vương giả chi gia - Gia của vua",
      "Hào 6: Hữu phu uy như - Có uy nghiêm như"
    ],
    keywords: ["Gia đình", "Gia đạo", "Hòa hợp", "Trách nhiệm", "Yêu thương"],
    advice: "Thời điểm chú trọng gia đình và gia đạo. Hãy xây dựng hòa hợp trong gia đình.",
    upperTrigram: "Tốn (Gió)",
    lowerTrigram: "Ly (Lửa)",
    element: "Mộc",
    season: "Xuân"
  },
  38: {
    number: 38,
    name: "Hỏa trạch khuê",
    symbol: "☲☱",
    structure: "101011",
    meaning: "Nước với lửa xung đột nhau, xung đột bùng nổ, hết thỏa hiệp, hết hòa thuận. Sự chịu đựng nhau trong chính trị chỉ có tính cách tạm thời, đấu tranh mới là hiện tượng thường xuyên. Người chính trị không lúc nào được quên cảnh giác điều ấy, luôn luôn đề phòng và đóan biết trước lúc nào là lúc hết thời kỳ chịu đựng. Ba mươi năm làm việc chung với nhau cũng không đủ để ngăn Mao Trạch Đông quyết liệt tiêu diệt sinh mệnh và sự nghiệp chính trị của Lưu Thiếu Kỳ. Zinoviev, Kamenev và Staline đứng vào một trận tuyến lật đổ Trotsky. Kết cuộc Trotsky chỉ bị lưu đày, còn Zinoviev và Kamenev thì bị Staline thủ tiêu.",
    lines: [
      "Hào 1: Hối vong, táng mã vật trục - Hối mất, mất ngựa đừng đuổi",
      "Hào 2: Ngộ chủ ư hạng - Gặp chủ ở hẻm",
      "Hào 3: Kiến dư khiên dư - Thấy xe kéo ngựa",
      "Hào 4: Cô lập vô phụ - Cô lập không bạn",
      "Hào 5: Hối vong, tông phạt hợp phù - Hối mất, tông phái hợp da",
      "Hào 6: Cô lập, kiến thỉ phụ đồ - Cô lập, thấy heo bùn"
    ],
    keywords: ["Đối lập", "Mâu thuẫn", "Hiểu lầm", "Hòa giải", "Kiên nhẫn"],
    advice: "Thời kỳ có mâu thuẫn và hiểu lầm. Hãy kiên nhẫn tìm cách hòa giải.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Hỏa",
    season: "Hè"
  },
  39: {
    number: 39,
    name: "hủy sơn kiển",
    symbol: "☵☶",
    structure: "010001",
    meaning: "Kinh Dịch viết: Kiển! nan dã.Hiểm tai tiền Kiển hiểm nhi năng chỉ. Tri hĩ tai. Nghĩa là: Kiển! Lúc khó khăn nguy hiểm ở trước mặt. Thấy nguy mà dừng được. Thế mới gọi là biết. Chính quyền Kennedy, quyết liệt với việc Nga định biến Cuba thành căn cứ hỏa tiễn ngay trong lòng châu Mỹ, hạ tối hậu thư cho Nga. Khroutchev dịu ngay cấp tốc cho dời hỏa tiễn khỏi Cuba. Robert Kennedy trước khi ra tranh cử, ông có lẽ đã nghi hoặc sẽ bị giết như anh ông nhưng ông vẫn quyết định tranh. Kết quả ông quỵ bởi âm mưu sát hại. Thấy nguy hiểm vẫn dấn thân, đó là thái độ của người quân tử nghĩa hiệp nhưng không phải là thái độ chính trị tốt.",
    lines: [
      "Hào 1: Vãng kiển, lai dự - Đi khó, về khen",
      "Hào 2: Vương thần kiển kiển - Thần của vua khó khó",
      "Hào 3: Vãng kiển lai phản - Đi khó về trở",
      "Hào 4: Vãng kiển lai liên - Đi khó về liên",
      "Hào 5: Đại kiển, bằng lai - Khó lớn, bạn đến",
      "Hào 6: Vãng kiển lai thạc - Đi khó về lớn"
    ],
    keywords: ["Khó khăn", "Cản trở", "Thử thách", "Kiên trì", "Hỗ trợ"],
    advice: "Thời kỳ khó khăn và cản trở. Hãy tìm kiếm sự hỗ trợ và kiên trì vượt qua.",
    upperTrigram: "Khảm (Nước)",
    lowerTrigram: "Cấn (Núi)",
    element: "Thủy",
    season: "Đông"
  },
  40: {
    number: 40,
    name: "Lôi thủy giải",
    symbol: "☳☵",
    structure: "100010",
    meaning: "Cái thế bị dồn cục qua rồi, nay sự trói buộc đã hết, phải cướp cho mau những chỗ tốt trong thế mới không thì có chán vạn kẻ khác tranh cướp mất. Cuối đời Đông Hán, vận động khăn vàng một thời gian tung hòanh rồi tàn lụi, quần hùng sợ nhau ra tranh cướp thế của nhà Hán. Cuối cùng Tào Tháo nhờ  sách lược đúng đắn đã cướp được vị thế ưu việt nhất. Khổng Minh khi gặp Lưu Bị đã phải nói: Bây giờ thiên thời ở trong tay Tào Tháo, địa lợi do Đông Ngô cai quản, sứ quân chỉ còn lại nhân hòa mà thôi.",
    lines: [
      "Hào 1: Vô cữu - Không lỗi",
      "Hào 2: Điền hoạch tam hồ - Ruồng bắt được ba cáo",
      "Hào 3: Phụ thừa, trí khấu chí - Gánh mà cưỡi, khiến giặc đến",
      "Hào 4: Giải nhi bác, bằng chí tư - Giải mà ngón chân cái",
      "Hào 5: Quân tử duy hữu giải - Quân tử chỉ có giải",
      "Hào 6: Công dụng xạ ưng - Công dùng bắn diều"
    ],
    keywords: ["Giải thoát", "Tháo gỡ", "Giải quyết", "Tự do", "Nhẹ nhõm"],
    advice: "Thời điểm giải thoát khỏi khó khăn. Hãy tận dụng cơ hội để giải quyết vấn đề.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Khảm (Nước)",
    element: "Mộc",
    season: "Xuân"
  },
  41: {
    number: 41,
    name: "Sơn trạch tổn",
    symbol: "☶☱",
    structure: "001011",
    meaning: "Tổn ở đây không phải là tổn thất, tổn hại, mà là cắt ra một khỏan tiền để đặt vốn vào công cuộc làm ăn tương lai. Biết tự hy sinh là kết quả của sự trông xa thấy rộng.Trần Anh Tôn tước bỏ bụng dạ hẹp hòi về uy tín đem Huyền Trân Công chúa gả cho vua Chiêm thành để lấy lễ vật hai châu Ô, châu Rí làm bàn đạp cho đời sau mở mang bờ cõi. Cập thời Vũ Tống Giang gặp ai cũng tự thu nhỏ cái tôi của mình lại để phát triển uy thế chính trị cho mình. Trương Lương đi dụ kẻ thất cơ lỡ vận Hàn Tín bằng thái độ khiêm cung dâng biếu Hàn Tín thanh kiếm báu.",
    lines: [
      "Hào 1: Dĩ sự tốc vãng, vô cữu - Đã việc mau đi, không lỗi",
      "Hào 2: Lợi trinh, chinh hung - Lợi trinh, chinh hung",
      "Hào 3: Tam nhân hành tắc tổn nhất nhân - Ba người đi thì mất một",
      "Hào 4: Tổn kỳ tật, sử hữu hỷ - Giảm bệnh của nó",
      "Hào 5: Hoặc ích chi thập bằng chi quy - Có thể lợi nó mười đôi",
      "Hào 6: Bất tổn ích chi, vô cữu - Không giảm mà lợi, không lỗi"
    ],
    keywords: ["Giảm bớt", "Hy sinh", "Khiêm tốn", "Cân bằng", "Đơn giản"],
    advice: "Thời điểm cần giảm bớt và hy sinh. Đôi khi mất đi để có được điều tốt hơn.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Thổ",
    season: "Cuối hè"
  },
  42: {
    number: 42,
    name: "Phong lôi ích",
    symbol: "☴☳",
    structure: "011100",
    meaning: "Tổ mà bị phá vỡ thì trứng tranh giành cái chi? Cái lợi trong chính trị, trước hết phải đặt nó vào thế chung, không thể nhìn điều lợi hại như người nhìn da con báo qua một cái ống, hoặc chỉ thấy tòan màu đen hoặc thấy tòan màu vàng. Sách Chiến quốc Sách chép: Trong trận Trường bình, Bình Đô Quân bảo vua Ngụy: - Sao đại vương không theo chính sách hợp tung để chống lại Tần? Vua Ngụy đáp: Vì Tần hứa cắt đất Viên ung cho ta.- Tôi cho rằng lời hứa đó là lời hão. - Tại sao vậy? - Tần và Triệu cầm cự nhau từ lâu ở Trường bình mà bất phân thắng bại, nếu thiên hạ liên hiệp với Tần thì Triệu mất, Tần sợ đại vương đổi lòng nên đem đất Viên ung ra làm mồi nhử. Tần thắng Triệu rồi, liệu đại vương có dám đòi cắt đất Viên ung không? - Không! - Tần mà không thắng Triệu thì đại vương có thể khiến cho Hàn (Tần?) cắt đất Viên ung cho đại vương không? - Không. - Vì thế tôi mới cho rằng chuyện cắt đất Viên ung là chuyện hão huyền. - Đúng.",
    lines: [
      "Hào 1: Lợi dụng vi đại tác - Lợi dùng làm việc lớn",
      "Hào 2: Hoặc ích chi thập bằng chi quy - Có thể lợi nó mười đôi",
      "Hào 3: Ích chi dụng hung sự - Lợi nó dùng việc hung",
      "Hào 4: Trung cáo công, tùy hữu y quốc - Giữa báo công",
      "Hào 5: Hữu phu huệ tâm - Có lòng nhân từ",
      "Hào 6: Mạc ích chi, hoặc kích chi - Không lợi nó, có thể đánh nó"
    ],
    keywords: ["Có lợi", "Tăng thêm", "Phát triển", "Hỗ trợ", "Cơ hội"],
    advice: "Thời điểm có lợi và phát triển. Hãy tận dụng cơ hội để tăng trưởng.",
    upperTrigram: "Tốn (Gió)",
    lowerTrigram: "Chấn (Sấm)",
    element: "Mộc",
    season: "Xuân"
  },
  43: {
    number: 43,
    name: "Trạch thiên quyết",
    symbol: "☱☰",
    structure: "011111",
    meaning: "Truyện Liêu Trai, Bồ Tùng Linh kể rằng: Có một vị tú tài rất giỏi về thơ, thiên tài của hắn không được người đời biết thưởng thức, nên hắn giận dữ, động mở miệng là chửi bới. Một hôm bỗng dưng hắn uống hũ rượu lớn rồi thấy mình hóa thành con hổ. Hắn chạy lên rừng nằm gào dưới trăng than trách trạng huống cô đơn. Bạn bè thân thiết động lòng thương lên rừng thăm hỏi. Con hổ nhất định lánh mặt, chỉ nhắn lời nhờ bạn hữu hãy vì mình mà phổ biến thơ. Các bạn hỏi: Tại sao không ra chào hỏi nhau? Hổ đáp: Nếu tôi ra tôi sẽ ăn thịt các anh mất, vậy các anh muốn thấy mặt tôi thì các anh hãy lùi ra dăm trăm thước. Bạn hữu nghe lời hổ, ngoảnh lại nhìn quả nhiên thấy một con hổ buồn bã tịch mịch đang ngửa lên nhìn trăng mà gào thét.Con hổ ấy chính là một chính khách không thích ứng với tình thế trước mặt, cái tài khác lạ của con phượng trong bầy gà. Rõ ràng là con cá mắc cạn. Con hổ ấy chính là một nhà độc tài đã đến lúc điên cuồng.",
    lines: [
      "Hào 1: Tráng ư tiền chỉ, vãng bất thắng vi lận - Mạnh ở ngón chân trước",
      "Hào 2: Tích hiệu, mạc dạ hữu nhung - Kêu cảnh giác, đêm có binh",
      "Hào 3: Tráng ư quyền, hữu hung - Mạnh ở má, có hung",
      "Hào 4: Tún vô phù, hành thứ thứ - Mông không da, đi chậm chậm",
      "Hào 5: Cần lục, quyết quyết - Rau cần, quyết quyết",
      "Hào 6: Vô hiệu, chung hữu hung - Không kêu, cuối có hung"
    ],
    keywords: ["Quyết đoán", "Cắt đứt", "Dứt khoát", "Can đảm", "Hành động"],
    advice: "Thời điểm cần quyết đoán và hành động. Đừng do dự khi phải đưa ra quyết định quan trọng.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Càn (Trời)",
    element: "Kim",
    season: "Thu"
  },
  44: {
    number: 44,
    name: "Thiên phong cấu",
    symbol: "☰☴",
    structure: "111011",
    meaning: "Khổng Minh ngất đi khi nghe tin Phượng Sồ thảm bại bỏ mình ở gò Lạc phượng, điều mà Khổng Minh không hề tính trước. Phượng Sồ chết, nửa kế họach của Khổng Minh hỏng theo. Sinh họat đầy dẫy những điều bất ngờ. Chính trị là họat động cần tính tóan, nhưng càng tính tóan thì khi bất ngờ ập đến càng làm nghiêng ngửa bấy nhiêu. Trong chính trị cần khai thác được những cái không liệu trước cũng như cần tôi luyện vững chắc khả năng ứng phó được với mọi chuyện bất ứng xảy đến. Trận Léningrad sở dĩ Nga thắng bởi vì Nga nhờ tin tức Sorge nên biết chắc chắn không bị Nhật bất ngờ đánh sang Sibérie, nên Nga có thể vững tâm đem đại quân từ Sibérie về cứu viện. Trận Léningrad Đức thua vì không tính đến việc Nga có thể rút đại quân từ Sibérie về tiếp sức giáp công. Trotsky trên con đường lưu đày, được một nhà báo phỏng vấn: Điều gì làm ông ân hận nhất? Trotsky đáp: - Điều khiến tôi ân hận nhất là tôi không ngờ chính Staline mới là kẻ thù lợi hại. Trước kia tôi chỉ chú ý đến Zinoviev và Kamenev.",
    lines: [
      "Hào 1: Hệ ư kim nị, trinh cát - Buộc ở phanh kim, trinh cát",
      "Hào 2: Bao hữu ngư, vô cữu - Bao có cá, không lỗi",
      "Hào 3: Tún vô phù, hành thứ thứ - Mông không da, đi chậm chậm",
      "Hào 4: Bao vô ngư, khởi hung - Bao không cá, khởi hung",
      "Hào 5: Dĩ cù bao qua, hàm chương - Dùng liễu bao dưa",
      "Hào 6: Cấu kỳ giác, lận vô cữu - Gặp sừng của nó, khó không lỗi"
    ],
    keywords: ["Gặp gỡ", "Tiếp xúc", "Cơ hội", "Thận trọng", "Lựa chọn"],
    advice: "Thời điểm gặp gỡ và tiếp xúc mới. Hãy thận trọng trong việc lựa chọn.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Tốn (Gió)",
    element: "Kim",
    season: "Thu"
  },
  45: {
    number: 45,
    name: "Trạch địa thúy",
    symbol: "☱☷",
    structure: "011000",
    meaning: "Theo kinh Dịch thì Trạch địa thúy là sự tụ tập. Ông vua đứng trước một tình thế mới, cần phải có sự quyết định mới mẻ táo bạo nhưng không muốn tự ý làm một mình, nên tổ chức cuộc tế lễ người xưa. Ở đấy vua sẽ gặp nhiều người để thâu thập ý kiến. Mỗi cuộc tế lễ ấy sự thâu thập ý kiến sẽ đặt trên cơ sở truyền thống lịch sử của một quốc gia. Trần Nhân Tôn nghe tin quân Nguyên cất binh xong liền lập tức cho triệu các bô lão dân gian hội tại Diên Hồng để bàn xem nên hòa hay nên đánh. Các bô lão đều đồng thanh xin đánh. Vua thấy dân gian một lòng như vậy, cũng quyết ý kháng cự.",
    lines: [
      "Hào 1: Hữu phu bất chung, nãi loạn nãi tụy - Có lòng thành không đến cuối",
      "Hào 2: Dẫn cát, vô cữu - Dẫn dắt cát, không lỗi",
      "Hào 3: Tụy như, thán như - Tập hợp như, thở dài như",
      "Hào 4: Đại cát, vô cữu - Đại cát, không lỗi",
      "Hào 5: Tụy hữu vị, vô cữu - Tập hợp có vị trí, không lỗi",
      "Hào 6: Tư thế thích thế, vô cữu - Thở dài khóc lóc, không lỗi"
    ],
    keywords: ["Tập hợp", "Đoàn tụ", "Hợp tác", "Lãnh đạo", "Đoàn kết"],
    advice: "Thời điểm tốt để tập hợp và đoàn kết. Hãy xây dựng sự hợp tác mạnh mẽ.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Khôn (Đất)",
    element: "Kim",
    season: "Thu"
  },
  46: {
    number: 46,
    name: "Địa phong thăng",
    symbol: "☷☴",
    structure: "000011",
    meaning: "Hạt giống mới gieo muốn được lớn lên còn phải tùy thuộc vào những điều kiện khách quan, đất có màu tốt không? mưa có thuận, gió có hòa không? Dĩ nhiên, những điều kiện chủ quan đã cần phải có sẵn rồi, hạt giống cần tự có lực mới mong nảy mầm bén rễ, nhưng đối với điều kiện khách quan thì hy vọng với thực tế còn cách khỏang nhau xa lắm. Lực lượng hay cá nhân chính trị nào cũng phải qua một thời kỳ này. Cuốn  sách Tả phái Ấu trĩ bệnh (La maladie infantile du Communisme) của Lénine là cuốn sách viết cho những hạt giống chính trị mới gieo. Cuốn Mein Kampf của Hitler viết trong tù là cuốn sách báo hiệu Quốc xã Đức nhờ những điều kiện khách quan có lợi đã trổ mầm.",
    lines: [
      "Hào 1: Duẫn thăng, đại cát - Tin tưởng thăng, đại cát",
      "Hào 2: Gia nãi lợi dụng hưởng - Chân thành thì lợi dùng tế",
      "Hào 3: Thăng hư ấp - Thăng lên thành rỗng",
      "Hào 4: Vương dụng hưởng ư kỳ sơn - Vua dùng tế ở núi Kỳ",
      "Hào 5: Trinh cát, thăng giai - Trinh cát, thăng bậc",
      "Hào 6: Minh thăng, lợi ư bất tức chi trinh - Mù thăng"
    ],
    keywords: ["Thăng tiến", "Đi lên", "Phát triển", "Cơ hội", "Tiến bộ"],
    advice: "Thời điểm tốt để thăng tiến và phát triển. Hãy nỗ lực để đạt được mục tiêu cao hơn.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Tốn (Gió)",
    element: "Thổ",
    season: "Cuối hè"
  },
  47: {
    number: 47,
    name: "rạch thủy khốn",
    symbol: "☱☵",
    structure: "011010",
    meaning: "Cảnh khốn khổ của người chính trị như lời Mạnh Tử nói: trời sắp trao trách nhiệm lớn cho người đó nên bắt người đó phải khổ cực. Thời kỳ Lénine sống ở Thụy sỹ, ông chỉ có một chiếc áo rét, một đôi giầy, trong nhà không bao giờ có ngọn lửa sưởi và giải trí duy nhất của Lénine là đi lững thững quanh hồ. Việt Vương Câu Tiễn thất trận Cối kê sang làm mã phu cho vua Ngô, nằm trên giường tòan bằng củi gai, treo mật đắng ở đầu giường mỗi sáng đều nếm chất đắng. Hitler không nhà không cửa phải ngủ đường và ăn cơm bố thí. Cái quan trọng của thời kỳ này là sự thử thách chí lớn, nếu chịu trăm ngàn tân khổ mà không giữ được tiết tháo, không kiên trì lòng tin vào công cuộc mình theo đuổi thì coi như cây đã chết khô.",
    lines: [
      "Hào 1: Tún khốn ư mộc, nhập ư u cốc - Mông khốn ở gỗ",
      "Hào 2: Khốn ư tửu thực - Khốn ở rượu thức ăn",
      "Hào 3: Khốn ư thạch, cứ ư tật lê - Khốn ở đá, dựa gai góc",
      "Hào 4: Lai từ từ, khốn ư kim xa - Đến chậm chậm, khốn ở xe vàng",
      "Hào 5: Bị khốn, xích phục phương lai - Bị khốn, áo đỏ sắp đến",
      "Hào 6: Khốn ư cát mạn - Khốn ở dây leo"
    ],
    keywords: ["Khó khăn", "Bế tắc", "Thử thách", "Kiên nhẫn", "Vượt qua"],
    advice: "Thời kỳ khó khăn và bế tắc. Hãy kiên nhẫn và tìm cách vượt qua thử thách.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Khảm (Nước)",
    element: "Kim",
    season: "Thu"
  },
  48: {
    number: 48,
    name: "Thủy phong tỉnh",
    symbol: "☵☴",
    structure: "010011",
    meaning: "Thời xưa các bộ lạc mỗi lần định cư ở đâu đều đào giếng. Khi giếng hết nước thì bộ lạc bỏ đi. Giếng nước trong mát thật quý báu cho người đang khát, cho nên đối với cổ nhân nước giếng ví như một mỹ đức.Tuy nhiên không nên quên một điều: khát trông thấy giếng nhưng phải có gầu múc nước giếng. Giếng với đồ vật múc nước không thể tách rời nhau. Thiếu gầu múc nước, người khát sẽ chết vì giếng. Nhật đuổi Pháp, lập chính phủ Trần Trọng Kim. Nhật bại trận đầu hàng, giếng nước mát đặt ngay trước mặt chính phủ Kim, chính phủ Kim nhắm mắt buông xuôi vì không có gầu múc nước, gầu múc nước bấy giờ là khả năng chính trị và kinh nghiệm chính quyền. Nhật xâm chiếm Trung quốc, Uông Tinh Vệ bất đồng chính kiến với Tưởng đã lâu, liền ùa theo Nhật. Uông Tinh Vệ quả đã khát đến độ không chịu đựng được nữa nên lao đầu xuống giếng uống nước rồi chết trong giếng.",
    lines: [
      "Hào 1: Tỉnh nê bất thực - Giếng bùn không ăn",
      "Hào 2: Tỉnh cốc xạ phụ - Giếng thung bắn cá",
      "Hào 3: Tỉnh vị khứ thực - Giếng chưa đi ăn",
      "Hào 4: Tỉnh cam, vô cữu - Giếng gạch, không lỗi",
      "Hào 5: Tỉnh liệt, hàn tuyền thực - Giếng trong, suối lạnh ăn",
      "Hào 6: Tỉnh thâu, vật mạc - Giếng thu, không đậy"
    ],
    keywords: ["Nguồn sống", "Nuôi dưỡng", "Chia sẻ", "Bền vững", "Giá trị"],
    advice: "Hãy trở thành nguồn nuôi dưỡng cho người khác. Chia sẻ những gì tốt đẹp bạn có.",
    upperTrigram: "Khảm (Nước)",
    lowerTrigram: "Tốn (Gió)",
    element: "Thủy",
    season: "Đông"
  },
  49: {
    number: 49,
    name: "Trạch hỏa cách",
    symbol: "☱☲",
    structure: "011101",
    meaning: "Thời thế đòi hỏi một sự biến đổi lớn lao, Cách mạng! Đáp ứng với nhu cầu cách mạng, phải lột bỏ tư tưởng cũ, lề lối hành động lỗi thời và thái độ ngoan cố. Sau khi đợt cách mạng đầu tiên bị đàn áp (1905), cách mạng Nga thóai trào. Các công nhân mệt mỏi vì những theo dõi chán nản tranh đấu. Phần tử trí thức tự do thất vọng chui vào cái vỏ tư tưởng huyền bí, tôn giáo và nghệ thuật vị nghệ thuật. Phần tử trí thức Mác xít chịu ảnh hưởng của một thứ chủ nghĩa xét lại từ Đức thổi về. Những người vai vế như Bogdanov, Bazarov, Lounatcharski và cả Gorki nữa rủ nhau xây dựng một hình tượng Thượng đế cho chủ nghĩa xã hội. Lénine hết sức lo ngại cho hiện tượng cách mạng tồi tệ này, ông đề ra công tác: đấu tranh nhằm phá tan đám sương mù duy tâm tôn giáo. Tác phẩm căn bản cho công tác này là cuốn: Matérialisme et Empiriocriticisme. Lénine viết: Giữa lúc mà quần chúng xông vào cuộc đấu tranh cách mạng mới mẻ và phong phú, nhiệm vụ của chúng ta là cấp tốc mở cuộc đấu tranh xây dựng một nền triết học cách mạng.",
    lines: [
      "Hào 1: Cổng dĩ hoàng ngưu chi cách - Củng cố bằng da bò vàng",
      "Hào 2: Tị nhật nãi cách chi - Ngày Tị thì cách mạng",
      "Hào 3: Chinh hung, trinh lệ - Chinh hung, trinh nguy",
      "Hào 4: Hối vong, hữu phu cải mệnh - Hối mất, có lòng thành đổi mệnh",
      "Hào 5: Đại nhân hổ biến - Đại nhân hổ biến",
      "Hào 6: Quân tử báo biến - Quân tử báo biến"
    ],
    keywords: ["Thay đổi", "Cách mạng", "Đổi mới", "Biến đổi", "Cải cách"],
    advice: "Thời điểm thay đổi lớn. Hãy chuẩn bị cho sự biến đổi và thích ứng với tình hình mới.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Ly (Lửa)",
    element: "Kim",
    season: "Thu"
  },
  50: {
    number: 50,
    name: "Hoả phong đỉnh",
    symbol: "☲☴",
    structure: "101011",
    meaning: "Cổ nhân làm cái đỉnh với ba chân tượng trưng cho thiên, địa, nhân, cho thời, thế, cơ, cho hòan cảnh, tài lực và trí lực v.v... Mất một chân, cái đỉnh không thể đứng vững được. Lưu Bang được Tiêu Hà trông nom cho mọi việc thuộc về nội chính, được Trương Lương dâng mưu hay, nhưng vẫn chưa phát triển mạnh vì còn thiếu một vị nguyên súy. Do đó Trương Lương mới giả làm người bán kiếm đi dụ Hàn Tín về cho Lưu Bang. Hitler năm 1923 thất bại vào tù, gặp Goebbels ông mới hiểu sức mạnh của tuyên truyền. Ra ngòai họat động có Goering đem về cho Hitler sự ủng hộ của giai cấp quý tộc Đức. Nhờ thế Hitler mới cướp được đảng Quốc xã và chính quyền Đức.",
    lines: [
      "Hào 1: Đỉnh điên chỉ, lợi xuất phủ - Đỉnh lộn ngón chân, lợi đổ bỏ",
      "Hào 2: Đỉnh hữu thực, ngã cừu tật - Đỉnh có thức ăn, kẻ thù bệnh",
      "Hào 3: Đỉnh nhĩ cách, kỳ hành tắc - Đỉnh tai đổi, hành động bị cản",
      "Hào 4: Đỉnh chiết túc, phú công thúc - Đỉnh gãy chân, đổ cháo công",
      "Hào 5: Đỉnh hoàng nhĩ, kim huyền - Đỉnh tai vàng, xuyến vàng",
      "Hào 6: Đỉnh ngọc huyền, đại cát - Đỉnh xuyến ngọc, đại cát"
    ],
    keywords: ["Ổn định", "Nuôi dưỡng", "Hoàn thiện", "Thành tựu", "Cân bằng"],
    advice: "Thời điểm ổn định và hoàn thiện. Hãy duy trì sự cân bằng và nuôi dưỡng những gì tốt đẹp.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Tốn (Gió)",
    element: "Hỏa",
    season: "Hè"
  },
  51: {
    number: 51,
    name: "Chấn vi lôi",
    symbol: "☳☳",
    structure: "100100",
    meaning: "Cả một khỏang trời bao la, bỗng đâu mây đen kéo đến rồi sấm sét vang rền, lúc sau mây mưa tan hết, trời xanh hiện ra, con người bị hoảng sợ khỏanh khắc, bây giờ sự an định lại hồi phục. Sấm sét tiếng lớn nhưng tác hại nhỏ. Không nên lấy kết quả gần nhất để mà phán đóan cả tương lai. Liên sô phóng hỏa tiễn mặt trăng khiến uy tín Liên sô chấn động và uy tín Hoa kỳ vắng lặng. Nhưng thời gian không bao lâu, lợi thế của Liên sô lúc đầu ầm ỹ rồi đến nay cũng chẳng còn âm hưởng gì nữa.",
    lines: [
      "Hào 1: Chấn lai hách hách - Sấm đến khắc khắc",
      "Hào 2: Chấn lai lệ - Sấm đến nguy",
      "Hào 3: Chấn tô tô, chấn hành vô quyên - Sấm vội vội",
      "Hào 4: Chấn toại nê - Sấm sa bùn",
      "Hào 5: Chấn vãng lai lệ - Sấm đi lại nguy",
      "Hào 6: Chấn sách sách, thị mạt mạt - Sấm sách sách, nhìn mạt mạt"
    ],
    keywords: ["Chấn động", "Thức tỉnh", "Hành động", "Năng lượng", "Khởi đầu"],
    advice: "Thời điểm chấn động và thức tỉnh. Hãy sẵn sàng hành động và đón nhận năng lượng mới.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Chấn (Sấm)",
    element: "Mộc",
    season: "Xuân"
  },
  52: {
    number: 52,
    name: "Cấn vi sơn",
    symbol: "☶☶",
    structure: "001001",
    meaning: "Núi tượng trưng cho bất động nghĩa là dừng lại trên một điểm nào đó. Kinh Dịch viết: Thời chỉ tắc chỉ, thời hành tắc hành, động tĩnh bất thất kỳ thời. (Lúc cần dừng thì phải dừng, lúc cần làm thì phải làm, động tĩnh cho đúng) - Quân tử dĩ tư bất xuất kỳ vị (Người chính trị phải nghĩ trên cái vị thế của mình). Staline chống lại chủ trương gây cách mạng đỏ trên tòan cõi Âu châu bằng chủ trương nước Nga trước đã. Staline nhận định đúng đa số theo ông. Giả thử khỏang 1921 mà chủ trương của Staline không được thực hiện, cách mạng Cộng sản không chịu dừng lại trong khuôn khổ nước Nga, có lẽ chế độ Sô viết đã bị tiêu diệt. Biết dừng lại là biết đo ngắm những điều kiện hạn chế đối với hành động.",
    lines: [
      "Hào 1: Cấn kỳ chỉ, vô cữu - Dừng ngón chân, không lỗi",
      "Hào 2: Cấn kỳ phệ, bất bạt kỳ tùy - Dừng bắp chân",
      "Hào 3: Cấn kỳ hạn, liệt kỳ dực - Dừng thắt lưng, tách sườn",
      "Hào 4: Cấn kỳ thân, vô cữu - Dừng thân mình, không lỗi",
      "Hào 5: Cấn kỳ phụ, ngôn hữu tự - Dừng hàm, lời có thứ tự",
      "Hào 6: Đôn cấn, cát - Hậu hĩ dừng, cát"
    ],
    keywords: ["Dừng lại", "Ổn định", "Suy ngẫm", "Kiềm chế", "Tĩnh lặng"],
    advice: "Thời điểm cần dừng lại và suy ngẫm. Hãy tìm sự ổn định và tĩnh lặng trong tâm hồn.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Cấn (Núi)",
    element: "Thổ",
    season: "Cuối hè"
  },
  53: {
    number: 53,
    name: "Phong sơn tiệm",
    symbol: "☴☶",
    structure: "011001",
    meaning: "Tiệm là tuần tự như lòai thủy điểu, mới đầu dời khỏi mặt nước, rồi bay lên núi cao, rồi bay vào đất liền. Ví như chính trị đã đến lúc cần phải động thủ để tranh thế nhưng đòi hỏi phương pháp đấu tranh từng bậc, không thể đòi ăn cả một lúc, vượt từ điểm này qua điểm kia. Khổng Minh bày kế cho Lưu Bị dùng danh nghĩa mượn đất Kinh châu của Đông Ngô, mà gây đao binh ngay khi Lưu Bị khó lòng thắng. Có Kinh châu làm vốn, làm bàn đạp Lưu Bị tiến chiếm Ba thục để trở thành một chân trong ba chân vạc, gây nên nghiệp đế một thời. Tào Tháo đem quân về kinh đô để bảo vệ nhà Hán Ở kinh đô rồi, Tào Tháo dùng quân để lật đổ nhà Hán.",
    lines: [
      "Hào 1: Hồng tiệm ư can - Hồng tiệm ở bờ",
      "Hào 2: Hồng tiệm ư bàn - Hồng tiệm ở đá",
      "Hào 3: Hồng tiệm ư lục - Hồng tiệm ở đất",
      "Hào 4: Hồng tiệm ư mộc - Hồng tiệm ở cây",
      "Hào 5: Hồng tiệm ư lăng - Hồng tiệm ở đồi",
      "Hào 6: Hồng tiệm ư lục - Hồng tiệm ở đất cao"
    ],
    keywords: ["Từ từ", "Tiến triển", "Kiên nhẫn", "Bước đều", "Ổn định"],
    advice: "Thời điểm tiến triển từ từ và ổn định. Hãy kiên nhẫn và bước đi đều đặn.",
    upperTrigram: "Tốn (Gió)",
    lowerTrigram: "Cấn (Núi)",
    element: "Mộc",
    season: "Xuân"
  },
  54: {
    number: 54,
    name: "Lôi Trạch quy muội",
    symbol: "☳☱",
    structure: "100011",
    meaning: "Người con gái bị tuyển vào làm cung nữ là cái thế nhỡ nhàng. Chỉ có dùng chính  sách mềm để thắng cứng, xử sự táo bạo táo cấp chỉ gây ra tai hại. Quy muội còn ngụ ý một tính cách không chính thức tượng trưng cho những vận động ngầm bên trong của chính trị.Tào Mạnh Đức vào ám sát Đổng Trác, Đổng Trác ngủ quay mặt bên trong, chợt trông gương thấy có người rút dao bèn lên tiếng hỏi. Tào Mạnh Đức vội vàng quỳ xuống hai tay nâng đao nói: Có thanh bảo đao đem đến dâng thừa tướng. Đổng Trác vui vẻ, Tháo rút được ra bên ngòai, ra cưỡi ngựa chạy thẳng một mạch không còn dám ngóai cổ lại.",
    lines: [
      "Hào 1: Quy muội dĩ đệ - Gả em gái làm vợ lẻ",
      "Hào 2: Quy muội dĩ na - Gả em gái làm vợ cả",
      "Hào 3: Quy muội dĩ tu - Gả em gái chờ đợi",
      "Hào 4: Quy muội du kỳ - Gả em gái trì hoãn",
      "Hào 5: Đế Ất quy muội - Vua Ất gả em gái",
      "Hào 6: Nữ thừa khuông hư - Nữ cầm rổ rỗng"
    ],
    keywords: ["Hôn nhân", "Kết hợp", "Quan hệ", "Hợp tác", "Cam kết"],
    advice: "Thời điểm tốt cho hôn nhân và các mối quan hệ. Hãy xây dựng sự cam kết bền vững.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Mộc",
    season: "Xuân"
  },
  55: {
    number: 55,
    name: "Lôi hỏa phong",
    symbol: "☳☲",
    structure: "100101",
    meaning: "Mặt trời trên cao là lúc đắc ý nhất của người chính trị nhưng cũng là lúc cơn lo điều buồn đến dồn dập, biết bao nhiêu khó khăn nguy hiểm đang rình rập, điều đáng lo ngại nhất cho người ở ngôi cao tuyệt đỉnh là thời suy sắp tới. Tự cổ đến giờ Nỗi buồn thảm của vầng thái dương, luôn luôn xảy đến trong lịch sử chính trị. César bị tập đòan Brutus giết - Napoléon thóat được rất nhiều âm mưu hại quanh mình. Khroutchev bị hạ - J.F. Kennedy bị bắn - Mao Trạch Đông súyt bị lật đổ v.v..",
    lines: [
      "Hào 1: Ngộ kỳ phối chủ - Gặp chủ phối của mình",
      "Hào 2: Phong kỳ phệ, nhật trung kiến đẩu - Phong phú che khuất",
      "Hào 3: Phong kỳ phất, nhật trung kiến mạt - Phong phú che phủ",
      "Hào 4: Phong kỳ phệ, nhật trung kiến đẩu - Phong phú che khuất",
      "Hào 5: Lai chương, hữu khánh dự - Đến chương, có khánh dự",
      "Hào 6: Phong kỳ ốc, phệ kỳ gia - Phong phú nhà mình"
    ],
    keywords: ["Phong phú", "Thịnh vượng", "Đỉnh cao", "Thành công", "Cảnh giác"],
    advice: "Thời kỳ thịnh vượng và phong phú. Hãy biết ơn và cảnh giác với sự kiêu ngạo.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Ly (Lửa)",
    element: "Mộc",
    season: "Xuân"
  },
  56: {
    number: 56,
    name: "Hỏa sơn lữ",
    symbol: "☲☶",
    structure: "101001",
    meaning: "Tình trạng của những nhà chính trị lưu vong, lưu thóan sống trong tịch mịch bất an, tân khổ. Lưu Bị e Tào Tháo giết, nhân dịp Viên Thuật chuyển quân nên xin chặn Thuật. Từ đấy đến gần chục năm sống bôn ba. Tấn Trùng Nhĩ bỏ nước Tấn ra đi sang nước người gặp nhiều điều nhục nhã. De Gaulle ăn gửi nằm nhờ ở Luân đôn bị các chính khách Anh, Mỹ khinh rẻ. Tôn Thất Thuyết lưu vong bên Trung quốc, không chịu nổi cảnh khốn cùng phát điên. Hòan cảnh này là hòan cảnh tuyệt đối bị động đòi hỏi thái độ nhu hòa để thuận thời ứng địa.",
    lines: [
      "Hào 1: Lữ tỏa tỏa - Du lịch tỏa tỏa",
      "Hào 2: Lữ tức thứ - Du lịch ở quán trọ",
      "Hào 3: Lữ thiêu kỳ thứ - Du lịch đốt quán trọ",
      "Hào 4: Lữ ư xứ - Du lịch ở chỗ",
      "Hào 5: Xạ trĩ, nhất thỉ vong - Bắn trĩ, một mũi tên mất",
      "Hào 6: Điểu thiêu kỳ sào - Chim đốt tổ mình"
    ],
    keywords: ["Du lịch", "Lưu lạc", "Thích ứng", "Linh hoạt", "Thận trọng"],
    advice: "Thời kỳ di chuyển và thay đổi. Hãy thích ứng linh hoạt nhưng giữ thận trọng.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Cấn (Núi)",
    element: "Hỏa",
    season: "Hè"
  },
  57: {
    number: 57,
    name: "Tốn vi phong",
    symbol: "☴☴",
    structure: "011011",
    meaning: "Lá bồ công anh xoè lớn như chiếc dù, thân lại nhẹ bâng, gặp gió tất lọan phi. Tự mình chưa làm gì được hết, hãy tìm những thế lớn để ẩn nấp. Nhà Nguyên sắp mất chính quyền, giặc cướp nổi lên như ong. Triều đình khoanh tay bó giáp chờ núi lở sông tràn, mở đầu cho thời kỳ quần hùng cắt đất chiếm cứ. Quần hùng cũng tiêu diệt xâm lấn lẫn nhau. Chu Nguyên Chương tức Minh Thái Tổ lúc khởi nghiệp chẳng khác gì cây bồ công anh gặp gió thổi, bay tứ tán hết ở với người này sau lại theo người khác. Vua Hiến Đế giữa cơn gió lọan của bọn họan quan, ngọai thích và quân phiệt.",
    lines: [
      "Hào 1: Tiến thối, lợi vũ sĩ chi trinh - Tiến lùi, lợi trinh của võ sĩ",
      "Hào 2: Tốn tại sàng hạ - Tốn dưới giường",
      "Hào 3: Tần tốn, lận - Thường xuyên tốn, khó",
      "Hào 4: Hối vong, điền hoạch tam phẩm - Hối mất, ruộng bắt ba loại",
      "Hào 5: Trinh cát, hối vong - Trinh cát, hối mất",
      "Hào 6: Tốn tại sàng hạ - Tốn dưới giường"
    ],
    keywords: ["Nhẹ nhàng", "Thấm nhập", "Linh hoạt", "Thích ứng", "Kiên trì"],
    advice: "Hãy hành động nhẹ nhàng và kiên trì. Sự thấm nhập từ từ sẽ mang lại kết quả tốt.",
    upperTrigram: "Tốn (Gió)",
    lowerTrigram: "Tốn (Gió)",
    element: "Mộc",
    season: "Xuân"
  },
  58: {
    number: 58,
    name: "Đoài vi trạch",
    symbol: "☱☱",
    structure: "011011",
    meaning: "Thóan Từ nói rằng: Đòai là nói vậy. Trong cương mà ngòai nhu. Lấy giải thích thuyết phục để hòan thành cưỡng bách. Dân nghe dân chịu thì dân quên cả lao khổ nguy hiểm, hăng hái chiến đấu. Hitler viết: Ở thời kỳ đảo lộn, những việc xảy ra thường tạo nên bởi lời nói.Tô Tần du thuyết làm thành thế trận hợp tung sáu nước cự lại Tần. Trương Nghi du thuyết làm thành thế trận liên hòanh phá thế hợp tung của Tô Tần. Gia Cát dùng miệng lưỡi khuất phục quần thần bên Đông ngô chịu đánh Ngụy, vì thế mới có thắng trận Xích bích. Dương Tu hay khoe hão nên bị Tào Tháo giết. Nễ Hành hay chửi phũ nên chịu họa Hòang Tổ. Quan Vân Trường hay nói kiêu nên ôm hận ở Kinh châu.",
    lines: [
      "Hào 1: Hòa đoài, cát - Hòa vui, cát",
      "Hào 2: Gia đoài, cát - Chân thành vui, cát",
      "Hào 3: Lai đoài, hung - Đến vui, hung",
      "Hào 4: Thương đoài vị ninh - Bàn vui chưa yên",
      "Hào 5: Gia ư bác, hữu lệ - Chân thành với kẻ bóc lột, có nguy",
      "Hào 6: Dẫn đoài - Dẫn dắt vui"
    ],
    keywords: ["Vui vẻ", "Hạnh phúc", "Giao lưu", "Chia sẻ", "Tích cực"],
    advice: "Thời điểm vui vẻ và hạnh phúc. Hãy chia sẻ niềm vui với mọi người xung quanh.",
    upperTrigram: "Đoài (Hồ)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Kim",
    season: "Thu"
  },
  59: {
    number: 59,
    name: "Phong thuỷ hoán",
    symbol: "☴☵",
    structure: "011010",
    meaning: "Lúc vận và thế đang lên, đang từ nhỏ biến thành rất lớn. Chiếm được chính quyền rồi thì đến việc nắm lòng dân và chỉnh đốn nội chính. Nắm được lòng dân và chỉnh đốn nội chính rồi thì đến việc phát triển ra bên ngòai. Buồm căng trước gió là thuận lợi, nhưng hãy coi chừng gió lớn quá, hay sóng to quá có thể làm lật thuyền. Vương Dõan thủ tiêu được Đổng Trác cầm nắm cả triều đình trong tay. Chỉ trong ít lâu chính sự đổ nát phải chết dưới tay Lý Thôi, Quách Dĩ. Đảng Cộng sản nắm chính quyền Tây ban Nha (1935-36) chưa bao ngày, rối loạn lung tung, Franco đem quân về đánh dẹp.",
    lines: [
      "Hào 1: Dụng cứu mã tráng, cát - Dùng ngựa mạnh cứu, cát",
      "Hào 2: Hoán bôn kỳ cơ - Tan rã chạy về máy",
      "Hào 3: Hoán kỳ thân, vô hối - Tan rã thân mình, không hối",
      "Hào 4: Hoán kỳ quần, nguyên cát - Tan rã đám đông, rất cát",
      "Hào 5: Hoán hãn, đại hiệu - Tan rã mồ hôi, kêu lớn",
      "Hào 6: Hoán kỳ huyết, khứ dật xuất - Tan rã máu mình"
    ],
    keywords: ["Tan rã", "Phân tán", "Giải thoát", "Thay đổi", "Làm mới"],
    advice: "Thời điểm cần phá bỏ cũ để tạo ra mới. Hãy giải thoát khỏi những ràng buộc không cần thiết.",
    upperTrigram: "Tốn (Gió)",
    lowerTrigram: "Khảm (Nước)",
    element: "Mộc",
    season: "Xuân"
  },
  60: {
    number: 60,
    name: "Thủy trạch tiết",
    symbol: "☵☱",
    structure: "010011",
    meaning: "Cây trúc có từng đốt, tượng trưng cho tính cách tiết chế. Mềm dẻo nhưng biết lúc nào thôi mềm dẻo. Cứng rắn nhưng biết lúc nào thôi cứng rắn. Không biết tiết chế sẽ như con cáo ngập vào vũng lầy không thể cất chân lên mà bước được. Chính trị tiết chế theo hiện đại ngữ gọi là đấu tranh có mức độ với những danh từ chiến tranh hạn chế leo thang. Tần đề ra chủ trương viễn giao cận công, là lấy ve vuốt nước xa để nuốt nước gần làm mức độ.",
    lines: [
      "Hào 1: Bất xuất hộ đình, vô cữu - Không ra khỏi sân, không lỗi",
      "Hào 2: Bất xuất môn đình, hung - Không ra khỏi cổng, hung",
      "Hào 3: Bất tiết nhược, tắc tự thán - Không tiết chế, thì tự thán",
      "Hào 4: An tiết, hanh - Yên tiết chế, hanh thông",
      "Hào 5: Cam tiết, cát - Ngọt tiết chế, cát",
      "Hào 6: Khổ tiết, trinh hung - Khổ tiết chế, trinh hung"
    ],
    keywords: ["Tiết chế", "Giới hạn", "Kỷ luật", "Cân bằng", "Khôn ngoan"],
    advice: "Thời điểm cần tiết chế và kỷ luật bản thân. Hãy biết đủ và giữ cân bằng.",
    upperTrigram: "Khảm (Nước)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Thủy",
    season: "Đông"
  },
  61: {
    number: 61,
    name: "Phong trạch trung phù",
    symbol: "☴☱",
    structure: "011011",
    meaning: "Phù là móng. Trứng sắp nở nhờ móng của gà mẹ quào ra cho chóng vỡ vỏ. Chính trị đã đến lúc chín mùi, chỉ cần một cố gắng cuối cùng cho cục thế thay đổi hẳn. Bất cứ thái độ do dự nào cho phút chót đều có thể làm hư những kế họach trước. Napoléon ngày 18, Brumaire đã bị một phút do dự súyt làm hỏng việc, nếu Talleyrand và Fouché và (Lucien Bonaparte?) không xua quân vào áp đảo các nghị sỹ. Mussolini thấy tình hình đã thuận tiện liền lập tức đem tòan đảng tiến về La mã (La marche sur Rome). Tuy nhiên không nên quên rằng cái móng sắc kia cần phải xử dụng hết sức khéo léo, nếu vụng về tất vỡ cả trái trứng.",
    lines: [
      "Hào 1: Lự an, cát - Chuẩn bị yên, cát",
      "Hào 2: Minh hạc tại âm - Hạc kêu trong bóng",
      "Hào 3: Đắc địch, hoặc cổ hoặc tội - Gặp địch, có thể đánh có thể ngừng",
      "Hào 4: Nguyệt kỷ vọng - Trăng gần tròn",
      "Hào 5: Hữu phu loan như - Có lòng thành ràng buộc như",
      "Hào 6: Hàn âm đăng ư thiên - Tiếng gà bay lên trời"
    ],
    keywords: ["Thành thật", "Tin cậy", "Chân thành", "Ảnh hưởng", "Đức hạnh"],
    advice: "Thời điểm thể hiện lòng thành và đức hạnh. Sự chân thành sẽ cảm hóa mọi người.",
    upperTrigram: "Tốn (Gió)",
    lowerTrigram: "Đoài (Hồ)",
    element: "Mộc",
    season: "Xuân"
  },
  62: {
    number: 62,
    name: "Lôi sơn tiểu quá",
    symbol: "☳☶",
    structure: "100001",
    meaning: "Do những hiềm kỵ chồng chất nên nội bộ đảng phát sinh xung đột có thể trở thành thế phân liệt. Phân liệt nội bộ đưa dẫn đến nguy cơ Binh địch dòm ngòai ngõ.",
    lines: [
      "Hào 1: Phi điểu dĩ hung - Chim bay gặp hung",
      "Hào 2: Quá kỳ tổ, ngộ kỳ tỷ - Qua tổ mình, gặp bà mình",
      "Hào 3: Phất quá phòng chi - Không qua phòng chống",
      "Hào 4: Vô cữu, phất quá ngộ chi - Không lỗi, không qua gặp nó",
      "Hào 5: Mật vân bất vũ - Mây dày không mưa",
      "Hào 6: Phất ngộ quá chi - Không gặp qua nó"
    ],
    keywords: ["Cẩn thận", "Khiêm tốn", "Nhỏ nhưng quan trọng", "Thận trọng", "Chi tiết"],
    advice: "Thời điểm cần cẩn thận với những việc nhỏ. Đừng coi thường các chi tiết.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Cấn (Núi)",
    element: "Mộc",
    season: "Xuân"
  },
  63: {
    number: 63,
    name: "thủy hoả ký tế",
    symbol: "☵☲",
    structure: "010101",
    meaning: "Vạn sự đã đầy đủ như ý muốn, từ nay về sau chỉ còn là công việc của chỉnh đốn sửa sang, và mở mang. Đinh Bộ Lĩnh diệt xong lọan sứ quân. Bình Định Vương dẹp xong quân Minh. Gia Long khôi phục cơ nghiệp nhà Nguyễn. Ngày nay thành công viên mãn chỉ có tính cách tương đối.",
    lines: [
      "Hào 1: Duệ kỳ luân, vô cữu - Kéo bánh xe, không lỗi",
      "Hào 2: Phụ tang kỳ mao - Phụ nữ mất khăn che",
      "Hào 3: Cao tông phạt quỷ phương - Cao tông đánh quỷ phương",
      "Hào 4: Tự hữu y nhục - Có áo rách",
      "Hào 5: Đông lân sát ngưu - Hàng xóm phía đông giết bò",
      "Hào 6: Nhu kỳ thủ, lệ - Ướt đầu, nguy"
    ],
    keywords: ["Hoàn thành", "Cẩn thận", "Duy trì", "Cảnh giác", "Tiếp tục"],
    advice: "Đã hoàn thành nhưng cần tiếp tục cẩn thận. Đừng chủ quan khi đã thành công.",
    upperTrigram: "Khảm (Nước)",
    lowerTrigram: "Ly (Lửa)",
    element: "Thủy",
    season: "Đông"
  },
  64: {
    number: 64,
    name: "Thủy hỏa vị tế",
    symbol: "☲☵",
    structure: "101010",
    meaning: "Kinh Dịch lấy quẻ Thủy hỏa vị tế để kết thúc là muốn nói chính trị, nhân sinh còn phải đi cuộc hành trình vô hạn, còn vô lượng số việc phải làm. Vị tế chỉ là chuyện nghỉ ngơi. Không được ngủ quên, vì sau giấc nghỉ ngơi ấy lại ập đến một hòan cảnh vị tế khác.",
    lines: [
      "Hào 1: Nhu kỳ vĩ, lận - Ướt đuôi, khó",
      "Hào 2: Duệ kỳ luân, trinh cát - Kéo bánh xe, trinh cát",
      "Hào 3: Vị tế, chinh hung - Chưa hoàn thành, chinh hung",
      "Hào 4: Trinh cát, hối vong - Trinh cát, hối mất",
      "Hào 5: Trinh cát, vô hối - Trinh cát, không hối",
      "Hào 6: Hữu phu ư ẩm tửu - Có lòng thành uống rượu"
    ],
    keywords: ["Chưa hoàn thành", "Gần đích", "Kiên trì", "Hy vọng", "Chuẩn bị"],
    advice: "Gần đạt được mục tiêu nhưng chưa hoàn thành. Hãy kiên trì và không nản lòng.",
    upperTrigram: "Ly (Lửa)",
    lowerTrigram: "Khảm (Nước)",
    element: "Hỏa",
    season: "Hè"
  }
};

// Hàm random hexagram
export function random_hexagram(): HexagramData {
  const randomNumber = Math.floor(Math.random() * 64) + 1;
  return hexagram_data[randomNumber];
}

// Hàm lấy hexagram theo số
export function getHexagramByNumber(number: number): HexagramData | null {
  if (number >= 1 && number <= 64) {
    return hexagram_data[number];
  }
  return null;
}

// Hàm tìm kiếm hexagram theo tên
export function searchHexagramByName(name: string): HexagramData[] {
  const results: HexagramData[] = [];
  const searchTerm = name.toLowerCase().trim();
  
  for (let i = 1; i <= 64; i++) {
    const hexagram = hexagram_data[i];
    if (hexagram.name.toLowerCase().includes(searchTerm) ||
        hexagram.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))) {
      results.push(hexagram);
    }
  }
  
  return results;
}

// Hàm lấy tất cả hexagram
export function getAllHexagrams(): HexagramData[] {
  const allHexagrams: HexagramData[] = [];
  for (let i = 1; i <= 64; i++) {
    allHexagrams.push(hexagram_data[i]);
  }
  return allHexagrams;
}