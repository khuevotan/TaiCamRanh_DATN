<script>
    let originalText = "Đây là một đoạn văn dài. Đây là một đoạn văn dài khác.";
let truncatedText = originalText.substring(0, 20) + "..."; // Chỉ lấy 20 ký tự đầu tiên
console.log(truncatedText); // "Đây là một đoạn văn ..."

let originalText = "Đây là một đoạn văn dài. Đây là một đoạn văn dài khác.";
let words = originalText.split(" "); // Tách chuỗi thành các từ
let truncatedWords = words.slice(0, 5); // Lấy 5 từ đầu tiên
let truncatedText = truncatedWords.join(" ") + "..."; // Nối các từ lại với nhau và thêm dấu chấm cuối
console.log(truncatedText); // "Đây là một đoạn văn dài. Đây..."


</script>