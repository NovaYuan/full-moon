/**
 * Created by yuan on 2016/4/11.
 */
'use strict';
var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    //mysql = require('mysql'),
    express = require("express"),
    //bodyParser = require('body-parser'),
    app = express(),
    articleLength = 0,
    connection;

//�������ݿ�����
//connection = mysql.createConnection({
//    host: '127.0.0.1',
//    user: 'root',
//    password: 'mysql1202',
//    database: 'halo_world',
//    port: 3306
//});

//connection.connect(function(err){
//    if(err){
//        console.error('error connecting:' + err.stack);
//        return;
//    }
//    console.log('connected as id ' + connection.threadId);
//});

//����������
http.createServer( function (request, response) {
    var pathname = url.parse(request.url).pathname,
        dataUrl = request.url;

    if(pathname == "/"){
        pathname = "/index.html"
    }

    switch (pathname){
        case "/me.node":
            connection.query(
                'select * from me',
                function selectCb(err, results, fields){
                    if(err){
                        res.status(404).end(err);
                        throw err;
                    }

                    if(results){
                        response.setHeader('Cache-Control', 'no-cache');
                        response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                        response.end(JSON.stringify(results));
                    }
                }
            );
            break;
        case "/list.node":
            connection.query(
                'select * from articles order by createDate desc',
                function selectCb(err, results, fields){
                    if(err){
                        res.status(404).end(err);
                        throw err;
                    }

                    if(results){
                        response.setHeader('Cache-Control', 'no-cache');
                        response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                        articleLength = results.length;
                        response.end(JSON.stringify(results));
                    }
                }
            );
            break;
        case "/list/save.node":
            var saved = [];
            request.on("data", function(data){
                saved.push(data);
                console.log("���������յ������ݣ���"+ saved);
            });
            request.on("end", function(){
                var data = Buffer.concat(saved).toString(),
                    json = JSON.parse(data),
                    createDate = (new Date()).valueOf(),
                    insertSql = 'insert into articles(title, content, tags, stars, createDate, modifyDate, userid) value(?, ?, ?, ?, ?, ?, 0)',
                    insertParams = [json.title, json.content, json.tags, 0, createDate, createDate];

                connection.query(insertSql, insertParams, function(err, result){
                    if(err){
                        console.log('����ʧ�� - ',err.message);
                        return;
                    }else{
                        var success = {};

                        success = {
                            status: "success",
                            content: "�������ݳɹ�!"
                        };
                        response.setHeader('Cache-Control', 'no-cache');
                        response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                        articleLength += 1;
                        response.end(JSON.stringify(success));
                    }
                });
            });
            break;
        case "/list/view.node":
            var queryData = url.parse(request.url).query,
                getSql = 'select * from articles arti, me mine where arti.userid = mine.id and  arti.id=?',
                sqlQuery = queryData.split("=")[1];

            connection.query(getSql, sqlQuery, function selectCb(err, results, fields){
                if(err){
                    results.status(404).end(err);
                    throw err;
                }

                if(results){
                    response.setHeader('Cache-Control', 'no-cache');
                    response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                    articleLength = results.length;
                    response.end(JSON.stringify(results));
                }
            });
            break;
        default :
            fs.readFile(pathname.substr(1), "binary", function (err, data) {
                if (err) {
                    response.writeHead(404, {'Content-Type': 'text/html'});
                }else{
                    if(pathname.indexOf('.css') != -1){
                        response.setHeader('Content-Type', 'text/css')
                    }else if(pathname.indexOf('.woff') != -1) {
                        response.setHeader('Content-Type', 'text/woff')
                    } else{
                        response.writeHead(200, {'Content-Type': 'text/html'});
                    }
                    response.write(data, "binary");
                }
                response.end();
            });
    }

}).listen(8080);