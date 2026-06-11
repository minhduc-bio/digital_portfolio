import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FolderTree,
  Search,
  MessageSquare,
  Users,
  Palette,
  Shield,
  ChevronDown,
  ExternalLink,
  FileText,
  File,
  Video,
  Download,
} from 'lucide-react';

type DetailItemText = {
  title: string;
  type: 'text';
  content: string;
};

type DetailItemList = {
  title: string;
  type: 'list';
  content: { [key: string]: string[] };
};

type DetailItemTags = {
  title: string;
  type: 'tags';
  content: { items: string[] };
};

type DetailItemDiagram = {
  title: string;
  type: 'diagram';
  content: {
    structure?: Array<{ name: string; level: number; children?: string[] }>;
    criteria?: Array<{ name: string; desc: string }>;
    workflow?: Array<{ step: string; desc: string }>;
  };
};

type DetailItemComparison = {
  title: string;
  type: 'comparison';
  content: {
    before: { prompt: string; issue: string; result: string };
    after: { prompt: string; improvement: string; result: string };
  };
};

type DetailItemPrinciples = {
  title: string;
  type: 'principles';
  content: { principles: Array<{ title: string; text: string }> };
};

type DetailItemCode = {
  title: string;
  type: 'code';
  content: { rules: string[] };
};

type DetailItemGallery = {
  title: string;
  type: 'gallery';
  content: {
    images?: Array<{ alt: string; desc: string; src?: string }>;
    examples?: Array<{ title: string; tool?: string; desc: string }>;
  };
};

type DetailItemVideo = {
  title: string;
  type: 'video';
  content: {
    videos: Array<{
      title: string;
      description: string;
      embedUrl?: string;
      placeholderNote?: string;
    }>;
  };
};

type DetailItemAttachments = {
  title: string;
  type: 'attachments';
  content: {
    files: Array<{
      name: string;
      type: string;
      path: string;
      description: string;
    }>;
  };
};

type DetailItem =
  | DetailItemText
  | DetailItemList
  | DetailItemTags
  | DetailItemDiagram
  | DetailItemComparison
  | DetailItemPrinciples
  | DetailItemCode
  | DetailItemGallery
  | DetailItemVideo
  | DetailItemAttachments;

type ProjectDetails = {
  goal: string;
  items: DetailItem[];
};

type Project = {
  id: number;
  icon: typeof FolderTree;
  title: string;
  category: string;
  subtitle: string;
  summary: string;
  extendedSummary: string;
  tags: string[];
  details: ProjectDetails;
};

