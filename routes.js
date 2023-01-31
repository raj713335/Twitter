const displayContent = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url == '/profile') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>This is profile Page</p>');
        return res.end();
    }
    else if(url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>Cheese Burgers</p>');
        return res.end();
    }
    else if(url == '/settings' && method == "POST") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Form was submitted</form>');
        return res.end();
    }
    else if(url == '/settings') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Cheese Burgers</h1><form action="/settings" method="POST"><input type="text"><button type="submit">SUBMIT</button></form>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Page Not Found</p>');
    res.end();
}


module.exports = displayContent;
