function countWords() {
    const text = document.getElementById("text-input").value;
  
    // Word count: split by spaces, filter out empty items
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
  
    // Character count (excluding only extra white spaces)
    const charCount = text.replace(/\s/g, '').length;
  
    document.getElementById("word-count").innerText = wordCount;
    document.getElementById("char-count").innerText = charCount;
  }