const projects: Project[] = [
  {
    id: 1,
    icon: FolderTree,
    title: 'THAO TÁC CƠ BẢN VỚI TỆP TIN VÀ THƯ MỤC',
    category: '📚BÀI 1: MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI (Tuần 1, Tuần 2 - Từ 23/02/2026 - 08/03/2026)',
    subtitle: 'Xây dựng hệ thống quản lý dữ liệu có cấu trúc',
    summary:
      'Xây dựng cấu trúc thư mục tối ưu và quy ước đặt tên nhất quán nhằm tạo ra một hệ thống tổ chức dữ liệu số bền vững.',
    extendedSummary:
      'Dự án này tìm hiểu cách sắp xếp tệp tin hợp lý có thể giúp giảm sự rối rắm khi làm việc và tăng hiệu quả học tập, làm việc. Bằng cách tạo cấu trúc thư mục rõ ràng và cách đặt tên thống nhất, tôi xây dựng một hệ thống có thể mở rộng khi lượng thông tin tăng lên nhưng vẫn dễ tìm và dễ sử dụng.',
    tags: ['Information Architecture', 'Productivity', 'Digital Hygiene'],
    details: {
      goal: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows.',
      items: [
                {
          title: 'Yêu cầu thực hiện',
          type: 'list',
          content: {
            strategies: [
              '1. Tạo và quản lý thư mục',
              '2. Tạo và đổi tên tệp tin',
              '3. Sao chép và di chuyển dữ liệu',
              '4. Xóa và khôi phục dữ liệu',
            ],
          },
        },
        {
          title: 'Minh chứng',
          type: 'gallery',
          content: {
            images: [
              { alt: 'Tạo và quản lý thư mục',  src: '/png/Ảnh_chụp_màn_hình_2026-05-29_212918.png' },
              { alt: 'Tạo và đổi tên tệp tin',  src: '/png/Tao_va_doi_ten_tep_tin.png' },
              { alt: 'Sao chép và di chuyển dữ liệu', src: '/png/Sao_chep_tep_tin.png' },
              { alt: 'Xóa và khôi phục dữ liệu', src:'/png/Xoa_va_khoi_phuc.png' },
            ],
          },
        },
        {
          title: 'Phản hồi bài học',
          type: 'text',
          content:
            'Bài tập thực hành này đã giúp em có thể xây dựng và xử lý các tệp tin một cách có cấu trúc và khoa học hơn, giúp tiết kiệm thời gian và dung lượng ổ cứng, loại bỏ những tệp không cần thiết.',
        },
        {
          title: 'Bài tập',
          type: 'attachments',
          content: {
            files: [
              {
                name: 'Bai_tap_1_Thao_tac_co_ban_voi_tep_tin_va_thu_muc.docx',
                type: 'docx',
                path: 'docx/Bai_tap_1_Thao_tac_co_ban_voi_tep_tin_va_thu_muc.docx',
                description: 'Practice exercises on basic file and folder operations',
              },
            ],
          },
        },
      ],
    },
  },
 {
  id: 2,
  icon: Search, // Đảm bảo Search component đã được import ở đầu file, hoặc đổi thành 'Search' nếu là string dạng chữ
  title: 'TÌM KIẾM VÀ ĐÁNH GIÁ THÔNG TIN HỌC THUẬT',
  category: '📚BÀI 2: KHAI THÁC DỮ LIỆU VÀ THÔNG TIN (Tuần 3, Tuần 4 - Từ 09/03/2026 - 22/03/2026)',
  subtitle: 'Tìm kiếm và đánh giá thông tin học thuật về Mạng chế độ mặc định (DMN) và thần kinh học lâm sàng',
  summary:
    'Thực hiện tìm kiếm, thu thập 10 tài liệu tham khảo và đánh giá độ tin cậy của các nguồn học thuật liên quan đến Mạng chế độ mặc định (DMN) và các ứng dụng lâm sàng.',
  extendedSummary:
    'Báo cáo tập trung vào việc áp dụng kỹ năng tìm kiếm và đánh giá 10 bài báo khoa học từ các tạp chí quốc tế và trong nước. Các chủ đề bao gồm mạng lưới thần kinh, đặc biệt là Mạng chế độ mặc định (DMN) trong tự kỷ, sa sút trí tuệ, đột quỵ, cũng như các nghiên cứu lâm sàng khác tại Việt Nam.',
  tags: ['Research', 'Default Mode Network', 'Neuroscience', 'Source Evaluation'],
  details: {
    goal: 'Tìm kiếm, thu thập và đánh giá mức độ tin cậy của các tài liệu học thuật về thần kinh học nhận thức và lâm sàng.',
    items: [
      {
        title: 'Chiến lược tìm kiếm',
        type: 'list',
        content: {
          strategies: [
            'Sử dụng toán tử Boolean (AND) kết hợp từ khóa chuyên ngành (ví dụ: "default mode network AND review", "thần kinh AND giấc ngủ")',
            'Tìm kiếm cụm từ chính xác với dấu ngoặc kép ("") để giới hạn kết quả cho các khái niệm đặc thù',
            'Sử dụng bộ lọc năm (filter năm) để đánh giá tính cập nhật của tài liệu (ví dụ: lọc tài liệu từ năm 2013 đến 2025)',
            'Sử dụng trực tiếp bộ tìm kiếm nội bộ của các tạp chí khoa học chuyên ngành trong nước'
          ],
        },
      },
      {
        title: 'Cơ sở dữ liệu sử dụng',
        type: 'tags',
        content: {
          items: [
            'Google Scholar', 
            'PubMed', 
            'Tạp chí Thần kinh học Việt Nam', 
            'Tạp chí Sinh lý học Việt Nam', 
            'Tạp chí Nghiên cứu Y học Đại học Y Hà Nội'
          ],
        },
      },
      {
        title: 'Tiêu chí đánh giá',
        type: 'diagram',
        content: {
          criteria: [
            { name: 'Tác giả', desc: 'Đánh giá mức độ chuyên gia, uy tín của tác giả hoặc nhóm nghiên cứu trong lĩnh vực' },
            { name: 'Tạp chí xuất bản', desc: 'Xác định mức độ uy tín, sự chuyên môn hóa và tầm ảnh hưởng của tạp chí quốc tế (Nature, Neuron,...) hoặc trong nước' },
            { name: 'Năm xuất bản', desc: 'Đánh giá độ mới (mới, tương đối mới, cũ) để đảm bảo tính cập nhật của kiến thức' },
            { name: 'Nội dung', desc: 'Phân loại bài báo (Review Article, Research Article) và giá trị thực tiễn đối với lâm sàng hoặc giảng dạy' },
          ],
        },
      },
      {
        title: 'Nhìn lại & Rút kinh nghiệm',
        type: 'text',
        content:
          'Quá trình thực hiện báo cáo giúp rèn luyện tư duy hệ thống và cách xử lý dữ liệu khi tiếp cận các nghiên cứu về não bộ. Việc kết hợp các tạp chí hàng đầu thế giới với các tạp chí trong nước giúp tôi vừa nắm vững nền tảng lý thuyết chuyên sâu, vừa hiểu rõ bối cảnh ứng dụng thực tiễn của ngành Thần kinh học tại địa phương.'
      },
      {
        title: 'Tài liệu đính kèm',
        type: 'attachments',
        content: {
          files: [
            {
              name: 'bao-cao-ky-nang-tim-kiem-va-danh-gia-thong-tin-hoc-thuat.pdf',
              type: 'pdf',
              path: '/pdf/tmpscqwem_bao-cao-ky-nang-tim-kiem-va-danh-gia-thong-tin-hoc-thuat-tu-cac-nguon-dang-tin-cay---25001.pdf',
              description: 'Báo cáo kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy',
            },
          ],
        },
      },
    ],
  },
},
  {
  id: 3,
  icon: MessageSquare,
  title: 'VIẾT PROMPT HIỆU QUẢ CHO CÁC TÁC VỤ HỌC TẬP',
  category: '📚 BÀI 3: TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO (Tuần 5, Tuần 6 - Từ 23/03/2026 - 05/04/2026)',
  subtitle: 'Thực hành thao tác và đúc kết 5 nguyên tắc viết prompt hiệu quả trên Google Gemini AI Pro',
  summary:
    'Thử nghiệm và so sánh chất lượng đầu ra của AI thông qua 3 cấp độ lệnh (Đơn giản, Cải tiến, Nâng cao) để xử lý các tác vụ học thuật chuyên sâu.',
  extendedSummary:
    'Bài tập tập trung vào việc tối ưu hóa giao tiếp với AI qua 3 tác vụ: (1) Tóm tắt bài báo khoa học về Mạng chế độ mặc định (DMN) và sa sút trí tuệ, (2) Giải thích khái niệm phức tạp (Mô hình nhân quả động - DCM), và (3) Soạn 40 câu hỏi trắc nghiệm bộ môn Động vật không xương sống (Ngành Thân mềm). Qua thực nghiệm, báo cáo rút ra các nguyên tắc cốt lõi giúp điều khiển AI tạo ra nội dung chính xác, mang tính sư phạm và cá nhân hóa cao.',
  tags: ['Prompt Engineering', 'Gemini AI', 'Neuroscience', 'Zoology', 'Study Skills'],
  details: {
    goal: 'So sánh các cấp độ Prompt (Đơn giản, Cải tiến, Nâng cao) để hiểu cách tối ưu hóa kết quả học thuật từ AI.',
    items: [
      {
        title: 'Prompt Evolution (Ví dụ: Giải thích khái niệm DCM)',
        type: 'comparison',
        content: {
          before: {
            prompt: '"Giải thích khái niệm DCM trong bài báo"',
            issue: 'Lệnh đầu vào mở, quá ngắn, thiếu định hướng đối tượng và trọng tâm thông tin.',
            result: 'Cung cấp định nghĩa bao quát, khô khan, mang tính từ điển và liệt kê bề mặt.',
          },
          after: {
            prompt:
              '"Bạn hãy đóng vai làm một giảng viên... coi tôi như sinh viên... hãy giảng và tóm tắt bài báo này cho tôi... thông qua các bước: đọc hiểu kỹ toàn văn, xác định mục tiêu... và kiểm tra đối chiếu..."',
            improvement: 'Sử dụng Role-prompting, xác định rõ đối tượng, định hướng tư duy từng bước (Chain-of-thought).',
            result: 'Giải thích toàn diện, hệ thống, ngôn ngữ liên ngành (Sinh lý - Toán học) và có bảng so sánh trực quan xuất sắc.',
          },
        },
      },
      {
        title: '5 Nguyên Tắc Viết Prompt Hiệu Quả',
        type: 'list',
        content: {
          principles: [
            '1. Giao vai trò và Đặt ngữ cảnh (Role-prompting): Giúp AI điều chỉnh văn phong và mức độ phân tích phù hợp với đối tượng.',
            '2. Đưa ra con số và Giới hạn cụ thể (Parameterization): Đóng khung cấu trúc bằng định lượng (VD: "40 câu hỏi").',
            '3. Loại trừ nội dung không mong muốn (Negative Prompting): Dùng lệnh cấm (VD: "tránh thuật ngữ thống kê") để loại bỏ nhiễu.',
            '4. Chia nhỏ công việc theo trình tự (Chain-of-Thought): Hướng dẫn AI suy nghĩ qua từng bước nhỏ để xử lý logic, không bỏ sót ý.',
            '5. Dùng tài liệu gốc làm "mỏ neo" (Grounding/Anchor): Cung cấp file PDF hoặc tài liệu gốc (VD: giáo trình Integrated Principles of Zoology) để đảm bảo tính hàn lâm, tránh AI bịa kiến thức.',
          ],
        },
      },
      {
        title: 'Nhìn lại & Rút kinh nghiệm',
        type: 'text',
        content:
          'Quá trình thực nghiệm cho thấy kết quả của AI phụ thuộc hoàn toàn vào độ chi tiết và logic của người đặt lệnh. Việc kết hợp các kỹ thuật như đóng vai, giới hạn từ khóa, chia nhỏ tác vụ và neo dữ liệu bằng tài liệu gốc giúp biến AI từ một công cụ tra cứu thông thường thành một trợ lý học tập và nghiên cứu đắc lực, chuyên sâu.'
      },
      {
        title: 'Tài liệu đính kèm',
        type: 'attachments',
        content: {
          files: [
            {
              name: '25001553 - Bùi Minh Đức - Bài tập.docx',
              type: 'word',
              path: '/docx/25001553_-_Bui_Minh_Duc_-_Bai_tap.docx',
              description: 'Báo cáo thực hành thao tác với công cụ Gemini AI Pro và nguyên tắc viết prompt',
            },
          ],
        },
      },
    ],
  },
},
  {
  id: 4,
  icon: Users,
  title: 'SỬ DỤNG CÔNG CỤ HỢP TÁC TRỰC TUYẾN CHO DỰ ÁN NHÓM',
  category: '📚BÀI 4: GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ (Tuần 7, Tuần 8 - Từ 06/04/2026 - 19/04/2026)',
  subtitle: 'Thể hiện năng lực quản lý và điều phối cá nhân với vai trò Nhóm trưởng',
  summary:
    'Thiết lập không gian làm việc số, phân bổ tác vụ, điều phối giao tiếp và xử lý rủi ro cho bài tập nhóm môn Nhập môn công nghệ số.',
  extendedSummary:
    'Với vai trò Nhóm trưởng, tôi đã tự thiết kế không gian quản lý tiến độ tập trung bằng biểu đồ Gantt trên Google Sheets và thiết lập Centralized Knowledge Hub trên Google Drive. Báo cáo ghi lại cách áp dụng các kỹ thuật định dạng có điều kiện, quy tắc quản lý dữ liệu Single Source of Truth bằng Document Tabs, cùng với các chiến lược giao tiếp và xử lý trễ hạn qua Zalo và Google Meet.',
  tags: ['Project Management', 'Google Workspace', 'Collaboration', 'Leadership'],
  details: {
    goal: 'Thiết kế hệ thống quản lý tiến độ, lưu trữ tài nguyên và điều phối giao tiếp để tối ưu hóa hiệu suất làm việc nhóm.',
    items: [
      {
        title: 'Nền tảng sử dụng',
        type: 'tags',
        content: {
          items: ['Google Sheets', 'Google Docs', 'Google Drive', 'Zalo', 'Google Meet'], //
        },
      },
      {
        title: 'Quy trình điều phối',
        type: 'diagram',
        content: {
          workflow: [
            { step: 'Thiết lập Gantt Chart', desc: 'Dùng Google Sheets với cấu trúc phân tầng, Data Validation và Conditional Formatting báo đỏ quá hạn' },
            { step: 'Cấu trúc lưu trữ', desc: 'Chia đa tầng thư mục (Quản lí, Prompting, Media, Final)' },
            { step: 'Quản lý phiên bản', desc: 'Dùng tính năng Document Tabs trên Docs để tạo Nguồn dữ liệu duy nhất (Single Source of Truth)' },
            { step: 'Phân quyền linh hoạt', desc: 'Working files để Editor, Guidelines/Final files để Commenter' },
            { step: 'Dự phòng rủi ro', desc: 'Yêu cầu hoàn thành trước hạn chót chung 24h để tạo buffer time' },
          ],
        },
      },
      {
        title: 'Quy tắc giao tiếp nhóm',
        type: 'list',
        content: {
          norms: [
            'Cập nhật trạng thái tiến độ cá nhân trên Gantt Chart ít nhất 4-5 lần/tuần',
            'Review chéo trực tiếp trên Google Docs qua tính năng highlight và comment',
            'Nhắc nhở định kỳ lúc 9h tối Chủ Nhật trên Zalo kèm ảnh chụp màn hình các task trễ hạn',
            'Họp nhanh 15 phút (Stand-up meeting) để giải quyết tắc nghẽn công việc do phản hồi chậm',
            '100% tệp tin phải tuân thủ quy tắc đặt tên: [Mã số]_[Tên Công Cụ]_[Nội Dung tóm tắt]',
          ],
        },
      },
      {
        title: 'Nhìn lại & Rút kinh nghiệm',
        type: 'text',
        content:
          'Hệ sinh thái Google Workspace giúp mọi thành viên dễ tiếp cận và quen thuộc. Tuy nhiên, việc phải cập nhật hàm/kéo ngày thủ công khi trễ hạn là một nhược điểm. Sự thành công của dự án không chỉ nằm ở công cụ mà còn ở kỷ luật nhóm, điển hình như việc duy trì nhắc nhở định kỳ và thiết lập thời gian dự phòng để xử lý các cá nhân phản hồi chậm.'
      },
      {
        title: 'Tài liệu đính kèm',
        type: 'attachments',
        content: {
          files: [
            {
              name: 'BAO_CAO_TRINH_BAY_CAC_CONG_CU_HOP_TAC_TRUC_TUYEN_VA_THE_HIEN_NANG_LUC_QUAN_LY.docx',
              type: 'docx',
              path: '/docx/BAO_CAO_TRINH_BAY_CAC_CONG_CU_HOP_TAC_TRUC_TUYEN_VA_THE_HIEN_NANG_LUC_QUAN_LY.docx',
              description: 'Báo cáo trình bày các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân',
            },
          ],
        },
      },
    ],
  },
},
  {
  id: 5,
  icon: Palette,
  title: 'SỬ DỤNG AI TẠO SINH ĐỂ HỖ TRỢ SÁNG TẠO NỘI DUNG',
  category: '📚BÀI 5: SÁNG TẠO NỘI DUNG SỐ (Tuần 9, Tuần 10 - Từ 20/04/2026 - 03/05/2026)',
  subtitle: 'Ứng dụng AI tạo sinh trong sáng tạo nội dung Khoa học sức khỏe và sự sống',
  summary:
    'Sử dụng các công cụ AI tạo sinh (Gemini, Nano Banana 2, Canva, Capcut) để xây dựng bài thuyết trình về ứng dụng AI trong đại dịch COVID-19.',
  extendedSummary:
    'Dự án khám phá việc tích hợp AI vào quy trình sáng tạo nội dung. Nhóm áp dụng "quy tắc 2-2-2" trong việc tinh chỉnh Prompt, trải qua quy trình 3 bước khép kín từ kịch bản, thiết kế hình ảnh minh họa đến hậu kỳ video. Đặc biệt đề cao liêm chính học thuật qua việc fact-check thủ công và không sao chép nguyên bản.',
  tags: ['Generative AI', 'Content Creation', 'Gemini Pro', 'Academic Integrity'],
  details: {
    goal: 'Sử dụng AI tạo sinh để hỗ trợ quy trình sáng tạo nội dung số, đánh giá ưu nhược điểm và sự thay đổi vai trò của con người.',
    items: [
      {
        title: 'Công cụ AI sử dụng',
        type: 'tags',
        content: {
          items: ['Gemini AI Pro', 'Google Nano Banana 2', 'Canva AI', 'Capcut AI'],
        },
      },
      {
        title: 'Quy trình sáng tạo (3 bước & Quy tắc 2-2-2)',
        type: 'diagram',
        content: {
          workflow: [
            { step: 'Ideation', desc: 'Áp dụng quy tắc 2-2-2: Tinh chỉnh Prompt 2 lần để tối ưu hóa từ khóa trước khi lấy đầu ra.' },
            { step: 'Generation', desc: 'Gemini & Nano Banana 2 sinh văn bản thô và hình ảnh trực quan hóa luồng thuật toán.' },
            { step: 'Curation', desc: 'Output Editor đối chiếu chéo (fact-check) số liệu/khẳng định y khoa với PubMed và Google Scholar.' },
            { step: 'Integration', desc: 'Thiết kế slide trên Canva, ghi hình qua OBS và tạo Auto-captions bằng Capcut.' },
            { step: 'Polish', desc: 'Rà soát thủ công, sửa lỗi chính tả AI nghe nhầm và kiểm duyệt chất lượng cuối cùng.' },
          ],
        },
      },
      {
        title: 'Đánh giá công cụ',
        type: 'list',
        content: {
          norms: [
            'Điểm mạnh: Tiết kiệm thời gian tổng hợp, trực quan hóa tốt thuật toán phức tạp, Auto-captions giảm tới 80% thời gian làm phụ đề.',
            'Điểm yếu: Tiêu tốn thời gian cho việc viết/tinh chỉnh Prompt và bắt buộc phải rà soát, kiểm chứng thông tin (fact-check) do rủi ro sai lệch chuyên môn.'
          ],
        },
      },
      {
        title: 'Nhìn lại & Rút kinh nghiệm',
        type: 'text',
        content:
          'Sự tích hợp AI định hình lại vai trò của người sáng tạo, chuyển đổi từ việc sản xuất trực tiếp sang người điều phối và kiểm duyệt. AI giúp thoát khỏi các công việc thủ công để tập trung vào tư duy logic. Về mặt đạo đức, con người phải duy trì sự trung thực, tuyệt đối không sao chép nguyên bản nội dung thô và phải chịu trách nhiệm hoàn toàn về độ chính xác của sản phẩm cuối cùng.'
      },
      {
        title: 'Video thuyết trình',
        type: 'video',
        content: {
          videos: [
            {
              title: 'Ứng dụng trí tuệ nhân tạo và quá trình học sâu trong đại dịch COVID-19',
              description: 'Bài thuyết trình nhóm ứng dụng các công cụ AI tạo sinh trong việc xây dựng nội dung, hình ảnh và hậu kỳ.',
              embedUrl: 'HFm6DEl7HmM',
              placeholderNote: 'Add your YouTube video ID here to embed the video',
            },
          ],
        },
      },
      {
        title: 'Tài liệu đính kèm',
        type: 'attachments',
        content: {
          files: [
            {
              name: 'SU_DUNG_AI_TAO_SINH_DE_HO_TRO_SANG_TAO_NOI_DUNG.docx',
              type: 'docx',
              path: '/docx/SU_DUNG_AI_TAO_SINH_DE_HO_TRO_SANG_TAO_NOI_DUNG.docx',
              description: 'Báo cáo chi tiết quá trình sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
            },
          ],
        },
      },
    ],
  },
},
  {
    id: 6,
    icon: Shield,
    title: 'SỬ DỤNG AI CÓ TRÁCH NHIỆM TRONG HỌC TẬP VÀ NGHIÊN CỨU',
    category: '📚BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT TRONG MÔI TRƯỜNG SỐ (Tuần 11, Tuần 12 - Từ 04/05/2026 - 17/05/2026)',
    subtitle: 'Phân tích định hướng chính sách và thiết lập bộ nguyên tắc sử dụng AI liêm chính',
    summary:
      'Phân tích định hướng tích hợp AI của ĐHQGHN (VNU), đối chiếu với chính sách quốc tế và xây dựng 6 nguyên tắc cốt lõi nhằm đảm bảo liêm chính học thuật.',
    extendedSummary:
      'Dự án tập trung làm rõ ranh giới giữa hỗ trợ hợp lý và gian lận học thuật. Qua việc phân tích định hướng "Kiến tạo năng lực" của VNU so với hướng "Quản trị rủi ro" của quốc tế, tôi đã đúc kết các vấn đề về "ủy thác nhận thức", bản quyền, ảo giác dữ liệu và đề xuất bộ 6 nguyên tắc sử dụng AI xoay quanh triết lý "Công nghệ vì con người - Con người làm chủ công nghệ".',
    tags: ['Academic Integrity', 'Responsible AI', 'VNU Policy', 'Ethics'],
    details: {
      goal: 'Phân tích chính sách, nhận diện rủi ro đạo đức và xây dựng khung nguyên tắc cá nhân khi ứng dụng AI tạo sinh vào nghiên cứu.',
      items: [
        {
          title: '6 Nguyên Tắc Sử Dụng AI Có Trách Nhiệm',
          type: 'principles',
          content: {
            principles: [
              {
                title: 'Định vị AI là trợ lý, từ chối "ủy thác nhận thức"',
                text: 'Chỉ dùng AI để tìm ý tưởng, giải thích khái niệm. Tuyệt đối không giao phó toàn bộ quá trình tư duy, viết bài hay giải bài tập để bảo vệ năng lực phản biện.',
              },
              {
                title: 'Minh bạch hóa và lưu vết',
                text: 'Tự viết câu lệnh bằng tư duy cá nhân và lưu trữ có hệ thống toàn bộ lịch sử tương tác để minh chứng cho tính minh bạch.',
              },
              {
                title: 'Tối ưu hóa qua vòng lặp phản hồi',
                text: 'Áp dụng quy trình thử nghiệm, đánh giá, phản hồi chéo và tinh chỉnh prompt liên tục thay vì chấp nhận ngay kết quả đầu tiên.',
              },
              {
                title: 'Kiểm chứng chéo độc lập',
                text: 'Với thái độ hoài nghi học thuật, chủ động đối chiếu và xác minh lại mọi nguồn tài liệu, trích dẫn do AI cung cấp để đề phòng "ảo giác" dữ liệu.',
              },
              {
                title: 'Tôn trọng bản quyền và liêm chính',
                text: 'Cẩn trọng tham khảo để tránh "đạo văn ẩn", không ghi nhận AI dưới tư cách là đồng tác giả trong bất kỳ ấn phẩm nào.',
              },
              {
                title: 'Con người làm chủ công nghệ',
                text: 'Chủ động kiểm soát công cụ, biến AI thành đòn bẩy nâng cao sáng tạo và phát triển bản thân.',
              },
            ],
          },
        },
        {
          title: 'Nhận diện góc khuất của AI',
          type: 'list',
          content: {
            norms: [
              'Gian lận học thuật: Yêu cầu AI viết toàn bộ bài hoặc tạo số liệu giả mạo làm mờ ranh giới với việc hỗ trợ hợp lý.',
              'Sở hữu trí tuệ: AI tổng hợp từ dữ liệu có bản quyền nhưng không trích dẫn, dễ dẫn đến "đạo văn ẩn". AI không thể đứng tên đồng tác giả.',
              'Vấn nạn "ảo giác": AI thường xuyên tự bịa ra các trích dẫn, tên bài báo không tồn tại gây vi phạm tính trung thực.',
              'Hệ lụy "Ủy thác nhận thức": Lạm dụng AI làm thui chột năng lực tư duy, tạo ảo tưởng về năng lực bản thân và gây bất bình đẳng trong tiếp cận công nghệ.',
            ],
          },
        },
        {
          title: 'Nhìn lại & Rút kinh nghiệm',
          type: 'text',
          content:
            'Việc VNU chủ động xây dựng khung năng lực AI từ sớm, chọn cách "sống chung" và "làm chủ" là con đường phát triển bền vững thay vì cấm đoán. Tuy nhiên, từ triết lý tọa đàm đến thực tiễn cần sớm đưa ra các chế tài và ranh giới rõ ràng về "liêm chính học thuật" để bảo vệ người học, giúp sinh viên biết chính xác mức độ can thiệp của AI được phép trong nghiên cứu.'
            },
{
          title: 'Sơ đồ minh họa',
          type: 'gallery',
          content: {
            examples: [
              { 
                title: 'Sử dụng AI có trách nhiệm: Từ triết lý đến hành động', 
                tool: 'NotebookLM', 
                desc: 'Sơ đồ trực quan hóa triết lý định hướng chiến lược và các nguyên tắc sử dụng AI liêm chính',
                src: '/Su_dung_AI_co_trach_nhiem.png'
              },
            ],
          },
        },
        {
          title: 'Tài liệu đính kèm',
          type: 'attachments',
          content: {
            files: [
              {
                name: 'Bai_tap_tuan_6.docx',
                type: 'docx',
                path: '/docx/Bai_tap_tuan_6.docx',
                description: 'Báo cáo phân tích chính sách và bộ nguyên tắc sử dụng AI liêm chính trong học tập',
              },
            ],
          },
        },
      ],
    },
  }
];

