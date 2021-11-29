console.log("sup bruh");
var a = document.createElement("A");
var load_status = 0;

// chrome.devtools.network.onRequestFinished.addListener(request => {
//   request.getContent((body) => {
//     if (request.request && request.request.url) {
//       if (request.request.url.includes('app.hubspot.com')) {

//          //continue with custom code
//          var bodyObj = JSON.parse(body);//etc.
//       }
// }
// });
// });















chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  load_status = changeInfo.status;
  console.log(changeInfo.status);
  if (changeInfo.status == "complete") {
    load_status = 1;


  }

})

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    y = tab.url;
    // var a = document.createElement("A");
    a.href = y;



    // a.protocol; // http:
    // a.host; // example.com:8080
    // a.hostname; //example.com
    // a.port; // 8080 (in case of port 80 empty string returns)
    // a.pathname; // /path/to/resources
    // a.hash; // #named-anchor
    // a.search // ?param1=val1&params2=val2

  });
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  if (tab.active && change.url) {
    // var a = document.createElement("A");
    a.href = change.url;

  }
});

var onBeforeSendHeadersListener = function (details) {
  if (details.type == "script") {
    for (var i = 0; i < details.requestHeaders.length; i++) {
      if (details.requestHeaders[i].name == "User-Agent") {
        details.requestHeaders[i].value = "I'm not a bot";
      }
    }
    return {
      "requestHeaders": details.requestHeaders
    };
  }
}



var onBeforeRequestListener = function (details) {

  try {
    // window.a.b.c

    // if(load_status == 1){
    if (details.method == "POST") {
      if (a.hostname == "app.hubspot.com") {
        var urlPath = a.pathname.substring(1);
        var path = urlPath.split("/");
        if (path[0] == "contacts") {
          if (path[1] == "6481917") {
            var postedString = decodeURIComponent(String.fromCharCode.apply(null,
              new Uint8Array(details.requestBody.raw[0].bytes)));

            var json_reqbody = JSON.parse(postedString);
            var count = Object.keys(json_reqbody['objectIds']).length;


            if (count <= 1) {
              $.ajax({

                url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotEngagements/' + parseInt(path[1]) + '/' + json_reqbody['objectIds'][0],
                type: 'GET',
                // data : {
                //     'numberOfWords' : 10
                // },
                dataType: 'json',
                success: function (data) {

                },
                error: function (request, error) {

                }
              });

            }
          }

        }


      }
    }//end if post
    if (details.method == "GET") {
      if (a.hostname == "app.hubspot.com") {


        var urlPath = a.pathname.substring(1);
        var path = urlPath.split("/");
        if (path[0] == "contacts") {
          if (path[1] == "6481917") {
            // details.
            var url = new URL(details.url);
            var c = url.searchParams.get("engagementId");
            if (count <= 1) {
              // $.ajax({

              //     url : 'https://pipeline.callboxinc.com/pipeline/webhookhubspotEngagements/'+json_reqbody['objectIds'][0],
              //     type : 'GET',
              //     // data : {
              //     //     'numberOfWords' : 10
              //     // },
              //     dataType:'json',
              //     success : function(data) {              
              //     },
              //     error : function(request,error)
              //     {
              //     }
              // });

            }
          }

        }


      }


    }//end if GET


    if (details.method == "PATCH") {
      if (a.hostname == "app.hubspot.com") {
        var urlPath = a.pathname.substring(1);
        var path = urlPath.split("/");

        if (path[0] == "contacts") {
          if (path[1] == "6481917") {
            // details.

            // var url = new URL(details.url);
            // var c = url.searchParams.get("engagementId");
            var urlpatch = document.createElement("A");

            urlpatch.href = details.url;
            var urlPathPatch = urlpatch.pathname.substring(1);
            var pathPatch = urlPathPatch.split("/");

            $.ajax({

              url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotEngagements/' + parseInt(path[1]) + '/' + pathPatch[3],
              type: 'GET',
              // data : {
              //     'numberOfWords' : 10
              // },
              dataType: 'json',
              success: function (data) {
              },
              error: function (request, error) {
              }
            });


          }

        }


      }


    }//end if GET

    if (details.method == "PUT") {
      if (a.hostname == "app.hubspot.com") {
        var urlPath = a.pathname.substring(1);
        var path = urlPath.split("/");

        if (path[0] == "contacts") {
          if (path[1] == "6481917") {
            // details.

            // var url = new URL(details.url);
            // var c = url.searchParams.get("engagementId");


            var postedString = decodeURIComponent(String.fromCharCode.apply(null,
              new Uint8Array(details.requestBody.raw[0].bytes)));
            var json_reqbody = JSON.parse(postedString);


            var urlpatch = document.createElement("A");

            urlpatch.href = details.url;
            var urlPathPatch = urlpatch.pathname.substring(1);
            var pathPatch = urlPathPatch.split("/");
            var engagementId = 0;

            try {



              if (json_reqbody[0]['fromObjectId'] > 0) {
                engagementId = json_reqbody[0]['fromObjectId'];
                $.ajax({

                  url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotEngagements/' + parseInt(path[1]) + '/' + engagementId,
                  type: 'GET',
                  // data : {
                  //     'numberOfWords' : 10
                  // },
                  dataType: 'json',
                  success: function (data) {
                  },
                  error: function (request, error) {
                  }
                });

              }
            } catch (e) {
              $.ajax({

                url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotEngagements/' + parseInt(path[1]) + '/' + pathPatch[3],
                type: 'GET',
                // data : {
                //     'numberOfWords' : 10
                // },
                dataType: 'json',
                success: function (data) {
                },
                error: function (request, error) {
                }
              });
            }






          }

        }


      }


    }//end if PUT





    // if (details.type == "image") {
    //     return {
    //         "redirectUrl": "https://img.icons8.com/ios/50/000000/hitbox.png"
    //     };
    // }
    // }
  } catch (e) {
  }
}


