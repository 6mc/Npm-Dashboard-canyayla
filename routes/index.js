module.exports = function(app, Content)
{
  // admin.html 페이지 라우팅
  app.get('/admin', function(req, res){
    res.render('./../client/public/admin.html');
  });


//   app.get('/query', function(req,res){
//     Content.find(function(err, contents){
//       if(err) return res.status(500).send({err: 'database failure'});
//      //res.json(contents);
//       //var lop = contents+" ";
//     // var mig = String(contents).split(":");
//     if(contents=null)
//       alert('Null');
//     else
//      res.send(stabilizer(contents));
//     });
//   });

// app.post('/api/insert', function(req, res){ //
//     var content = new Content();
//     // console.log("req.body.name : ",req.body.name);
//       content.name = req.body.name;
//       content.url = req.body.url;
//       content.Comment = req.body.Comment;
      

//       content.save(function(err){
//           if(err){
//               console.error(err);
//               res.json({result: "error"});
//               return;
//           }
//       });
//       // res.send('input success');
//       res.redirect('/admin');
//     // res.redirect('back');
//       // res.json({result: "success"});
//   });



   




  app.post('/api/check', function(req, res){
    // 일치되는 값 전체 출력
    Content.find({url: req.body.url}, function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
     // res.json(contents);
// if (res.send(contents)==[])
if (contents.length==0) 
  {
    var content = new Content();
    content.url = req.body.url;
content.name=  ".";
content.Comment = ".";
content.save(function(err){
          if(err){
              console.error(err);
              res.json({result: "error"});
              return;
          }
      });

 var context = req.body.url;
    res.render('/api/search', context);
  //  res.redirect('');
}
else
  {
     var context = req.body.url;
    res.render('/api/search', context);
  //res.redirect('/api/search');
  }
// res.send("rodrigues");
// else 
   //res.send(contents);}
    });
    // 일치되는 값 1개 출력
    // Content.findOne({name: req.body.name}, function(err, content){
    //   if(err) return res.status(500).json({error: err});
    //   if(!content) return res.status(404).json({error: 'content not found'});
    //   res.json(content);
    // });
  });



  // 모든 데이터 조회
  app.get('/api/contents', function(req,res){
    Content.find(function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
     //res.json(contents);
      //var lop = contents+" ";
    // var mig = String(contents).split(":");
     res.json(contents);
    });
  });