export default function Projects() {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const toggleExpanded = (projectId: number) => {
    const newSet = new Set(expandedIds);
    if (newSet.has(projectId)) {
      newSet.delete(projectId);
    } else {
      newSet.add(projectId);
    }
    setExpandedIds(newSet);
  };

  const handleNavClick = (index: number) => {
    setActiveProject(index);
    const card = cardRefs.current[index];
    if (card) {
      const offset = 140;
      const top = card.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-32 px-8 bg-[#f2f1ec]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs text-[#536878] tracking-[0.2em] uppercase mb-6">
            QUÁ TRÌNH HỌC TẬP
          </p>
          <h2 className="text-3xl md:text-4xl text-[#2c3e50] font-noto-serif mb-6">
            KHO LƯU TRỮ BÀI TẬP SỐ
          </h2>
          <div className="w-16 h-px bg-[#a8c4ae] mb-8" />
          <p className="text-[#536878] max-w-2xl leading-relaxed">
            Kho lưu trữ tài liệu kỹ thuật số nhằm tóm tắt quy trình làm việc với sự hỗ trợ của AI và trải nghiệm học tập của bản thân.
          </p>
        </motion.div>

        {/* Sticky Project Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sticky top-20 z-20 bg-[#f2f1ec]/95 backdrop-blur-sm py-4 mb-8 -mx-8 px-8 border-b border-[#e5e4df]"
        >
          <div className="flex overflow-x-auto gap-2 scrollbar-hide">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleNavClick(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded text-sm whitespace-nowrap transition-all ${
                  activeProject === index
                    ? 'bg-[#6b8f71]/10 text-[#6b8f71] border border-[#6b8f71]/30'
                    : 'text-[#536878] hover:text-[#536878]'
                }`}
              >
                <project.icon className="w-4 h-4" />
                <span className="hidden md:inline">{project.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedIds.has(project.id)}
              onToggle={() => toggleExpanded(project.id)}
              isActive={activeProject === index}
              cardRef={(el) => { cardRefs.current[index] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isActive: boolean;
  cardRef: (el: HTMLElement | null) => void;
}

function ProjectCard({ project, index, isExpanded, onToggle, isActive, cardRef }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={(el) => { ref.current = el; cardRef(el); }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group bg-[#f9f8f5] rounded-sm border transition-all duration-500 ${
        isActive
          ? 'border-[#6b8f71]/30 shadow-[0_0_30px_rgba(107,143,113,0.08)]'
          : 'border-[#e5e4df] hover:border-[#d1d1d1]'
      }`}
    >
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full text-left p-8 md:p-10 focus:outline-none focus:ring-2 focus:ring-[#6b8f71]/30 focus:ring-inset"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${
                  isExpanded
                    ? 'bg-[#6b8f71]/10 text-[#6b8f71]'
                    : 'bg-[#f2f1ec] text-[#536878] group-hover:bg-[#6b8f71]/5 group-hover:text-[#6b8f71]'
                }`}
              >
                <project.icon className="w-5 h-5" />
              </div>
              <span className="text-xs text-[#536878] tracking-widest uppercase">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-noto-serif text-[#2c3e50] mb-3 group-hover:text-[#3d3d3d] transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-[#6b8f71] italic mb-4">{project.subtitle}</p>

            <p className="text-[#536878] text-[15px] leading-relaxed max-w-2xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#536878] bg-[#f2f1ec] px-3 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Click hint - only shown when collapsed */}
            {!isExpanded && (
              <p className="mt-4 text-base text-[#1E90FF] italic flex items-center gap-1.5 justify-center opacity-100 ">
                <span>↓</span>
                <span>Bấm vào đây để biết thêm chi tiết</span>
              </p>
            )}
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <ChevronDown className="w-5 h-5 text-[#536878]" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-10 pt-4 border-t border-[#e5e4df]">
              {/* Goal Statement */}
              <div className="mb-8 p-6 bg-[#f2f1ec] rounded-sm">
                <p className="text-xs font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-2">
                  Mục tiêu bài học
                </p>
                <p className="text-[#536878]">{project.details.goal}</p>
              </div>

              {/* Extended Summary */}
              <div className="mb-10">
                <p className="text-[#536878] leading-relaxed">{project.extendedSummary}</p>
              </div>

              {/* Detail Items */}
              <div className="space-y-8">
                {project.details.items.map((item, itemIndex) => (
                  <DetailItem key={itemIndex} item={item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function DetailItem({ item }: { item: DetailItem }) {
  switch (item.type) {
    case 'text':
      return (
        <div className="prose max-w-none">
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-3">
            Phản hồi bài học
          </p>
          <blockquote className="text-[#536878] text-[15px] leading-relaxed italic border-l-2 border-[#a8c4ae] pl-4">
            "{item.content}"
          </blockquote>
        </div>
      );

    case 'list':
      const items = item.content.strategies || item.content.principles || item.content.norms || [];
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
            {item.title}
          </p>
          <ul className="space-y-3">
            {items.map((listItem: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-[#536878] text-[15px]">
                <span className="text-[#a8c4ae] mt-1.5">·</span>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'tags':
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
            {item.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.content.items.map((tag: string, i: number) => (
              <span
                key={i}
                className="text-sm text-[#536878] bg-[#f2f1ec] border border-[#e5e4df] px-4 py-2 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      );

    case 'diagram':
      const workflow = item.content.workflow || item.content.criteria || [];
      if (item.content.structure) {
        return (
          <div>
            <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
              {item.title}
            </p>
            <div className="bg-[#f2f1ec] rounded-sm p-6 font-mono text-sm">
              {item.content.structure.map((folder: { name: string; level: number; children?: string[] }, i: number) => (
                <div key={i} className="text-[#536878]">
                  <div className="mb-1">
                    {folder.level === 0 ? '├── ' : '│   ├── '}
                    {folder.name}/
                  </div>
                  {folder.children?.map((child: string, j: number) => (
                    <div key={j} className="ml-8 text-[#536878]">
                      └── {child}/
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      }
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
            {item.title}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {workflow.map((step: { step?: string; name?: string; desc?: string; text?: string }, i: number) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-[#f2f1ec] rounded-sm"
              >
                <span className="text-xs text-[#a8c4ae] font-mono mt-0.5">
                  {step.step || step.name || String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-[#3d3d3d] text-sm font-medium mb-1">
                    {step.step || step.name}
                  </p>
                  <p className="text-[#536878] text-sm">{step.desc || step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'comparison':
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
            {item.title}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-sm">
              <p className="text-xs text-red-400 tracking-widest uppercase mb-3">
                Prompt ban đầu
              </p>
              <p className="font-mono text-sm text-[#536878] mb-4">
                {item.content.before.prompt}
              </p>
              <p className="text-xs text-[#536878] mb-2">Vấn đề:</p>
              <p className="text-sm text-[#536878]">{item.content.before.issue}</p>
            </div>
            <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-sm">
              <p className="text-xs text-[#6b8f71] tracking-widest uppercase mb-3">
                Prompt cải tiến
              </p>
              <p className="font-mono text-sm text-[#536878] mb-4">
                {item.content.after.prompt}
              </p>
              <p className="text-xs text-[#6b8f71] mb-2">Cải tiến:</p>
              <p className="text-sm text-[#536878]">{item.content.after.improvement}</p>
            </div>
          </div>
        </div>
      );

    case 'principles':
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-6">
            {item.title}
          </p>
          <div className="space-y-5">
            {item.content.principles.map((p: { title: string; text: string }, i: number) => (
              <div key={i} className="flex gap-5">
                <div className="w-12 h-12 rounded-sm bg-[#6b8f71]/10 flex items-center justify-center shrink-0">
                  <span className="text-sm text-[#6b8f71] font-mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h4 className="text-[#3d3d3d] font-medium mb-2">{p.title}</h4>
                  <p className="text-sm text-[#536878] leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'code':
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
            {item.title}
          </p>
          <div className="bg-[#2c3e50] rounded-sm p-6 font-mono text-sm">
            {item.content.rules.map((rule: string, i: number) => (
              <div key={i} className="text-[#a8c4ae] mb-2">
                <span className="text-[#536878]">{'>'}</span> {rule}
              </div>
            ))}
          </div>
        </div>
      );

    case 'gallery':
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
            {item.title}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(item.content.images || item.content.examples || []).map((img: { alt?: string; title?: string; tool?: string; desc: string; src?: string }, i: number) => (
              <div
                key={i}
                className="bg-[#f2f1ec] rounded-sm overflow-hidden hover:bg-[#e5e4df] transition-colors cursor-pointer group border border-[#e5e4df] hover:border-[#d1d1d1]"
              >
                <div className="w-full aspect-[4/3] bg-[#e5e4df] flex items-center justify-center group-hover:bg-[#d1d1d1] transition-colors overflow-hidden relative">
                  {img.src ? (
                    <img
                      src={img.src}
                      alt={img.alt || ''}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-[#536878]">
                      <File className="w-8 h-8 opacity-40" />
                      <span className="text-xs">Chưa có ảnh</span>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm text-[#3d3d3d] mb-1 truncate">{img.alt || img.title}</p>
                  {img.tool && <p className="text-xs text-[#536878] mb-1">via {img.tool}</p>}
                  <p className="text-xs text-[#536878] truncate">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'video':
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-6">
            <Video className="w-4 h-4 inline-block mr-2" />
            {item.title}
          </p>
          <div className="space-y-6">
            {item.content.videos.map((video: { title: string; description: string; embedUrl?: string; placeholderNote?: string }, i: number) => (
              <div key={i} className="bg-[#f2f1ec] rounded-sm p-6">
                <h4 className="text-[#3d3d3d] font-medium mb-3">{video.title}</h4>
                <p className="text-sm text-[#536878] mb-4">{video.description}</p>

                {video.embedUrl ? (
                  <div className="relative w-full aspect-video bg-[#2c3e50] rounded-sm overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedUrl}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-[#e5e4df] rounded-sm flex flex-col items-center justify-center">
                    <Video className="w-12 h-12 text-[#536878] mb-3 opacity-40" />
                    <p className="text-sm text-[#536878] text-center px-4">
                      {video.placeholderNote || 'Thêm ID video YouTube để nhúng'}
                    </p>
                    <p className="text-xs text-[#536878] mt-2">
                      Ví dụ: dQw4w9WgXcQ
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case 'attachments':
      return (
        <div>
          <p className="text-sm font-semibold text-[#2c3e50] tracking-[0.15em] uppercase mb-4">
            <FileText className="w-4 h-4 inline-block mr-2" />
            {item.title}
          </p>
          <div className="space-y-3">
            {item.content.files.map((file: { name: string; type: string; path: string; description: string }, i: number) => (
              <a
                key={i}
                href={file.path}
                download
                className="flex items-start gap-4 p-5 bg-[#f2f1ec] rounded-sm hover:bg-[#e5e4df] transition-colors group border border-[#e5e4df] hover:border-[#d1d1d1]"
              >
                <div className="mt-0.5">
                  {file.type === 'pdf' ? (
                    <File className="w-6 h-6 text-rose-600" />
                  ) : (
                    <FileText className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#3d3d3d] font-medium mb-1 group-hover:text-[#6b8f71] transition-colors truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-[#536878] mb-2">{file.description}</p>
                  <span className="text-xs text-[#536878] uppercase tracking-wide">
                    {file.type} • Nhấn để tải xuống
                  </span>
                </div>
                <Download className="w-5 h-5 text-[#536878] group-hover:text-[#6b8f71] transition-colors shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}