var OnCompletedOptions = function (details) {
  // all images will now be loaded from this location instead
  // CAREFUL! CROSS ORIGIN REQUESTS WILL NOT BE BLOCKED WITH CHROME EXTENSIONS

}
var onEngagementsBatch = function (details) {
  if (details.method == "GET") {
    if (a.hostname == "app.hubspot.com") {
      var urlPath = a.pathname.substring(1);
      var path = urlPath.split("/");

      if (path[0] == "contacts") {
        if (path[1] == "6481917") {
          // details.
          // var url = new URL(details.url);
          // var c = url.searchParams.get("engagementId");
          var url = new URL(details.url);
          var c = url.searchParams.get("engagementId");

          if (c > 0) {
            $.ajax({

              url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotEngagements/' + parseInt(path[1]) + '/' + c,
              type: 'GET',
              // data : {
              //     'numberOfWords' : 10
              // },
              dataType: 'json',
              success: function (data) {
              },
              error: function (request, error) {
              }
            });
          }


          // var json_reqbody = JSON.parse(postedString);



        }

      }


    }


  }//end if PUT


}

// var onCreateDeal = function (details) {
//   if (a.hostname == "app.hubspot.com") {
//     var urlPath = a.pathname.substring(1);
//     var path = urlPath.split("/");

//     if (path[0] == "contacts") {
//       if (path[1] == "6481917") {
//         if (details.method == "POST") {
//           var postedString = decodeURIComponent(String.fromCharCode.apply(null,
//             new Uint8Array(details.requestBody.raw[0].bytes)));
//           var json_reqbody = JSON.parse(postedString);

//               // if (data[0]['objectId'] > 0) {
//               //   $.ajax({

//               //     url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotDeal/' + path[1] + '/' + data[0]['objectId']+"/0",
//               //     type: 'GET',
//               //     // data : {
//               //     //     'numberOfWords' : 10
//               //     // },
//               //     dataType: 'json',
//               //     success: function (data) {
//               //     },
//               //     error: function (request, error) {
//               //     }
//               //   });
//               // } else {
//               // }


//         }
//       }
//     }
//   }

// }

