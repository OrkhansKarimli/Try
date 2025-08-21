function(element, input) {
    try {
        var values = input.split(",");
        var min = parseInt(values[0]);
        var max = parseInt(values[1]);

        var ranges = element.querySelectorAll('input[type="range"]');

        if (ranges.length >= 2) {
            // min range
            ranges[0].value = min;
            ranges[0].dispatchEvent(new Event('input', { bubbles: true }));
            ranges[0].dispatchEvent(new Event('change', { bubbles: true }));

            // max range
            ranges[1].value = max;
            ranges[1].dispatchEvent(new Event('input', { bubbles: true }));
            ranges[1].dispatchEvent(new Event('change', { bubbles: true }));

            return "Price set to: " + min + " - " + max;
        } else {
            return "Range inputs not found! Found count: " + ranges.length;
        }
    } catch (e) {
        return "Error: " + e.message;
    }
}
