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
    name: "Càn",
    symbol: "☰",
    structure: "111111",
    meaning: "Quẻ Càn tượng trưng cho sức mạnh sáng tạo, năng động và khởi đầu. Đây là quẻ của trời, của sự lãnh đạo và quyền lực tối cao.",
    lines: [
      "Hào 1: Tiềm long, chớ dùng - Rồng ẩn dưới nước, chưa nên hành động",
      "Hào 2: Hiện long tại điền - Rồng xuất hiện trên đồng, có thể gặp bậc hiền",
      "Hào 3: Quân tử chung nhật càn càn - Người quân tử suốt ngày siêng năng",
      "Hào 4: Hoặc dược ư uyên - Có thể nhảy lên vực sâu",
      "Hào 5: Phi long tại thiên - Rồng bay trên trời, có lợi gặp người lớn",
      "Hào 6: Cang long hữu hối - Rồng kiêu ngạo sẽ có hối hận"
    ],
    keywords: ["Sáng tạo", "Lãnh đạo", "Khởi đầu", "Năng động", "Quyền lực"],
    advice: "Thời điểm tốt để khởi sự, lãnh đạo và thể hiện bản thân. Hãy mạnh mẽ nhưng không kiêu ngạo.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Càn (Trời)",
    element: "Kim",
    season: "Thu"
  },
  2: {
    number: 2,
    name: "Khôn",
    symbol: "☷",
    structure: "000000",
    meaning: "Quẻ Khôn tượng trưng cho đất, sự nuôi dưỡng, tiếp nhận và bao dung. Đây là quẻ của sự khiêm nhường và hỗ trợ.",
    lines: [
      "Hào 1: Lý sương, âm băng chí - Đạp lên sương giá, băng cứng sẽ đến",
      "Hào 2: Trực, phương, đại - Thẳng thắn, vuông vắn, lớn lao",
      "Hào 3: Hàm chương khả trinh - Giữ kín tài năng có thể được trinh cát",
      "Hào 4: Quát nang, vô cữu vô dự - Buộc bao, không lỗi không lợi",
      "Hào 5: Hoàng thường, nguyên cát - Áo vàng, rất cát lành",
      "Hào 6: Long chiến ư dã - Rồng chiến đấu ngoài đồng"
    ],
    keywords: ["Nuôi dưỡng", "Khiêm nhường", "Tiếp nhận", "Bao dung", "Hỗ trợ"],
    advice: "Thời điểm để lắng nghe, học hỏi và hỗ trợ người khác. Sức mạnh nằm ở sự kiên nhẫn và bao dung.",
    upperTrigram: "Khôn (Đất)",
    lowerTrigram: "Khôn (Đất)",
    element: "Thổ",
    season: "Cuối hè"
  },
  3: {
    number: 3,
    name: "Thuần",
    symbol: "☳☵",
    structure: "100010",
    meaning: "Quẻ Thuần tượng trưng cho sự khởi đầu khó khăn, như cây non mọc lên từ đất cứng. Cần kiên nhẫn và bền bỉ.",
    lines: [
      "Hào 1: Bàn hoàn, lợi cư trinh - Chậm chạp quay quần, lợi ở yên để trinh",
      "Hào 2: Thuần như, bàn như - Khó khăn như, chậm chạp như",
      "Hào 3: Tức lộc không, vãng cát - Đuổi theo hươu không người dẫn đường",
      "Hào 4: Thừa mã ban như - Cưỡi ngựa chậm chạp như",
      "Hào 5: Thuần kỳ cao, tiểu trinh cát - Khó khăn về của cải nhỏ",
      "Hào 6: Thừa mã ban như, khấp huyết lệ như - Cưỡi ngựa chậm chạp, khóc lóc như"
    ],
    keywords: ["Khởi đầu", "Khó khăn", "Kiên nhẫn", "Bền bỉ", "Thử thách"],
    advice: "Giai đoạn khởi đầu khó khăn. Cần kiên nhẫn, không nên vội vàng. Tìm kiếm sự hỗ trợ từ người có kinh nghiệm.",
    upperTrigram: "Chấn (Sấm)",
    lowerTrigram: "Khảm (Nước)",
    element: "Mộc",
    season: "Xuân"
  },
  4: {
    number: 4,
    name: "Mông",
    symbol: "☶☵",
    structure: "001010",
    meaning: "Quẻ Mông tượng trưng cho sự non nớt, cần học hỏi. Như đứa trẻ cần được giáo dục và hướng dẫn.",
    lines: [
      "Hào 1: Phát mông, lợi dụng hình nhân - Khai mông, lợi dùng hình phạt",
      "Hào 2: Bao mông cát - Bao dung sự non nớt thì cát",
      "Hào 3: Vật dụng thủ nữ - Không nên cưới người nữ",
      "Hào 4: Khốn mông, lận - Bế tắc vì non nớt, khó khăn",
      "Hào 5: Đồng mông, cát - Trẻ con non nớt, cát lành",
      "Hào 6: Kích mông, bất lợi vi khấu - Đánh đuổi sự non nớt"
    ],
    keywords: ["Học hỏi", "Non nớt", "Giáo dục", "Hướng dẫn", "Khiêm tốn"],
    advice: "Thời điểm để học hỏi và tiếp thu kiến thức. Hãy khiêm tốn và tìm kiếm thầy tốt để hướng dẫn.",
    upperTrigram: "Cấn (Núi)",
    lowerTrigram: "Khảm (Nước)",
    element: "Thủy",
    season: "Đông"
  },
  5: {
    number: 5,
    name: "Nhu",
    symbol: "☰☵",
    structure: "111010",
    meaning: "Quẻ Nhu tượng trưng cho sự chờ đợi, kiên nhẫn. Như mây trên trời chờ mưa xuống.",
    lines: [
      "Hào 1: Nhu ư giao, lợi hằng - Chờ đợi ở ngoại ô, lợi kiên trì",
      "Hào 2: Nhu ư sa, tiểu hữu ngôn - Chờ đợi trên cát, có lời nói nhỏ",
      "Hào 3: Nhu ư nê, trí khấu chí - Chờ đợi trong bùn, khiến giặc đến",
      "Hào 4: Nhu ư huyết, xuất tự huyệt - Chờ đợi trong máu, thoát khỏi hố",
      "Hào 5: Nhu ư tửu thực, trinh cát - Chờ đợi với rượu thức ăn, trinh cát",
      "Hào 6: Nhập ư huyệt, hữu bất tốc chi khách tam nhân lai - Vào trong hố"
    ],
    keywords: ["Chờ đợi", "Kiên nhẫn", "Thời cơ", "Chuẩn bị", "Tin tưởng"],
    advice: "Thời điểm cần kiên nhẫn chờ đợi. Hãy chuẩn bị kỹ lưỡng và tin tưởng thời cơ sẽ đến.",
    upperTrigram: "Càn (Trời)",
    lowerTrigram: "Khảm (Nước)",
    element: "Thủy",
    season: "Đông"
  },
  6: {
    number: 6,
    name: "Tụng",
    symbol: "☵☰",
    structure: "010111",
    meaning: "Quẻ Tụng tượng trưng cho tranh chấp, xung đột. Cần tìm cách hòa giải và tránh leo thang.",
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
    name: "Sư",
    symbol: "☷☵",
    structure: "000010",
    meaning: "Quẻ Sư tượng trưng cho quân đội, tổ chức và kỷ luật. Cần có lãnh đạo tài giỏi và kỷ luật nghiêm minh.",
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
    name: "Tỷ",
    symbol: "☵☷",
    structure: "010000",
    meaning: "Quẻ Tỷ tượng trưng cho sự gần gũi, hợp tác và đoàn kết. Như nước thấm vào đất.",
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
    name: "Tiểu Súc",
    symbol: "☰☴",
    structure: "111011",
    meaning: "Quẻ Tiểu Súc tượng trưng cho sự tích lũy nhỏ, như gió thổi mây nhẹ. Cần kiên nhẫn tích lũy từng chút một.",
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
    name: "Lý",
    symbol: "☰☱",
    structure: "111011",
    meaning: "Quẻ Lý tượng trưng cho việc đi đúng đường, cẩn thận trong hành động. Như đi trên đuôi hổ.",
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
    name: "Thái",
    symbol: "☷☰",
    structure: "000111",
    meaning: "Quẻ Thái tượng trưng cho sự thịnh vượng, hòa hợp. Trời Đất giao thông, vạn vật sinh sôi.",
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
    name: "Phủ",
    symbol: "☰☷",
    structure: "111000",
    meaning: "Quẻ Phủ tượng trưng cho sự tắc nghẽn, khó khăn. Trời Đất không giao thông.",
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
    name: "Đồng Nhân",
    symbol: "☰☲",
    structure: "111101",
    meaning: "Quẻ Đồng Nhân tượng trưng cho sự đoàn kết, hợp tác với mọi người. Lửa cháy dưới trời.",
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
    name: "Đại Hữu",
    symbol: "☲☰",
    structure: "101111",
    meaning: "Quẻ Đại Hữu tượng trưng cho sự giàu có lớn, thành công to lớn. Lửa cháy trên trời.",
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
    name: "Khiêm",
    symbol: "☷☶",
    structure: "000001",
    meaning: "Quẻ Khiêm tượng trưng cho sự khiêm tốn, nhún nhường. Núi ẩn dưới đất.",
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
    name: "Dự",
    symbol: "☳☷",
    structure: "100000",
    meaning: "Quẻ Dự tượng trưng cho sự vui vẻ, hài lòng và chuẩn bị. Sấm vang trên đất.",
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
    name: "Tùy",
    symbol: "☱☳",
    structure: "011100",
    meaning: "Quẻ Tùy tượng trưng cho sự theo đuổi, tuân theo. Hồ nước theo sấm động.",
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
    name: "Cổ",
    symbol: "☶☴",
    structure: "001011",
    meaning: "Quẻ Cổ tượng trưng cho việc sửa chữa, cải thiện những gì đã hư hỏng. Gió thổi dưới núi.",
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
    name: "Lâm",
    symbol: "☷☱",
    structure: "000011",
    meaning: "Quẻ Lâm tượng trưng cho sự tiếp cận, đến gần. Đất tiếp cận hồ nước.",
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
    name: "Quan",
    symbol: "☴☷",
    structure: "011000",
    meaning: "Quẻ Quan tượng trưng cho sự quan sát, nhìn ngắm và suy ngẫm. Gió thổi trên đất.",
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
    name: "Thệ Hạp",
    symbol: "☲☳",
    structure: "101001",
    meaning: "Quẻ Thệ Hạp tượng trưng cho việc cắn đứt, quyết đoán. Lửa và sấm kết hợp.",
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
    name: "Bí",
    symbol: "☶☲",
    structure: "001101",
    meaning: "Quẻ Bí tượng trưng cho vẻ đẹp, trang trí và hình thức. Lửa dưới núi.",
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
    name: "Bác",
    symbol: "☶☷",
    structure: "001000",
    meaning: "Quẻ Bác tượng trưng cho sự bóc lột, suy tàn. Núi trên đất bị xói mòn.",
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
    name: "Phục",
    symbol: "☷☳",
    structure: "000001",
    meaning: "Quẻ Phục tượng trưng cho sự trở lại, phục hồi. Sấm động dưới đất.",
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
    name: "Vô Vọng",
    symbol: "☰☳",
    structure: "111001",
    meaning: "Quẻ Vô Vọng tượng trưng cho sự chân thành, không có ý đồ xấu. Sấm dưới trời.",
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
    name: "Đại Súc",
    symbol: "☶☰",
    structure: "001111",
    meaning: "Quẻ Đại Súc tượng trưng cho sự tích lũy lớn, nuôi dưỡng. Núi giữ trời lại.",
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
    name: "Di",
    symbol: "☶☳",
    structure: "001001",
    meaning: "Quẻ Di tượng trưng cho việc nuôi dưỡng, chăm sóc. Sấm dưới núi như miệng nhai.",
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
    name: "Đại Quá",
    symbol: "☱☴",
    structure: "011110",
    meaning: "Quẻ Đại Quá tượng trưng cho sự vượt quá, thái quá. Hồ nước ngập cây.",
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
    name: "Khảm",
    symbol: "☵☵",
    structure: "010010",
    meaning: "Quẻ Khảm tượng trưng cho nước, hiểm nguy và thử thách. Nước chảy liên tục.",
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
    name: "Ly",
    symbol: "☲☲",
    structure: "101101",
    meaning: "Quẻ Ly tượng trưng cho lửa, ánh sáng và sự bám víu. Lửa cháy sáng rực.",
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
    name: "Hàm",
    symbol: "☱☶",
    structure: "011001",
    meaning: "Quẻ Hàm tượng trưng cho sự cảm ứng, tương tác. Hồ nước trên núi.",
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
    name: "Hằng",
    symbol: "☳☴",
    structure: "100011",
    meaning: "Quẻ Hằng tượng trưng cho sự bền vững, kiên trì. Sấm và gió kết hợp.",
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
    name: "Độn",
    symbol: "☰☶",
    structure: "111001",
    meaning: "Quẻ Độn tượng trưng cho sự rút lui, ẩn náu. Núi dưới trời.",
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
    name: "Đại Tráng",
    symbol: "☳☰",
    structure: "100111",
    meaning: "Quẻ Đại Tráng tượng trưng cho sức mạnh lớn, hùng mạnh. Sấm trên trời.",
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
    name: "Tấn",
    symbol: "☲☷",
    structure: "101000",
    meaning: "Quẻ Tấn tượng trưng cho sự tiến bộ, thăng tiến. Lửa trên đất như mặt trời mọc.",
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
    name: "Minh Di",
    symbol: "☷☲",
    structure: "000101",
    meaning: "Quẻ Minh Di tượng trưng cho ánh sáng bị tổn thương, khó khăn. Lửa dưới đất.",
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
    name: "Gia Nhân",
    symbol: "☴☲",
    structure: "011101",
    meaning: "Quẻ Gia Nhân tượng trưng cho gia đình, gia đạo. Gió thổi từ lửa.",
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
    name: "Khuê",
    symbol: "☲☱",
    structure: "101011",
    meaning: "Quẻ Khuê tượng trưng cho sự đối lập, mâu thuẫn. Lửa và nước đối nghịch.",
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
    name: "Kiển",
    symbol: "☵☶",
    structure: "010001",
    meaning: "Quẻ Kiển tượng trưng cho sự khó khăn, cản trở. Nước trước núi.",
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
    name: "Giải",
    symbol: "☳☵",
    structure: "100010",
    meaning: "Quẻ Giải tượng trưng cho sự giải thoát, tháo gỡ. Sấm trên nước.",
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
    name: "Tổn",
    symbol: "☶☱",
    structure: "001011",
    meaning: "Quẻ Tổn tượng trưng cho sự giảm bớt, hy sinh. Núi trên hồ.",
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
    name: "Ích",
    symbol: "☴☳",
    structure: "011100",
    meaning: "Quẻ Ích tượng trưng cho sự có lợi, tăng thêm. Gió và sấm hỗ trợ nhau.",
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
    name: "Quái",
    symbol: "☱☰",
    structure: "011111",
    meaning: "Quẻ Quái tượng trưng cho sự quyết đoán, cắt đứt. Hồ nước trên trời.",
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
    name: "Cấu",
    symbol: "☰☴",
    structure: "111011",
    meaning: "Quẻ Cấu tượng trưng cho sự gặp gỡ, tiếp xúc. Trời gặp gió.",
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
    name: "Tụy",
    symbol: "☱☷",
    structure: "011000",
    meaning: "Quẻ Tụy tượng trưng cho sự tập hợp, đoàn tụ. Hồ nước trên đất.",
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
    name: "Thăng",
    symbol: "☷☴",
    structure: "000011",
    meaning: "Quẻ Thăng tượng trưng cho sự thăng tiến, đi lên. Gió từ đất thổi lên.",
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
    name: "Khốn",
    symbol: "☱☵",
    structure: "011010",
    meaning: "Quẻ Khốn tượng trưng cho sự khó khăn, bế tắc. Hồ nước cạn kiệt.",
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
    name: "Tỉnh",
    symbol: "☵☴",
    structure: "010011",
    meaning: "Quẻ Tỉnh tượng trưng cho giếng nước, nguồn sống. Nước dưới gió.",
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
    name: "Cách",
    symbol: "☱☲",
    structure: "011101",
    meaning: "Quẻ Cách tượng trưng cho sự thay đổi, cách mạng. Hồ nước và lửa đối nghịch.",
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
    name: "Đỉnh",
    symbol: "☲☴",
    structure: "101011",
    meaning: "Quẻ Đỉnh tượng trưng cho cái đỉnh, sự ổn định và nuôi dưỡng. Lửa trên gió.",
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
    name: "Chấn",
    symbol: "☳☳",
    structure: "100100",
    meaning: "Quẻ Chấn tượng trưng cho sấm sét, chấn động. Sấm chồng sấm.",
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
    name: "Cấn",
    symbol: "☶☶",
    structure: "001001",
    meaning: "Quẻ Cấn tượng trưng cho núi, sự dừng lại và ổn định. Núi chồng núi.",
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
    name: "Tiệm",
    symbol: "☴☶",
    structure: "011001",
    meaning: "Quẻ Tiệm tượng trưng cho sự tiến triển từ từ. Gió trên núi.",
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
    name: "Quy Muội",
    symbol: "☳☱",
    structure: "100011",
    meaning: "Quẻ Quy Muội tượng trưng cho việc gả chồng, hôn nhân. Sấm trên hồ.",
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
    name: "Phong",
    symbol: "☳☲",
    structure: "100101",
    meaning: "Quẻ Phong tượng trưng cho sự phong phú, thịnh vượng. Sấm và lửa kết hợp.",
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
    name: "Lữ",
    symbol: "☲☶",
    structure: "101001",
    meaning: "Quẻ Lữ tượng trưng cho việc du lịch, lưu lạc. Lửa trên núi.",
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
    name: "Tốn",
    symbol: "☴☴",
    structure: "011011",
    meaning: "Quẻ Tốn tượng trưng cho gió, sự thấm nhập nhẹ nhàng. Gió chồng gió.",
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
    name: "Đoài",
    symbol: "☱☱",
    structure: "011011",
    meaning: "Quẻ Đoài tượng trưng cho niềm vui, hạnh phúc. Hồ nước trong vắt.",
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
    name: "Hoán",
    symbol: "☴☵",
    structure: "011010",
    meaning: "Quẻ Hoán tượng trưng cho sự tan rã, phân tán. Gió thổi trên nước.",
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
    name: "Tiết",
    symbol: "☵☱",
    structure: "010011",
    meaning: "Quẻ Tiết tượng trưng cho sự tiết chế, giới hạn. Nước trong hồ có giới hạn.",
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
    name: "Trung Phu",
    symbol: "☴☱",
    structure: "011011",
    meaning: "Quẻ Trung Phu tượng trưng cho lòng thành trung, tin cậy. Gió trên hồ.",
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
    name: "Tiểu Quá",
    symbol: "☳☶",
    structure: "100001",
    meaning: "Quẻ Tiểu Quá tượng trưng cho việc vượt quá nhỏ, cẩn thận. Sấm trên núi.",
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
    name: "Ký Tế",
    symbol: "☵☲",
    structure: "010101",
    meaning: "Quẻ Ký Tế tượng trưng cho sự hoàn thành, đã qua khỏi. Nước trên lửa.",
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
    name: "Vị Tế",
    symbol: "☲☵",
    structure: "101010",
    meaning: "Quẻ Vị Tế tượng trưng cho chưa hoàn thành, sắp đạt được. Lửa trên nước.",
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