var onUpdateDeal = function (details) {


  if (a.hostname == "app.hubspot.com") {
    var urlPath = a.pathname.substring(1);
    var path = urlPath.split("/");

    if (path[0] == "contacts") {
      if (path[1] == "6481917") {

        if (details.method == "POST") {
          try {


            var postedString = decodeURIComponent(String.fromCharCode.apply(null,
              new Uint8Array(details.requestBody.raw[0].bytes)));
            var json_reqbody = JSON.parse(postedString);
            var dealId = 0;
            var contactId = 0;
            if (json_reqbody[0]['operationName'] == "UpdateProperties") {

              if (json_reqbody[0]['variables']['propertyUpdatesInput']['objectId'] > 0) {
                dealId = json_reqbody[0]['variables']['propertyUpdatesInput']['objectId'];
              }

            }
            else if (json_reqbody[0]['operationName'] == "DeleteCrmObjectAssociationBySpec") {

              if (json_reqbody[0]['variables']['removeAssociationInput']['fromObjectTypeAndId']['objectId'] > 0) {
                dealId = json_reqbody[0]['variables']['removeAssociationInput']['fromObjectTypeAndId']['objectId'];
                contactId = json_reqbody[0]['variables']['removeAssociationInput']['toObjectTypeAndId']['objectId']
              }

            }
            else if (json_reqbody[0]['operationName'] == "fetchCard") {

              if (json_reqbody[0]['variables']['subjectId'] > 0) {
                dealId = json_reqbody[0]['variables']['subjectId'];
              }
            }
            else if (json_reqbody[0]['operationName'] == "FetchPipelinesWithStages") {

              if (json_reqbody[0]['variables']['subjectId'] > 0) {
                dealId = json_reqbody[0]['variables']['subjectId'];
              }
            }
            else {
            }

            if (dealId > 0) {
              $.ajax({

                url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotDeal/' + path[1] + '/' + dealId + '/' + contactId,
                type: 'GET',
                // data : {
                //     'numberOfWords' : 10
                // },
                dataType: 'json',
                success: function (data) {
                },
                error: function (request, error) {

                }
              });
            }
            contactId = 0;

          } catch (e) {
          }

        }
      }
    }
  }


}

