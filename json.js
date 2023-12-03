
   
 
    function beautify() {
      const input = document.getElementById("jsonInput").value;
      try
      {
        const parsed = JSON.parse(input);
        const beautified = JSON.stringify(parsed, null, 2);
        document.getElementById("jsonOutput").value = beautified;
      }
      catch (error) {
        alert("Invalid JSON input");
      }
    }

