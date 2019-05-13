module.exports = `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title></title>
    </head>
    <body>
        <h1 class="title">Title</h1>
        <p class="description">Lorem ipsum</p>
        <p class="textnodes">
            Line0<br>
            Line1
        </p>
        <p class="deep-textnodes">
            <span>
                Line0<br>
                Line1
            </span>
            Line2
        </p>
        <p class="date">1988-01-01</p>
        <ul class="features">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
        <div class="nested">
            <span>Foo</span>
            <div class="level1">
                <span>1</span>
                <div class="level2">
                    <span>2</span>
                </div>
            </div>
        </div>
        <table id='detail'>
            <thead>
                <tr>
                <th>
                    <div id="start-A" class="city">Sydney</div>
                </th>
                <th>
                    <div class="col-two-head">info</div>
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="../1234" class="address">one way street</a>
                    </td>
                    <td>
                        <div class="col-two">info-1</div>
                    </td>
                </tr>
                <tr>
                    <td><a href="../4567" class="address">GT Road</a>
                    </td>
                    <td>
                        <div class="col-two">info-2</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
`;