var onAddDealAssociate = function (details) {


  if (a.hostname == "app.hubspot.com") {
    var urlPath = a.pathname.substring(1);
    var path = urlPath.split("/");

    if (path[0] == "contacts") {
      if (path[1] == "6481917") {
        if (details.method == "PUT") {

          try {

            var postedString = decodeURIComponent(String.fromCharCode.apply(null,
              new Uint8Array(details.requestBody.raw[0].bytes)));
            var json_reqbody = JSON.parse(postedString);
            var dealId = 0;// if(json_reqbody[0]['variables']['subjectId'] > 0){
            var contactId = 0;
            if (json_reqbody[0]['fromObjectId'] > 0) {
              dealId = json_reqbody[0]['fromObjectId'];
              // contactId = json_reqbody[0]['toObjectId'];
            }
            // if(json_reqbody[0]['variables']['subjectId'] > 0){
            //   dealId = json_reqbody[0]['variables']['subjectId'];
            // }else{
            //   if(json_reqbody[0]['variables']['removeAssociationInput']['fromObjectTypeAndId']['objectId'] > 0){
            //     dealId = json_reqbody[0]['variables']['removeAssociationInput']['fromObjectTypeAndId']['objectId'];
            //   }
            // }


            if (dealId > 0) {
              $.ajax({

                url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotDeal/' + path[1] + '/' + dealId + '/' + contactId,
                type: 'GET',
                // data : {
                //     'numberOfWords' : 10
                // },
                dataType: 'json',
                success: function (data) {
                },
                error: function (request, error) {
                }
              });
            } else {
            }
          } catch (e) {
          }

        }
      }
    }
  }


}
var onUpdateDealProperties = function (details) {

  if (details.method == "PUT") {
    if (a.hostname == "app.hubspot.com") {
      var urlPath = a.pathname.substring(1);
      var path = urlPath.split("/");

      if (path[0] == "contacts") {
        if (path[1] == "6481917") {

          try {

            var postedString = decodeURIComponent(String.fromCharCode.apply(null,
              new Uint8Array(details.requestBody.raw[0].bytes)));
            var json_reqbody = JSON.parse(postedString);


            var dealId = 0;// if(json_reqbody[0]['variables']['subjectId'] > 0){
            var contactId = 0;

            if (json_reqbody['dealId'] > 0) {
              dealId = json_reqbody['dealId'];
            }
            if (dealId > 0) {
              $.ajax({

                url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotDeal/' + path[1] + '/' + dealId + '/' + contactId,
                type: 'GET',
                // data : {
                //     'numberOfWords' : 10
                // },
                dataType: 'json',
                success: function (data) {
                },
                error: function (request, error) {
                }
              });
            } else {
            }
          } catch (e) {
          }
        }
      }
    }
  }

}
var onLoadHubspot = function (details) {
  var removed_domain = details.url.split('?')[1];
  var url_params = removed_domain.split("&");

  var term = 'engagementId='; // search term (regex pattern)
  var search = new RegExp(term, 'i'); // prepare a regex object
  let b = url_params.filter(item => search.test(item));

  if (details.method == "GET") {
    if (a.hostname == "app.hubspot.com") {
      var urlPath = a.pathname.substring(1);
      var path = urlPath.split("/");

      if (path[0] == "contacts") {
        if (path[1] == "6481917") {

          Object.keys(b).forEach(function (key) {


            var engagementId = b[key].replace("engagementId=", "");

            if (engagementId > 0) {
              $.ajax({

                url: 'https://pipeline.callboxinc.com/pipeline/webhookhubspotEngagements/' + parseInt(path[1]) + '/' + engagementId,
                type: 'GET',
                // data : {
                //     'numberOfWords' : 10
                // },
                dataType: 'json',
                success: function (data) {
                },
                error: function (request, error) {
                }
              });
            }

          });
          // var json_reqbody = JSON.parse(postedString);




        }

      }


    }


  }//end if PUT








}


var onDeleteFromHubspot = function (details) {
  if (details.method == "DELETE") {
    if (a.hostname == "app.hubspot.com") {
      var urlPath = a.pathname.substring(1);
      var path = urlPath.split("/");

      if (path[0] == "contacts") {
        if (path[1] == "6481917") {

          var urlPathDelete = details.url;
          var pathDelete = urlPathDelete.split("/");

          var pathDeleteId = pathDelete[pathDelete.length - 1].split("?");
          if (parseInt(pathDeleteId[0]) > 0) {
            $.ajax({

              url: 'https://pipeline.callboxinc.com/pipeline/hubspotDelete/' + parseInt(path[1]) + '/' + parseInt(pathDeleteId[0]) + "/engagements",
              type: 'GET',
              // data : {
              //     'numberOfWords' : 10
              // },
              dataType: 'json',
              success: function (data) {
              },
              error: function (request, error) {
              }
            });
          }
        }

      }


    }


  }//end if DELETE
}

var onDeleteFromHubspotDeal = function (details) {
  if (details.method == "DELETE") {
    if (a.hostname == "app.hubspot.com") {
      var urlPath = a.pathname.substring(1);
      var path = urlPath.split("/");

      if (path[0] == "contacts") {
        if (path[1] == "6481917") {



          var urlPathDelete = details.url;
          var pathDelete = urlPathDelete.split("/");

          var pathDeleteId = pathDelete[pathDelete.length - 1].split("?");
          if (parseInt(pathDeleteId[0]) > 0) {
            $.ajax({

              url: 'https://pipeline.callboxinc.com/pipeline/hubspotDelete/' + parseInt(path[1]) + '/' + parseInt(pathDeleteId[0]) + "/deals",
              type: 'GET',
              // data : {
              //     'numberOfWords' : 10
              // },
              dataType: 'json',
              success: function (data) {
              },
              error: function (request, error) {
              }
            });
          }
        }


      }


    }//end if DELETE
  }
}
