function stabilizer(kurit, url){

var a=2;
var b=3;
var c=4;

  var mig = String(kurit).split(":");
//mig[b] = mig[b].replace(/,/gi, '');
var zigot = "<h1>"+mig[b]+"</h1><br/>";
while (mig[a]!=null){
zigot =zigot+"<h2>&quot"+mig[a].replace(/,/gi, '')+"&quot</h2>"+mig[c]+"<br/>";
a=a+4;
//b=b+4;
c=c+4;
}

//zigot = .replace('a','e');

zigot = zigot.replace(/'/gi, '');
zigot = zigot.replace(/}/gi, '');
zigot = zigot.replace(/name/gi, '');
zigot = zigot.replace(/url/gi, '');
zigot = zigot.replace(/,{ _id/gi, '');

//zigot = zigot+ "<link rel='stylesheet' href='css/main.css'>";


var apex = zigot.split("0");



//var combox = ""

var sb = " <form id='form-one' class='form' action='/api/insert' method='post'>" +
"      " +
"      <p class='name' >" +
"        <input name='name' type='text'       class='validate[required,custom[onlyLetter],length[0,100]] feedback-input' placeholder='Name' id='name' />" +
"      </p>" +
"      " +
"      " +
"      " +
"      <p class='text'>" +
"        <textarea name='Comment' class='validate[required,length[6,300]] feedback-input' id='comment' placeholder='Comment' style='height: 50px; width: 300px;'></textarea>" +
"      </p>" +
"      " +
"      <input type='text' name='url'  placeholder='url' style='width: 20%; height: 35px; display: none ' " +"value="+url+">"+
"    " +
"        <input type='submit' class='sender' value='Comment !' id='button-bottom'/>" +
"       </form>";

sb = '<script src="http://code.jquery.com/jquery-latest.min.js"  type="text/javascript"></script>' +sb;


apex[0] = "<div style='text-align: center;'>"+apex[0]+sb +"</div>";


return apex[0];
   //   return mig[2];
}



function create(name,username,email,type){




//var combox = ""

var sb = "<!DOCTYPE html>" +
"<html lang='en'>" +
"  <head>" +
"    <meta charset='utf-8'>" +
"    <meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
"    <meta name='description' content=''>" +
"    <meta name='author' content='Dashboard'>" +
"    <meta name='keyword' content='Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina'>" +
"    <title>Rexivo - FREE Bootstrap Admin Template</title>" +
"    <!-- Bootstrap core CSS -->" +
"    <link href='assets/css/bootstrap.css' rel='stylesheet'>" +
"    <!--external css-->" +
"    <link href='assets/font-awesome/css/font-awesome.css' rel='stylesheet' />" +
"    <link rel='stylesheet' type='text/css' href='assets/css/zabuto_calendar.css'>" +
"    <link rel='stylesheet' type='text/css' href='assets/js/gritter/css/jquery.gritter.css' />" +
"    <link rel='stylesheet' type='text/css' href='assets/lineicons/style.css'>    " +
"    " +
"    <!-- Custom styles for this template -->" +
"    <link href='assets/css/style.css' rel='stylesheet'>" +
"    <link href='assets/css/style-responsive.css' rel='stylesheet'>" +
"    <script src='assets/js/chart-master/Chart.js'></script>" +
"    " +
"    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->" +
"    <!--[if lt IE 9]>" +
"      <script src='https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js'></script>" +
"      <script src='https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js'></script>" +
"    <![endif]-->" +
"  </head>" +
"  <body>" +
"  <section id='container' >" +
"      <!-- **********************************************************************************************************************************************************" +
"      TOP BAR CONTENT & NOTIFICATIONS" +
"      *********************************************************************************************************************************************************** -->" +
"      <!--header start-->" +
"      <header class='header black-bg'>" +
"              <div class='sidebar-toggle-box'>" +
"                  <div class='fa fa-bars tooltips' data-placement='right' data-original-title='Toggle Navigation'></div>" +
"              </div>" +
"            <!--logo start-->" +
"            <a href='index.html' class='logo'><b>Rexivo  <span style='color:#3DCD58'>"+type +"</span> </b></a>" +
"            <!--logo end-->" +
"            <div class='nav notify-row' id='top_menu'>" +
"                <!--  notification start -->" +
"                <ul class='nav top-menu'>" +
"                    <!-- settings start -->" +
"                    <li class='dropdown'>" +
"                        <a data-toggle='dropdown' class='dropdown-toggle' href='index.html#'>" +
"                            <i class='fa fa-tasks'></i>" +
"                            <span class='badge bg-theme'>4</span>" +
"                        </a>" +
"                        <ul class='dropdown-menu extended tasks-bar'>" +
"                            <div class='notify-arrow notify-arrow-green'></div>" +
"                            <li>" +
"                                <p class='green'>You have 1 pending tasks</p>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <div class='task-info'>" +
"                                        <div class='desc'>Rexivo Admin Panel</div>" +
"                                        <div class='percent'>40%</div>" +
"                                    </div>" +
"                                    <div class='progress progress-striped'>" +
"                                        <div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width: 40%'>" +
"                                            <span class='sr-only'>40% Complete (success)</span>" +
"                                        </div>" +
"                                    </div>" +
"                                </a>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <div class='task-info'>" +
"                                        <div class='desc'>Database Update</div>" +
"                                        <div class='percent'>60%</div>" +
"                                    </div>" +
"                                    <div class='progress progress-striped'>" +
"                                        <div class='progress-bar progress-bar-warning' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: 60%'>" +
"                                            <span class='sr-only'>60% Complete (warning)</span>" +
"                                        </div>" +
"                                    </div>" +
"                                </a>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <div class='task-info'>" +
"                                        <div class='desc'>Product Development</div>" +
"                                        <div class='percent'>80%</div>" +
"                                    </div>" +
"                                    <div class='progress progress-striped'>" +
"                                        <div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='80' aria-valuemin='0' aria-valuemax='100' style='width: 80%'>" +
"                                            <span class='sr-only'>80% Complete</span>" +
"                                        </div>" +
"                                    </div>" +
"                                </a>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <div class='task-info'>" +
"                                        <div class='desc'>Payments Sent</div>" +
"                                        <div class='percent'>70%</div>" +
"                                    </div>" +
"                                    <div class='progress progress-striped'>" +
"                                        <div class='progress-bar progress-bar-danger' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style='width: 70%'>" +
"                                            <span class='sr-only'>70% Complete (Important)</span>" +
"                                        </div>" +
"                                    </div>" +
"                                </a>" +
"                            </li>" +
"                            <li class='external'>" +
"                                <a href='#'>See All Tasks</a>" +
"                            </li>" +
"                        </ul>" +
"                    </li>" +
"                    <!-- settings end -->" +
"                    <!-- inbox dropdown start-->" +
"                    <li id='header_inbox_bar' class='dropdown'>" +
"                        <a data-toggle='dropdown' class='dropdown-toggle' href='index.html#'>" +
"                            <i class='fa fa-envelope-o'></i>" +
"                            <span class='badge bg-theme'>5</span>" +
"                        </a>" +
"                        <ul class='dropdown-menu extended inbox'>" +
"                            <div class='notify-arrow notify-arrow-green'></div>" +
"                            <li>" +
"                                <p class='green'>You have 5 new messages</p>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <span class='photo'><img alt='avatar' src='assets/img/ui-zac.jpg'></span>" +
"                                    <span class='subject'>" +
"                                    <span class='from'>Zac Snider</span>" +
"                                    <span class='time'>Just now</span>" +
"                                    </span>" +
"                                    <span class='message'>" +
"                                        Hi mate, how is everything?" +
"                                    </span>" +
"                                </a>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <span class='photo'><img alt='avatar' src='assets/img/ui-divya.jpg'></span>" +
"                                    <span class='subject'>" +
"                                    <span class='from'>Divya Manian</span>" +
"                                    <span class='time'>40 mins.</span>" +
"                                    </span>" +
"                                    <span class='message'>" +
"                                     Hi, I need your help with this." +
"                                    </span>" +
"                                </a>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <span class='photo'><img alt='avatar' src='assets/img/ui-danro.jpg'></span>" +
"                                    <span class='subject'>" +
"                                    <span class='from'>Dan Rogers</span>" +
"                                    <span class='time'>2 hrs.</span>" +
"                                    </span>" +
"                                    <span class='message'>" +
"                                        Love your new Dashboard." +
"                                    </span>" +
"                                </a>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>" +
"                                    <span class='photo'><img alt='avatar' src='assets/img/ui-sherman.jpg'></span>" +
"                                    <span class='subject'>" +
"                                    <span class='from'>Dj Sherman</span>" +
"                                    <span class='time'>4 hrs.</span>" +
"                                    </span>" +
"                                    <span class='message'>" +
"                                        Please, answer asap." +
"                                    </span>" +
"                                </a>" +
"                            </li>" +
"                            <li>" +
"                                <a href='index.html#'>See all messages</a>" +
"                            </li>" +
"                        </ul>" +
"                    </li>" +
"                    <!-- inbox dropdown end -->" +
"                </ul>" +
"                <!--  notification end -->" +
"            </div>" +
"            <div class='top-menu'>" +
"             <ul class='nav pull-right top-menu'>" +
"                    <li><a class='logout' href='login.html'>Logout</a></li>" +
"             </ul>" +
"            </div>" +
"        </header>" +
"      <!--header end-->" +
"      " +
"      <!-- **********************************************************************************************************************************************************" +
"      MAIN SIDEBAR MENU" +
"      *********************************************************************************************************************************************************** -->" +
"      <!--sidebar start-->" +
"      <aside>" +
"          <div id='sidebar'  class='nav-collapse '>" +
"              <!-- sidebar menu start-->" +
"              <ul class='sidebar-menu' id='nav-accordion'>" +
"              " +
"                 <p class='centered'><a href='profile.html'><img src='assets/img/ui-sam.jpg' class='img-circle' width='60'></a></p>" +
"                 <h5 class='centered'>Marcel Newman</h5>" +
"                   " +
"                  <li class='mt'>" +
"                      <a class='active' href='index.html'>" +
"                          <i class='fa fa-dashboard'></i>" +
"                          <span>Dashboard</span>" +
"                      </a>" +
"                  </li>" +
"                  <li class='sub-menu'>" +
"                      <a href='javascript:;' >" +
"                          <i class='fa fa-desktop'></i>" +
"                          <span>UI Elements</span>" +
"                      </a>" +
"                      <ul class='sub'>" +
"                          <li><a  href='general.html'>General</a></li>" +
"                          <li><a  href='buttons.html'>Buttons</a></li>" +
"                          <li><a  href='panels.html'>Panels</a></li>" +
"                      </ul>" +
"                  </li>" +
"                  <li class='sub-menu'>" +
"                      <a href='javascript:;' >" +
"                          <i class='fa fa-cogs'></i>" +
"                          <span>Components</span>" +
"                      </a>" +
"                      <ul class='sub'>" +
"                          <li><a  href='calendar.html'>Calendar</a></li>" +
"                          <li><a  href='gallery.html'>Gallery</a></li>" +
"                          <li><a  href='todo_list.html'>Todo List</a></li>" +
"                      </ul>" +
"                  </li>" +
"                  <li class='sub-menu'>" +
"                      <a href='javascript:;' >" +
"                          <i class='fa fa-book'></i>" +
"                          <span>Extra Pages</span>" +
"                      </a>" +
"                      <ul class='sub'>" +
"                          <li><a  href='blank.html'>Blank Page</a></li>" +
"                          <li><a  href='login.html'>Login</a></li>" +
"                          <li><a  href='lock_screen.html'>Lock Screen</a></li>" +
"                      </ul>" +
"                  </li>" +
"                  <li class='sub-menu'>" +
"                      <a href='javascript:;' >" +
"                          <i class='fa fa-tasks'></i>" +
"                          <span>Forms</span>" +
"                      </a>" +
"                      <ul class='sub'>" +
"                          <li><a  href='form_component.html'>Form Components</a></li>" +
"                      </ul>" +
"                  </li>" +
"                  <li class='sub-menu'>" +
"                      <a href='javascript:;' >" +
"                          <i class='fa fa-th'></i>" +
"                          <span>Data Tables</span>" +
"                      </a>" +
"                      <ul class='sub'>" +
"                          <li><a  href='basic_table.html'>Basic Table</a></li>" +
"                          <li><a  href='responsive_table.html'>Responsive Table</a></li>" +
"                      </ul>" +
"                  </li>" +
"                  <li class='sub-menu'>" +
"                      <a href='javascript:;' >" +
"                          <i class=' fa fa-bar-chart-o'></i>" +
"                          <span>Charts</span>" +
"                      </a>" +
"                      <ul class='sub'>" +
"                          <li><a  href='morris.html'>Morris</a></li>" +
"                          <li><a  href='chartjs.html'>Chartjs</a></li>" +
"                      </ul>" +
"                  </li>" +
"              </ul>" +
"              <!-- sidebar menu end-->" +
"          </div>" +
"      </aside>" +
"      <!--sidebar end-->" +
"      " +
"      <!-- **********************************************************************************************************************************************************" +
"      MAIN CONTENT" +
"      *********************************************************************************************************************************************************** -->" +
"      <!--main content start-->" +
"      <section id='main-content'>" +
"          <section class='wrapper'>" +
"              <div class='row'>" +
"                  <div class='col-lg-9 main-chart'>" +
"                  " +
"                   <div class='row mtbox'>" +
"                     <div class='col-md-2 col-sm-2 col-md-offset-1 box0'>" +
"                       <div class='box1'>" +
"                 <span class='li_heart'></span>" +
"                 <h3>933</h3>" +
"                       </div>" +
"                 <p>933 People liked your page the last 24hs. Whoohoo!</p>" +
"                     </div>" +
"                     <div class='col-md-2 col-sm-2 box0'>" +
"                       <div class='box1'>" +
"                 <span class='li_cloud'></span>" +
"                 <h3>+48</h3>" +
"                       </div>" +
"                 <p>48 New files were added in your cloud storage.</p>" +
"                     </div>" +
"                     <div class='col-md-2 col-sm-2 box0'>" +
"                       <div class='box1'>" +
"                 <span class='li_stack'></span>" +
"                 <h3>23</h3>" +
"                       </div>" +
"                 <p>You have 23 unread messages in your inbox.</p>" +
"                     </div>" +
"                     <div class='col-md-2 col-sm-2 box0'>" +
"                       <div class='box1'>" +
"                 <span class='li_news'></span>" +
"                 <h3>+10</h3>" +
"                       </div>" +
"                 <p>More than 10 news were added in your reader.</p>" +
"                     </div>" +
"                     <div class='col-md-2 col-sm-2 box0'>" +
"                       <div class='box1'>" +
"                 <span class='li_data'></span>" +
"                 <h3>OK!</h3>" +
"                       </div>" +
"                 <p>Your server is working perfectly. Relax & enjoy.</p>" +
"                     </div>" +
"                   " +
"                   </div><!-- /row mt -->  " +
"                  " +
"                      " +
"                      <div class='row mt'>" +
"                      <!-- SERVER STATUS PANELS -->" +
"                       <div class='col-md-4 col-sm-4 mb'>" +
"                         <div class='white-panel pn donut-chart'>" +
"                           <div class='white-header'>" +
"                   <h5>SERVER LOAD</h5>" +
"                           </div>" +
"               <div class='row'>" +
"                 <div class='col-sm-6 col-xs-6 goleft'>" +
"                   <p><i class='fa fa-database'></i> 70%</p>" +
"                 </div>" +
"                           </div>" +
"               <canvas id='serverstatus01' height='120' width='120'></canvas>" +
"               <script>" +
"                 var doughnutData = [" +
"                     {" +
"                       value: 70," +
"                       color:'#68dff0'" +
"                     }," +
"                     {" +
"                       value : 30," +
"                       color : '#fdfdfd'" +
"                     }" +
"                   ];" +
"                   var myDoughnut = new Chart(document.getElementById('serverstatus01').getContext('2d')).Doughnut(doughnutData);" +
"               </script>" +
"                         </div><! --/grey-panel -->" +
"                       </div><!-- /col-md-4-->" +
"                       " +
"                       <div class='col-md-4 col-sm-4 mb'>" +
"                         <div class='white-panel pn'>" +
"                           <div class='white-header'>" +
"                   <h5>TOP PRODUCT</h5>" +
"                           </div>" +
"               <div class='row'>" +
"                 <div class='col-sm-6 col-xs-6 goleft'>" +
"                   <p><i class='fa fa-heart'></i> 122</p>" +
"                 </div>" +
"                 <div class='col-sm-6 col-xs-6'></div>" +
"                           </div>" +
"                           <div class='centered'>" +
"                   <img src='assets/img/product.png' width='120'>" +
"                           </div>" +
"                         </div>" +
"                       </div><!-- /col-md-4 -->" +
"                       " +
"           <div class='col-md-4 mb'>" +
"             <!-- WHITE PANEL - TOP USER -->" +
"             <div class='white-panel pn'>" +
"               <div class='white-header'>" +
"                 <h5>TOP USER</h5>" +
"               </div>" +
"               <p><img src='assets/img/ui-zac.jpg' class='img-circle' width='80'></p>" +
"               <p><b>Zac Snider</b></p>" +
"               <div class='row'>" +
"                 <div class='col-md-6'>" +
"                   <p class='small mt'>MEMBER SINCE</p>" +
"                   <p>2012</p>" +
"                 </div>" +
"                 <div class='col-md-6'>" +
"                   <p class='small mt'>TOTAL SPEND</p>" +
"                   <p>$ 47,60</p>" +
"                 </div>" +
"               </div>" +
"             </div>" +
"           </div><!-- /col-md-4 -->" +
"                       " +
"                    </div><!-- /row -->" +
"                    " +
"                           " +
"         <div class='row'>" +
"           <!-- TWITTER PANEL -->" +
"           <div class='col-md-4 mb'>" +
"                         <div class='darkblue-panel pn'>" +
"                           <div class='darkblue-header'>" +
"                   <h5>DROPBOX STATICS</h5>" +
"                           </div>" +
"               <canvas id='serverstatus02' height='120' width='120'></canvas>" +
"               <script>" +
"                 var doughnutData = [" +
"                     {" +
"                       value: 60," +
"                       color:'#68dff0'" +
"                     }," +
"                     {" +
"                       value : 40," +
"                       color : '#444c57'" +
"                     }" +
"                   ];" +
"                   var myDoughnut = new Chart(document.getElementById('serverstatus02').getContext('2d')).Doughnut(doughnutData);" +
"               </script>" +
"               <p>April 17, 2014</p>" +
"               <footer>" +
"                 <div class='pull-left'>" +
"                   <h5><i class='fa fa-hdd-o'></i> 17 GB</h5>" +
"                 </div>" +
"                 <div class='pull-right'>" +
"                   <h5>60% Used</h5>" +
"                 </div>" +
"               </footer>" +
"                         </div><! -- /darkblue panel -->" +
"           </div><!-- /col-md-4 -->" +
"           " +
"           " +
"           <div class='col-md-4 mb'>" +
"             <!-- INSTAGRAM PANEL -->" +
"             <div class='instagram-panel pn'>" +
"               <i class='fa fa-instagram fa-4x'></i>" +
"               <p>@THISISYOU<br/>" +
"                 5 min. ago" +
"               </p>" +
"               <p><i class='fa fa-comment'></i> 18 | <i class='fa fa-heart'></i> 49</p>" +
"             </div>" +
"           </div><!-- /col-md-4 -->" +
"           " +
"           <div class='col-md-4 col-sm-4 mb'>" +
"             <!-- REVENUE PANEL -->" +
"             <div class='darkblue-panel pn'>" +
"               <div class='darkblue-header'>" +
"                 <h5>REVENUE</h5>" +
"               </div>" +
"               <div class='chart mt'>" +
"                 <div class='sparkline' data-type='line' data-resize='true' data-height='75' data-width='90%' data-line-width='1' data-line-color='#fff' data-spot-color='#fff' data-fill-color='' data-highlight-line-color='#fff' data-spot-radius='4' data-data='[200,135,667,333,526,996,564,123,890,464,655]'></div>" +
"               </div>" +
"               <p class='mt'><b>$ 17,980</b><br/>Month Income</p>" +
"             </div>" +
"           </div><!-- /col-md-4 -->" +
"           " +
"         </div><!-- /row -->" +
"         " +
"         <div class='row mt'>" +
"                      <!--CUSTOM CHART START -->" +
"                      <div class='border-head'>" +
"                          <h3>VISITS</h3>" +
"                      </div>" +
"                      <div class='custom-bar-chart'>" +
"                          <ul class='y-axis'>" +
"                              <li><span>10.000</span></li>" +
"                              <li><span>8.000</span></li>" +
"                              <li><span>6.000</span></li>" +
"                              <li><span>4.000</span></li>" +
"                              <li><span>2.000</span></li>" +
"                              <li><span>0</span></li>" +
"                          </ul>" +
"                          <div class='bar'>" +
"                              <div class='title'>JAN</div>" +
"                              <div class='value tooltips' data-original-title='8.500' data-toggle='tooltip' data-placement='top'>85%</div>" +
"                          </div>" +
"                          <div class='bar '>" +
"                              <div class='title'>FEB</div>" +
"                              <div class='value tooltips' data-original-title='5.000' data-toggle='tooltip' data-placement='top'>50%</div>" +
"                          </div>" +
"                          <div class='bar '>" +
"                              <div class='title'>MAR</div>" +
"                              <div class='value tooltips' data-original-title='6.000' data-toggle='tooltip' data-placement='top'>60%</div>" +
"                          </div>" +
"                          <div class='bar '>" +
"                              <div class='title'>APR</div>" +
"                              <div class='value tooltips' data-original-title='4.500' data-toggle='tooltip' data-placement='top'>45%</div>" +
"                          </div>" +
"                          <div class='bar'>" +
"                              <div class='title'>MAY</div>" +
"                              <div class='value tooltips' data-original-title='3.200' data-toggle='tooltip' data-placement='top'>32%</div>" +
"                          </div>" +
"                          <div class='bar '>" +
"                              <div class='title'>JUN</div>" +
"                              <div class='value tooltips' data-original-title='6.200' data-toggle='tooltip' data-placement='top'>62%</div>" +
"                          </div>" +
"                          <div class='bar'>" +
"                              <div class='title'>JUL</div>" +
"                              <div class='value tooltips' data-original-title='7.500' data-toggle='tooltip' data-placement='top'>75%</div>" +
"                          </div>" +
"                      </div>" +
"                      <!--custom chart end-->" +
"         </div><!-- /row --> " +
"         " +
"                  </div><!-- /col-lg-9 END SECTION MIDDLE -->" +
"                  " +
"                  " +
"      <!-- **********************************************************************************************************************************************************" +
"      RIGHT SIDEBAR CONTENT" +
"      *********************************************************************************************************************************************************** -->                  " +
"                  " +
"                  <div class='col-lg-3 ds'>" +
"                    <!--COMPLETED ACTIONS DONUTS CHART-->" +
"           <h3>NOTIFICATIONS</h3>" +
"                                        " +
"                      <!-- First Action -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <span class='badge bg-theme'><i class='fa fa-clock-o'></i></span>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><muted>2 Minutes Ago</muted><br/>" +
"                            <a href='#'>James Brown</a> subscribed to your newsletter.<br/>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Second Action -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <span class='badge bg-theme'><i class='fa fa-clock-o'></i></span>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><muted>3 Hours Ago</muted><br/>" +
"                            <a href='#'>Diana Kennedy</a> purchased a year subscription.<br/>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Third Action -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <span class='badge bg-theme'><i class='fa fa-clock-o'></i></span>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><muted>7 Hours Ago</muted><br/>" +
"                            <a href='#'>Brandon Page</a> purchased a year subscription.<br/>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Fourth Action -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <span class='badge bg-theme'><i class='fa fa-clock-o'></i></span>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><muted>11 Hours Ago</muted><br/>" +
"                            <a href='#'>Mark Twain</a> commented your post.<br/>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Fifth Action -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <span class='badge bg-theme'><i class='fa fa-clock-o'></i></span>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><muted>18 Hours Ago</muted><br/>" +
"                            <a href='#'>Daniel Pratt</a> purchased a wallet in your store.<br/>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                       <!-- USERS ONLINE SECTION -->" +
"           <h3>TEAM MEMBERS</h3>" +
"                      <!-- First Member -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <img class='img-circle' src='assets/img/ui-divya.jpg' width='35px' height='35px' align=''>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><a href='#'>DIVYA MANIAN</a><br/>" +
"                            <muted>Available</muted>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Second Member -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <img class='img-circle' src='assets/img/ui-sherman.jpg' width='35px' height='35px' align=''>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><a href='#'>DJ SHERMAN</a><br/>" +
"                            <muted>I am Busy</muted>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Third Member -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <img class='img-circle' src='assets/img/ui-danro.jpg' width='35px' height='35px' align=''>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><a href='#'>DAN ROGERS</a><br/>" +
"                            <muted>Available</muted>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Fourth Member -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <img class='img-circle' src='assets/img/ui-zac.jpg' width='35px' height='35px' align=''>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><a href='#'>Zac Sniders</a><br/>" +
"                            <muted>Available</muted>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                      <!-- Fifth Member -->" +
"                      <div class='desc'>" +
"                       <div class='thumb'>" +
"                         <img class='img-circle' src='assets/img/ui-sam.jpg' width='35px' height='35px' align=''>" +
"                       </div>" +
"                       <div class='details'>" +
"                         <p><a href='#'>Marcel Newman</a><br/>" +
"                            <muted>Available</muted>" +
"                         </p>" +
"                       </div>" +
"                      </div>" +
"                        <!-- CALENDAR-->" +
"                        <div id='calendar' class='mb'>" +
"                            <div class='panel green-panel no-margin'>" +
"                                <div class='panel-body'>" +
"                                    <div id='date-popover' class='popover top' style='cursor: pointer; disadding: block; margin-left: 33%; margin-top: -50px; width: 175px;'>" +
"                                        <div class='arrow'></div>" +
"                                        <h3 class='popover-title' style='disadding: none;'></h3>" +
"                                        <div id='date-popover-content' class='popover-content'></div>" +
"                                    </div>" +
"                                    <div id='my-calendar'></div>" +
"                                </div>" +
"                            </div>" +
"                        </div><!-- / calendar -->" +
"                      " +
"                  </div><!-- /col-lg-3 -->" +
"              </div><! --/row -->" +
"          </section>" +
"      </section>" +
"      <!--main content end-->" +
"      <!--footer start-->" +
"      <footer class='site-footer'>" +
"          <div class='text-center'>" +
"              2014 - Alvarez.is" +
"              <a href='index.html#' class='go-top'>" +
"                  <i class='fa fa-angle-up'></i>" +
"              </a>" +
"          </div>";
    
sb = sb + "</footer>" +
"      <!--footer end-->" +
"  </section>" +
"    <!-- js placed at the end of the document so the pages load faster -->" +
"    <script src='assets/js/jquery.js'></script>" +
"    <script src='assets/js/jquery-1.8.3.min.js'></script>" +
"    <script src='assets/js/bootstrap.min.js'></script>" +
"    <script class='include' type='text/javascript' src='assets/js/jquery.dcjqaccordion.2.7.js'></script>" +
"    <script src='assets/js/jquery.scrollTo.min.js'></script>" +
"    <script src='assets/js/jquery.nicescroll.js' type='text/javascript'></script>" +
"    <script src='assets/js/jquery.sparkline.js'></script>" +
"    <!--common script for all pages-->" +
"    <script src='assets/js/common-scripts.js'></script>" +
"    " +
"    <script type='text/javascript' src='assets/js/gritter/js/jquery.gritter.js'></script>" +
"    <script type='text/javascript' src='assets/js/gritter-conf.js'></script>" +
"    <!--script for this page-->" +
"    <script src='assets/js/sparkline-chart.js'></script>    " +
" <script src='assets/js/zabuto_calendar.js'></script>  " +
" " +
" <script type='text/javascript'>" +
"        $(document).ready(function () {" +
"        var unique_id = $.gritter.add({" +
"            // (string | mandatory) the heading of the notification" +
"            title: 'Welcome to Rexivo!'," +
"            // (string | mandatory) the text inside the notification" +
"            text: 'Free users only can use Rexivo bot once and they will be added queue of free users which is going to be added end of Premium users. Buy Premium Now <a href='http://rexivo.cc/Premium' target='_blank' style='color:#ffd777'>From Here</a>.'," +
"            // (string | optional) the image to display on the left" +
"            image: 'assets/img/ui-sam.jpg'," +
"            // (bool | optional) if you want it to fade out on its own or just sit there" +
"            sticky: true," +
"            // (int | optional) the time you want it to be alive for before fading out" +
"            time: ''," +
"            // (string | optional) the class name you want to apply to that specific message" +
"            class_name: 'my-sticky-class'" +
"        });" +
"        return false;" +
"        });" +
" </script>" +
" " +
" <script type='application/javascript'>" +
"        $(document).ready(function () {" +
"            $('#date-popover').popover({html: true, trigger: 'manual'});" +
"            $('#date-popover').hide();" +
"            $('#date-popover').click(function (e) {" +
"                $(this).hide();" +
"            });" +
"        " +
"            $('#my-calendar').zabuto_calendar({" +
"                action: function () {" +
"                    return myDateFunction(this.id, false);" +
"                }," +
"                action_nav: function () {" +
"                    return myNavFunction(this.id);" +
"                }," +
"                ajax: {" +
"                    url: 'show_data.php?action=1'," +
"                    modal: true" +
"                }," +
"                legend: [" +
"                    {type: 'text', label: 'Special event', badge: '00'}," +
"                    {type: 'block', label: 'Regular event', }" +
"                ]" +
"            });" +
"        });" +
"        " +
"        " +
"        function myNavFunction(id) {" +
"            $('#date-popover').hide();" +
"            var nav = $('#' + id).data('navigation');" +
"            var to = $('#' + id).data('to');" +
"            console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);" +
"        }" +
"    </script>" +
"  " +
"  </body>" +
"</html>";
    

//var apex;

//apex = "<div style='text-align: center;'>"+"no comments posted.Be first!"+sb +"</div>";


return sb;
   //   return mig[2];
}



app.post('/dashboard',function(req, res){

Content.find({username:req.body.username,password:req.body.password}, function(err, contents){
if(err) return res.status(500).send({err: 'database failure'});
if (contents.length==0) 
   {

 res.send("wrong password")
   }
   else
   {


//res.send(contents[0]['type']);

var type = contents[0]['type'];
var uname = contents[0]['username'];
var name = contents[0]['name'];
var email = contents[0]['email'];


if (type=="admin") {

 res.render('./../client/public/admin.html');
}
else
res.send(create(name,uname,email,type));
    //res.redirect('/dashboard/')
   }


});

});





  // 특정 값 데이터 조회 db.userdetails.remove( { "user_id" : "testuser" } )
  app.post('/api/search', function(req, res){
    // 일치되는 값 전체 출력
    Content.find({url: req.body.url}, function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
var context = req.body.url;

 if (contents.length==0) 
   {
//     var content = new Content();
//     content.url = req.body.url;
// content.name=  " name";
//contents = "no-comments";
// content.Comment = " ";
// content.save(function(err){
//           if(err){
//               console.error(err);
               res.send(create(context));
//               return;
           }
//       });

else
 {
//  //    res.render('/api/search', context);
//   //  res.redirect('');
// }



     // res.json(contents);
    res.send(stabilizer(contents,context)); }
    });
    // 일치되는 값 1개 출력
    // Content.findOne({name: req.body.name}, function(err, content){
    //   if(err) return res.status(500).json({error: err});
    //   if(!content) return res.status(404).json({error: 'content not found'});
    //   res.json(content);
    // });
  });


  // 데이터 생성
 app.post('/api/update', function(req,res){

Content.update({message:req.body.message},{$set: {response:req.body.response}});

res.send("secca");

});

 
  app.post('/api/insert', function(req, res){ //
    var user = new Content();
    // console.log("req.body.name : ",req.body.name);
      user.name = req.body.name;
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      user.type = req.body.type;
      

      user.save(function(err){
          if(err){
              console.error(err);
              res.json({result: "error"});
              return;
          }
      });





      // res.send('input success');
    //  res.redirect('/admin');


    
//  Content.find({url: req.body.url}, function(err, contents){
//       if(err) return res.status(500).send({err: 'database failure'});
// var context = req.body.url;


    //do what you need here

 res.send("Your Comment has been successfully submitted !");

  


    // res.redirect('back');
      // res.json({result: "success"});
  });





app.post('/Start', function(req, res){ //
    var ticket = new Content();
    // console.log("req.body.name : ",req.body.name);
     // ticket.response = "req.body.response;"
      ticket.user = req.body.user;
      ticket.message = req.body.message;
  //    ticket.Comment = "req.body.Comment;"
    //  user.type = req.body.type;
      

      ticket.save(function(err){
          if(err){
              console.error(err);
              res.json({result: "error"});
              return;
          }
      });
      
res.send("suces");


      });

  // 데이터 수정
  // app.put('/api/contents/:name', function(req, res){
  //   Content.update({ name: req.params.name }, { $set: req.body }, function(err, output){
  //     if(err) res.status(500).json({ error: 'database failure' });
  //     console.log(output);
  //     if(!output.n) return res.status(404).json({ error: 'content not found' });
  //     res.json( { message: 'content updated' } );
  //   });
  // });

  // 데이터 제거
  // app.delete('/api/contents/:name', function(req, res){
  //   Content.remove({ _id: req.params.name }, function(err, output){
  //     if(err) return res.status(500).json({ error: "database failure" });
  //     res.status(204).end();
  //   });
  // });

};
