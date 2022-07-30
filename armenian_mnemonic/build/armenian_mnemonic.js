if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_armenian_mnemonic());
}
function Keyboard_armenian_mnemonic()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_armenian_mnemonic";
  this.KN="Armenian Mnemonic";
  this.KMINVER="14.0";
  this.KV={F:' 1em "Tahoma"',K102:0};
  this.KV.KLS={
    "default": ["՝","1","2","3","4","5","6","7","8","9","0","-","=","","","","ք","ւ","ե","ր","թ","յ","ո","ի","օ","փ","[","]","\\","","","","ա","ս","դ","ֆ","գ","հ","ջ","կ","լ",";","'","","","","","","","զ","ը","ց","վ","բ","ն","մ",",",".","/","","","","","",""],
    "shift": ["՜","!","@","#","$","%","^","&","*","(",")","_","+","","","","Ք","Ւ","Ե","Ր","Թ","Յ","Ո","Ի","Օ","Փ","{","}","|","","","","Ա","Ս","Դ","Ֆ","Գ","Հ","Ջ","Կ","Լ","։","\"","","","","","","","Զ","Ը","Ց","Վ","Բ","Ն","Մ","<",">","՞","","","","","",""],
    "rightalt": ["`","₁","₂","₃","₄","₅","₆","₇","₈","₉","₀","–","≈","","","","","","€","₽","‱","¥","","₹","º","¶","“","”","","","","","ª","§","֏","£","₴","֎","","","₾","…","՛","","","","","","","","×","℃","√","","№","‰","՚","·","÷","","","","","",""],
    "rightalt-shift": ["~","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","⁰","—","","","","","","","","®","™","","","","°","⁺","„","“","","","","","","℠","","₣","","֍","","","₤",":","","","","","","","","","¤","©","‣","•","⁃","⁻","«","»","?","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=1;
  this.KH='';
  this.KM=0;
  this.KBVER="1.1.7";
  this.KMBM=modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.NO_CAPS /* 0x0318 */;
  this.KVKD="U_0582 U_0574 U_0576 U_0565 U_056B U_056D";
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "width": "105",
                "id": "U_055D",
                "text": "\u055D",
                "sk": [
                  {
                    "id": "U_055C",
                    "text": "\u055C"
                  }
                ]
              },
              {
                "width": "105",
                "id": "U_0587",
                "text": "\u0587"
              },
              {
                "width": "105",
                "id": "U_0567",
                "text": "\u0567"
              },
              {
                "width": "105",
                "id": "U_057C",
                "text": "\u057C"
              },
              {
                "width": "105",
                "id": "U_057F",
                "text": "\u057F"
              },
              {
                "width": "105",
                "id": "U_002D",
                "text": "-",
                "sk": [
                  {
                    "id": "U_2013",
                    "text": "\u2013"
                  },
                  {
                    "id": "U_2014",
                    "text": "\u2014"
                  },
                  {
                    "id": "U_005F",
                    "text": "_"
                  },
                  {
                    "id": "U_058A",
                    "text": "\u058A"
                  },
                  {
                    "id": "U_055F",
                    "text": "\u055F"
                  }
                ]
              },
              {
                "width": "105",
                "id": "U_0572",
                "text": "\u0572"
              },
              {
                "width": "105",
                "id": "U_0573",
                "text": "\u0573"
              },
              {
                "width": "105",
                "id": "U_056D",
                "text": "\u056D"
              },
              {
                "width": "105",
                "id": "U_057A",
                "text": "\u057A"
              },
              {
                "width": "105",
                "id": "U_055E",
                "text": "\u055E",
                "sk": [
                  {
                    "id": "U_002F",
                    "text": "/"
                  },
                  {
                    "id": "U_055B",
                    "text": "\u055B"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "width": "105",
                "id": "U_0584",
                "text": "\u0584"
              },
              {
                "width": "105",
                "id": "U_0582",
                "text": "\u0582"
              },
              {
                "width": "105",
                "id": "U_0565",
                "text": "\u0565"
              },
              {
                "width": "105",
                "id": "U_0580",
                "text": "\u0580"
              },
              {
                "width": "105",
                "id": "U_0569",
                "text": "\u0569"
              },
              {
                "width": "105",
                "id": "U_056E",
                "text": "\u056E"
              },
              {
                "width": "105",
                "id": "U_0575",
                "text": "\u0575"
              },
              {
                "width": "105",
                "id": "U_0578",
                "text": "\u0578"
              },
              {
                "width": "105",
                "id": "U_056B",
                "text": "\u056B"
              },
              {
                "width": "105",
                "id": "U_0585",
                "text": "\u0585"
              },
              {
                "width": "105",
                "id": "U_0583",
                "text": "\u0583"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "width": "105",
                "id": "U_0561",
                "pad": "15",
                "text": "\u0561"
              },
              {
                "width": "105",
                "id": "U_057D",
                "text": "\u057D"
              },
              {
                "width": "105",
                "id": "U_0577",
                "text": "\u0577"
              },
              {
                "width": "105",
                "id": "U_0564",
                "text": "\u0564"
              },
              {
                "width": "105",
                "id": "U_0571",
                "text": "\u0571"
              },
              {
                "width": "105",
                "id": "U_0586",
                "text": "\u0586"
              },
              {
                "width": "105",
                "id": "U_0563",
                "text": "\u0563"
              },
              {
                "width": "105",
                "id": "U_0570",
                "text": "\u0570"
              },
              {
                "width": "105",
                "id": "U_057B",
                "text": "\u057B"
              },
              {
                "width": "105",
                "id": "U_056F",
                "text": "\u056F"
              },
              {
                "width": "105",
                "id": "U_056C",
                "text": "\u056C"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "shift",
                "width": "105",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "width": "105",
                "id": "U_0566",
                "text": "\u0566"
              },
              {
                "width": "105",
                "id": "U_056A",
                "text": "\u056A"
              },
              {
                "width": "105",
                "id": "U_0568",
                "text": "\u0568"
              },
              {
                "width": "105",
                "id": "U_0581",
                "text": "\u0581"
              },
              {
                "width": "105",
                "id": "U_0579",
                "text": "\u0579"
              },
              {
                "width": "105",
                "id": "U_057E",
                "text": "\u057E"
              },
              {
                "width": "105",
                "id": "U_0562",
                "text": "\u0562"
              },
              {
                "width": "105",
                "id": "U_0576",
                "text": "\u0576"
              },
              {
                "width": "105",
                "id": "U_0574",
                "text": "\u0574"
              },
              {
                "width": "105",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "1#\u058F"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "105",
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_002E",
                    "text": "."
                  },
                  {
                    "id": "U_055A",
                    "text": "\u055A"
                  },
                  {
                    "id": "U_0028",
                    "text": "("
                  },
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  }
                ]
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "width": "105",
                "id": "U_0589",
                "text": "\u0589",
                "sk": [
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0029",
                    "text": ")"
                  },
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_201D",
                    "text": "\u201D"
                  }
                ]
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "width": "105",
                "id": "U_055D",
                "text": "\u055D",
                "sk": [
                  {
                    "id": "U_055C",
                    "text": "\u055C"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0587",
                "text": "\u0587"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0537",
                "text": "\u0537"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_054C",
                "text": "\u054C"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_054F",
                "text": "\u054F"
              },
              {
                "width": "105",
                "id": "U_002D",
                "text": "-",
                "sk": [
                  {
                    "id": "U_2013",
                    "text": "\u2013"
                  },
                  {
                    "id": "U_2014",
                    "text": "\u2014"
                  },
                  {
                    "id": "U_005F",
                    "text": "_"
                  },
                  {
                    "id": "U_058A",
                    "text": "\u058A"
                  },
                  {
                    "id": "U_055F",
                    "text": "\u055F"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0542",
                "text": "\u0542"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0543",
                "text": "\u0543"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_053D",
                "text": "\u053D"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_054A",
                "text": "\u054A"
              },
              {
                "width": "105",
                "id": "U_055E",
                "text": "\u055E",
                "sk": [
                  {
                    "id": "U_002F",
                    "text": "/"
                  },
                  {
                    "id": "U_055B",
                    "text": "\u055B"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0554",
                "text": "\u0554"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0552",
                "text": "\u0552"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0535",
                "text": "\u0535"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0550",
                "text": "\u0550"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0539",
                "text": "\u0539"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_053E",
                "text": "\u053E"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0545",
                "text": "\u0545"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0548",
                "text": "\u0548"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_053B",
                "text": "\u053B"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0555",
                "text": "\u0555"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0553",
                "text": "\u0553"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0531",
                "pad": "15",
                "text": "\u0531"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_054D",
                "text": "\u054D"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0547",
                "text": "\u0547"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0534",
                "text": "\u0534"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0541",
                "text": "\u0541"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0556",
                "text": "\u0556"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0533",
                "text": "\u0533"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0540",
                "text": "\u0540"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_054B",
                "text": "\u054B"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_053F",
                "text": "\u053F"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_053C",
                "text": "\u053C"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "caps",
                "width": "105",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0536",
                "text": "\u0536"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_053A",
                "text": "\u053A"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0538",
                "text": "\u0538"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0551",
                "text": "\u0551"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0549",
                "text": "\u0549"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_054E",
                "text": "\u054E"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0532",
                "text": "\u0532"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0546",
                "text": "\u0546"
              },
              {
                "nextlayer": "default",
                "width": "105",
                "id": "U_0544",
                "text": "\u0544"
              },
              {
                "width": "105",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "1#\u058F"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "105",
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_002E",
                    "text": "."
                  },
                  {
                    "id": "U_055A",
                    "text": "\u055A"
                  },
                  {
                    "id": "U_0028",
                    "text": "("
                  },
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  }
                ]
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "width": "105",
                "id": "U_0589",
                "text": "\u0589",
                "sk": [
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0029",
                    "text": ")"
                  },
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_201D",
                    "text": "\u201D"
                  }
                ]
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "sk": [
                  {
                    "id": "U_0531",
                    "text": "\u0531"
                  },
                  {
                    "id": "U_0561",
                    "text": "\u0561"
                  },
                  {
                    "id": "U_00B9",
                    "text": "\u00B9"
                  },
                  {
                    "id": "U_2081",
                    "text": "\u2081"
                  },
                  {
                    "id": "U_00BD",
                    "text": "\u00BD"
                  },
                  {
                    "id": "U_2153",
                    "text": "\u2153"
                  },
                  {
                    "id": "U_00BC",
                    "text": "\u00BC"
                  },
                  {
                    "id": "U_2155",
                    "text": "\u2155"
                  },
                  {
                    "id": "U_2159",
                    "text": "\u2159"
                  },
                  {
                    "id": "U_2150",
                    "text": "\u2150"
                  },
                  {
                    "id": "U_215B",
                    "text": "\u215B"
                  },
                  {
                    "id": "U_2151",
                    "text": "\u2151"
                  },
                  {
                    "id": "U_2152",
                    "text": "\u2152"
                  }
                ]
              },
              {
                "id": "K_2",
                "text": "2",
                "sk": [
                  {
                    "id": "U_0532",
                    "text": "\u0532"
                  },
                  {
                    "id": "U_0562",
                    "text": "\u0562"
                  },
                  {
                    "id": "U_00B2",
                    "text": "\u00B2"
                  },
                  {
                    "id": "U_2082",
                    "text": "\u2082"
                  },
                  {
                    "id": "U_2154",
                    "text": "\u2154"
                  },
                  {
                    "id": "U_2156",
                    "text": "\u2156"
                  }
                ]
              },
              {
                "id": "K_3",
                "text": "3",
                "sk": [
                  {
                    "id": "U_0533",
                    "text": "\u0533"
                  },
                  {
                    "id": "U_0563",
                    "text": "\u0563"
                  },
                  {
                    "id": "U_00B3",
                    "text": "\u00B3"
                  },
                  {
                    "id": "U_2083",
                    "text": "\u2083"
                  },
                  {
                    "id": "U_00BE",
                    "text": "\u00BE"
                  },
                  {
                    "id": "U_2157",
                    "text": "\u2157"
                  },
                  {
                    "id": "U_215C",
                    "text": "\u215C"
                  }
                ]
              },
              {
                "id": "K_4",
                "text": "4",
                "sk": [
                  {
                    "id": "U_0534",
                    "text": "\u0534"
                  },
                  {
                    "id": "U_0564",
                    "text": "\u0564"
                  },
                  {
                    "id": "U_2074",
                    "text": "\u2074"
                  },
                  {
                    "id": "U_2084",
                    "text": "\u2084"
                  },
                  {
                    "id": "U_2158",
                    "text": "\u2158"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "5",
                "sk": [
                  {
                    "id": "U_0535",
                    "text": "\u0535"
                  },
                  {
                    "id": "U_0565",
                    "text": "\u0565"
                  },
                  {
                    "id": "U_2075",
                    "text": "\u2075"
                  },
                  {
                    "id": "U_2085",
                    "text": "\u2085"
                  },
                  {
                    "id": "U_215A",
                    "text": "\u215A"
                  },
                  {
                    "id": "U_215D",
                    "text": "\u215D"
                  }
                ]
              },
              {
                "id": "K_6",
                "text": "6",
                "sk": [
                  {
                    "id": "U_0536",
                    "text": "\u0536"
                  },
                  {
                    "id": "U_0566",
                    "text": "\u0566"
                  },
                  {
                    "id": "U_2076",
                    "text": "\u2076"
                  },
                  {
                    "id": "U_2086",
                    "text": "\u2086"
                  }
                ]
              },
              {
                "id": "K_7",
                "text": "7",
                "sk": [
                  {
                    "id": "U_0537",
                    "text": "\u0537"
                  },
                  {
                    "id": "U_0567",
                    "text": "\u0567"
                  },
                  {
                    "id": "U_2077",
                    "text": "\u2077"
                  },
                  {
                    "id": "U_2087",
                    "text": "\u2087"
                  },
                  {
                    "id": "U_215E",
                    "text": "\u215E"
                  }
                ]
              },
              {
                "id": "K_8",
                "text": "8",
                "sk": [
                  {
                    "id": "U_0538",
                    "text": "\u0538"
                  },
                  {
                    "id": "U_0568",
                    "text": "\u0568"
                  },
                  {
                    "id": "U_2078",
                    "text": "\u2078"
                  },
                  {
                    "id": "U_2088",
                    "text": "\u2088"
                  },
                  {
                    "id": "U_221E",
                    "text": "\u221E"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "9",
                "sk": [
                  {
                    "id": "U_0539",
                    "text": "\u0539"
                  },
                  {
                    "id": "U_0569",
                    "text": "\u0569"
                  },
                  {
                    "id": "U_2079",
                    "text": "\u2079"
                  },
                  {
                    "id": "U_2089",
                    "text": "\u2089"
                  }
                ]
              },
              {
                "id": "K_0",
                "text": "0",
                "sk": [
                  {
                    "id": "U_053A",
                    "text": "\u053A"
                  },
                  {
                    "id": "U_056A",
                    "text": "\u056A"
                  },
                  {
                    "id": "U_2070",
                    "text": "\u2070"
                  },
                  {
                    "id": "U_2080",
                    "text": "\u2080"
                  },
                  {
                    "id": "U_2205",
                    "text": "\u2205"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0021",
                "pad": "15",
                "text": "!",
                "sk": [
                  {
                    "id": "U_00A1",
                    "text": "\u00A1"
                  }
                ]
              },
              {
                "id": "U_0040",
                "text": "@"
              },
              {
                "id": "U_0023",
                "text": "#",
                "sk": [
                  {
                    "id": "U_2116",
                    "text": "\u2116"
                  }
                ]
              },
              {
                "id": "U_0024",
                "text": "$"
              },
              {
                "id": "U_0025",
                "text": "%",
                "sk": [
                  {
                    "id": "U_2030",
                    "text": "\u2030"
                  },
                  {
                    "id": "U_2031",
                    "text": "\u2031"
                  }
                ]
              },
              {
                "id": "U_005E",
                "text": "^",
                "sk": [
                  {
                    "id": "U_2071",
                    "text": "\u2071"
                  },
                  {
                    "id": "U_207F",
                    "text": "\u207F"
                  }
                ]
              },
              {
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "U_002A",
                "text": "*",
                "sk": [
                  {
                    "id": "U_2217",
                    "text": "\u2217"
                  },
                  {
                    "id": "U_2218",
                    "text": "\u2218"
                  },
                  {
                    "id": "U_22C6",
                    "text": "\u22C6"
                  },
                  {
                    "id": "U_2605",
                    "text": "\u2605"
                  },
                  {
                    "id": "U_2606",
                    "text": "\u2606"
                  }
                ]
              },
              {
                "id": "U_0028",
                "text": "(",
                "sk": [
                  {
                    "id": "U_005B",
                    "text": "["
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  },
                  {
                    "id": "U_2329",
                    "text": "\u2329"
                  },
                  {
                    "id": "U_300C",
                    "text": "\u300C"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_0029",
                "text": ")",
                "sk": [
                  {
                    "id": "U_005D",
                    "text": "]"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  },
                  {
                    "id": "U_232A",
                    "text": "\u232A"
                  },
                  {
                    "id": "U_300D",
                    "text": "\u300D"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "width": "100",
                "id": "U_0060",
                "text": "`",
                "sk": [
                  {
                    "id": "U_007E",
                    "text": "~"
                  }
                ]
              },
              {
                "id": "U_00A7",
                "text": "\u00A7",
                "sk": [
                  {
                    "id": "U_00B6",
                    "text": "\u00B6"
                  }
                ]
              },
              {
                "id": "U_2120",
                "text": "\u2120",
                "sk": [
                  {
                    "id": "U_2122",
                    "text": "\u2122"
                  }
                ]
              },
              {
                "id": "U_058F",
                "text": "\u058F"
              },
              {
                "width": "100",
                "id": "U_2105",
                "text": "\u2105",
                "sk": [
                  {
                    "id": "U_2101",
                    "text": "\u2101"
                  },
                  {
                    "id": "U_214D",
                    "text": "\u214D"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_21E7",
                "text": "\u21E7",
                "sk": [
                  {
                    "id": "U_2B00",
                    "text": "\u2B00"
                  },
                  {
                    "id": "U_21E8",
                    "text": "\u21E8"
                  },
                  {
                    "id": "U_2B02",
                    "text": "\u2B02"
                  },
                  {
                    "id": "U_21E9",
                    "text": "\u21E9"
                  },
                  {
                    "id": "U_2B03",
                    "text": "\u2B03"
                  },
                  {
                    "id": "U_21E6",
                    "text": "\u21E6"
                  },
                  {
                    "id": "U_2B01",
                    "text": "\u2B01"
                  }
                ]
              },
              {
                "id": "U_00B0",
                "text": "\u00B0",
                "sk": [
                  {
                    "id": "U_2103",
                    "text": "\u2103"
                  },
                  {
                    "id": "U_2109",
                    "text": "\u2109"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_2032",
                "text": "\u2032",
                "sk": [
                  {
                    "id": "U_2033",
                    "text": "\u2033"
                  },
                  {
                    "id": "U_2034",
                    "text": "\u2034"
                  }
                ]
              },
              {
                "id": "U_2012",
                "text": "\u2012",
                "sk": [
                  {
                    "id": "U_2015",
                    "text": "\u2015"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_0027",
                "text": "'",
                "sk": [
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric2",
                "width": "100",
                "id": "T_NUM1",
                "pad": "15",
                "sp": "1",
                "text": "1/2"
              },
              {
                "width": "100",
                "id": "U_00AA",
                "text": "\u00AA",
                "sk": [
                  {
                    "id": "U_00BA",
                    "text": "\u00BA"
                  }
                ]
              },
              {
                "id": "U_00A9",
                "text": "\u00A9",
                "sk": [
                  {
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_00A4",
                "text": "\u00A4",
                "sk": [
                  {
                    "id": "U_20AC",
                    "text": "\u20AC"
                  },
                  {
                    "id": "U_20BD",
                    "text": "\u20BD"
                  },
                  {
                    "id": "U_00A3",
                    "text": "\u00A3"
                  },
                  {
                    "id": "U_20B4",
                    "text": "\u20B4"
                  },
                  {
                    "id": "U_20BE",
                    "text": "\u20BE"
                  },
                  {
                    "id": "U_00A5",
                    "text": "\u00A5"
                  },
                  {
                    "id": "U_20B9",
                    "text": "\u20B9"
                  },
                  {
                    "id": "U_20A3",
                    "text": "\u20A3"
                  },
                  {
                    "id": "U_20A4",
                    "text": "\u20A4"
                  },
                  {
                    "id": "U_20B3",
                    "text": "\u20B3"
                  },
                  {
                    "id": "U_20B1",
                    "text": "\u20B1"
                  },
                  {
                    "id": "U_20A9",
                    "text": "\u20A9"
                  },
                  {
                    "id": "U_20BF",
                    "text": "\u20BF"
                  }
                ]
              },
              {
                "id": "U_2640",
                "text": "\u2640",
                "sk": [
                  {
                    "id": "U_2642",
                    "text": "\u2642"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_2672",
                "pad": "15",
                "text": "\u2672",
                "sk": [
                  {
                    "id": "U_2318",
                    "text": "\u2318"
                  }
                ]
              },
              {
                "id": "U_2022",
                "text": "\u2022",
                "sk": [
                  {
                    "id": "U_2023",
                    "text": "\u2023"
                  },
                  {
                    "id": "U_2043",
                    "text": "\u2043"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_2713",
                "text": "\u2713",
                "sk": [
                  {
                    "id": "U_274C",
                    "text": "\u274C"
                  }
                ]
              },
              {
                "id": "U_002F",
                "text": "/",
                "sk": [
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_007C",
                    "text": "|"
                  }
                ]
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "pad": "15",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "default",
                "width": "150",
                "id": "K_LOWER",
                "sp": "1",
                "text": "\u0561\u0562\u0563"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "100",
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_002E",
                    "text": "."
                  },
                  {
                    "id": "U_055A",
                    "text": "\u055A"
                  },
                  {
                    "id": "U_0028",
                    "text": "("
                  },
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_201E",
                    "text": "\u201E"
                  }
                ]
              },
              {
                "width": "440",
                "id": "K_SPACE"
              },
              {
                "width": "100",
                "id": "U_0589",
                "text": "\u0589",
                "sk": [
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0029",
                    "text": ")"
                  },
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  }
                ]
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric2",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "sk": [
                  {
                    "id": "U_0041",
                    "text": "A"
                  },
                  {
                    "id": "U_0061",
                    "text": "a"
                  },
                  {
                    "id": "U_00B9",
                    "text": "\u00B9"
                  },
                  {
                    "id": "U_2081",
                    "text": "\u2081"
                  },
                  {
                    "id": "U_00BD",
                    "text": "\u00BD"
                  },
                  {
                    "id": "U_2153",
                    "text": "\u2153"
                  },
                  {
                    "id": "U_00BC",
                    "text": "\u00BC"
                  },
                  {
                    "id": "U_2155",
                    "text": "\u2155"
                  },
                  {
                    "id": "U_2159",
                    "text": "\u2159"
                  },
                  {
                    "id": "U_2150",
                    "text": "\u2150"
                  },
                  {
                    "id": "U_215B",
                    "text": "\u215B"
                  },
                  {
                    "id": "U_2151",
                    "text": "\u2151"
                  },
                  {
                    "id": "U_2152",
                    "text": "\u2152"
                  }
                ]
              },
              {
                "id": "K_2",
                "text": "2",
                "sk": [
                  {
                    "id": "U_0042",
                    "text": "B"
                  },
                  {
                    "id": "U_0062",
                    "text": "b"
                  },
                  {
                    "id": "U_00B2",
                    "text": "\u00B2"
                  },
                  {
                    "id": "U_2082",
                    "text": "\u2082"
                  },
                  {
                    "id": "U_2154",
                    "text": "\u2154"
                  },
                  {
                    "id": "U_2156",
                    "text": "\u2156"
                  }
                ]
              },
              {
                "id": "K_3",
                "text": "3",
                "sk": [
                  {
                    "id": "U_0043",
                    "text": "C"
                  },
                  {
                    "id": "U_0063",
                    "text": "c"
                  },
                  {
                    "id": "U_00B3",
                    "text": "\u00B3"
                  },
                  {
                    "id": "U_2083",
                    "text": "\u2083"
                  },
                  {
                    "id": "U_00BE",
                    "text": "\u00BE"
                  },
                  {
                    "id": "U_2157",
                    "text": "\u2157"
                  },
                  {
                    "id": "U_215C",
                    "text": "\u215C"
                  }
                ]
              },
              {
                "id": "K_4",
                "text": "4",
                "sk": [
                  {
                    "id": "U_0044",
                    "text": "D"
                  },
                  {
                    "id": "U_0064",
                    "text": "d"
                  },
                  {
                    "id": "U_2074",
                    "text": "\u2074"
                  },
                  {
                    "id": "U_2084",
                    "text": "\u2084"
                  },
                  {
                    "id": "U_2158",
                    "text": "\u2158"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "5",
                "sk": [
                  {
                    "id": "U_0045",
                    "text": "E"
                  },
                  {
                    "id": "U_0065",
                    "text": "e"
                  },
                  {
                    "id": "U_2075",
                    "text": "\u2075"
                  },
                  {
                    "id": "U_2085",
                    "text": "\u2085"
                  },
                  {
                    "id": "U_215A",
                    "text": "\u215A"
                  },
                  {
                    "id": "U_215D",
                    "text": "\u215D"
                  }
                ]
              },
              {
                "id": "K_6",
                "text": "6",
                "sk": [
                  {
                    "id": "U_0046",
                    "text": "F"
                  },
                  {
                    "id": "U_0066",
                    "text": "f"
                  },
                  {
                    "id": "U_2076",
                    "text": "\u2076"
                  },
                  {
                    "id": "U_2086",
                    "text": "\u2086"
                  }
                ]
              },
              {
                "id": "K_7",
                "text": "7",
                "sk": [
                  {
                    "id": "U_0047",
                    "text": "G"
                  },
                  {
                    "id": "U_0067",
                    "text": "g"
                  },
                  {
                    "id": "U_2077",
                    "text": "\u2077"
                  },
                  {
                    "id": "U_2087",
                    "text": "\u2087"
                  },
                  {
                    "id": "U_215E",
                    "text": "\u215E"
                  }
                ]
              },
              {
                "id": "K_8",
                "text": "8",
                "sk": [
                  {
                    "id": "U_0048",
                    "text": "H"
                  },
                  {
                    "id": "U_0068",
                    "text": "h"
                  },
                  {
                    "id": "U_2078",
                    "text": "\u2078"
                  },
                  {
                    "id": "U_2088",
                    "text": "\u2088"
                  },
                  {
                    "id": "U_221E",
                    "text": "\u221E"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "9",
                "sk": [
                  {
                    "id": "U_0049",
                    "text": "I"
                  },
                  {
                    "id": "U_0069",
                    "text": "i"
                  },
                  {
                    "id": "U_2079",
                    "text": "\u2079"
                  },
                  {
                    "id": "U_2089",
                    "text": "\u2089"
                  }
                ]
              },
              {
                "id": "K_0",
                "text": "0",
                "sk": [
                  {
                    "id": "U_004A",
                    "text": "J"
                  },
                  {
                    "id": "U_006A",
                    "text": "j"
                  },
                  {
                    "id": "U_2070",
                    "text": "\u2070"
                  },
                  {
                    "id": "U_2080",
                    "text": "\u2080"
                  },
                  {
                    "id": "U_2205",
                    "text": "\u2205"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_2200",
                "pad": "15",
                "text": "\u2200",
                "sk": [
                  {
                    "id": "U_2207",
                    "text": "\u2207"
                  },
                  {
                    "id": "U_0391",
                    "text": "\u0391"
                  },
                  {
                    "id": "U_03B1",
                    "text": "\u03B1"
                  }
                ]
              },
              {
                "id": "U_2203",
                "text": "\u2203",
                "sk": [
                  {
                    "id": "U_2204",
                    "text": "\u2204"
                  },
                  {
                    "id": "U_0392",
                    "text": "\u0392"
                  },
                  {
                    "id": "U_03B2",
                    "text": "\u03B2"
                  }
                ]
              },
              {
                "id": "U_2208",
                "text": "\u2208",
                "sk": [
                  {
                    "id": "U_2209",
                    "text": "\u2209"
                  },
                  {
                    "id": "U_0393",
                    "text": "\u0393"
                  },
                  {
                    "id": "U_03B3",
                    "text": "\u03B3"
                  }
                ]
              },
              {
                "id": "U_2282",
                "text": "\u2282",
                "sk": [
                  {
                    "id": "U_2284",
                    "text": "\u2284"
                  },
                  {
                    "id": "U_2286",
                    "text": "\u2286"
                  },
                  {
                    "id": "U_2288",
                    "text": "\u2288"
                  },
                  {
                    "id": "U_0394",
                    "text": "\u0394"
                  },
                  {
                    "id": "U_03B4",
                    "text": "\u03B4"
                  }
                ]
              },
              {
                "id": "U_222A",
                "text": "\u222A",
                "sk": [
                  {
                    "id": "U_2229",
                    "text": "\u2229"
                  },
                  {
                    "id": "U_2201",
                    "text": "\u2201"
                  },
                  {
                    "id": "U_2216",
                    "text": "\u2216"
                  },
                  {
                    "id": "U_0395",
                    "text": "\u0395"
                  },
                  {
                    "id": "U_03B5",
                    "text": "\u03B5"
                  }
                ]
              },
              {
                "id": "U_2228",
                "text": "\u2228",
                "sk": [
                  {
                    "id": "U_2227",
                    "text": "\u2227"
                  },
                  {
                    "id": "U_0396",
                    "text": "\u0396"
                  },
                  {
                    "id": "U_03B6",
                    "text": "\u03B6"
                  }
                ]
              },
              {
                "id": "U_00AC",
                "text": "\u00AC",
                "sk": [
                  {
                    "id": "U_0397",
                    "text": "\u0397"
                  },
                  {
                    "id": "U_03B7",
                    "text": "\u03B7"
                  }
                ]
              },
              {
                "id": "U_2220",
                "text": "\u2220",
                "sk": [
                  {
                    "id": "U_221F",
                    "text": "\u221F"
                  },
                  {
                    "id": "U_2312",
                    "text": "\u2312"
                  },
                  {
                    "id": "U_2300",
                    "text": "\u2300"
                  },
                  {
                    "id": "U_0398",
                    "text": "\u0398"
                  },
                  {
                    "id": "U_03B8",
                    "text": "\u03B8"
                  }
                ]
              },
              {
                "id": "U_0028",
                "text": "(",
                "sk": [
                  {
                    "id": "U_005B",
                    "text": "["
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  },
                  {
                    "id": "U_2329",
                    "text": "\u2329"
                  },
                  {
                    "id": "U_2308",
                    "text": "\u2308"
                  },
                  {
                    "id": "U_230A",
                    "text": "\u230A"
                  },
                  {
                    "id": "U_27EE",
                    "text": "\u27EE"
                  },
                  {
                    "id": "U_207D",
                    "text": "\u207D"
                  },
                  {
                    "id": "U_208D",
                    "text": "\u208D"
                  },
                  {
                    "id": "U_0399",
                    "text": "\u0399"
                  },
                  {
                    "id": "U_03B9",
                    "text": "\u03B9"
                  }
                ]
              },
              {
                "id": "U_0029",
                "text": ")",
                "sk": [
                  {
                    "id": "U_005D",
                    "text": "]"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  },
                  {
                    "id": "U_232A",
                    "text": "\u232A"
                  },
                  {
                    "id": "U_2309",
                    "text": "\u2309"
                  },
                  {
                    "id": "U_230B",
                    "text": "\u230B"
                  },
                  {
                    "id": "U_27EF",
                    "text": "\u27EF"
                  },
                  {
                    "id": "U_207E",
                    "text": "\u207E"
                  },
                  {
                    "id": "U_208E",
                    "text": "\u208E"
                  },
                  {
                    "id": "U_039A",
                    "text": "\u039A"
                  },
                  {
                    "id": "U_03BA",
                    "text": "\u03BA"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "width": "100",
                "id": "U_003A",
                "text": ":",
                "sk": [
                  {
                    "id": "U_2234",
                    "text": "\u2234"
                  },
                  {
                    "id": "U_2235",
                    "text": "\u2235"
                  },
                  {
                    "id": "U_2236",
                    "text": "\u2236"
                  },
                  {
                    "id": "U_2237",
                    "text": "\u2237"
                  },
                  {
                    "id": "U_039B",
                    "text": "\u039B"
                  },
                  {
                    "id": "U_03BB",
                    "text": "\u03BB"
                  }
                ]
              },
              {
                "id": "U_22EE",
                "text": "\u22EE",
                "sk": [
                  {
                    "id": "U_22EF",
                    "text": "\u22EF"
                  },
                  {
                    "id": "U_22F0",
                    "text": "\u22F0"
                  },
                  {
                    "id": "U_22F1",
                    "text": "\u22F1"
                  },
                  {
                    "id": "U_039C",
                    "text": "\u039C"
                  },
                  {
                    "id": "U_03BC",
                    "text": "\u03BC"
                  }
                ]
              },
              {
                "id": "U_220B",
                "text": "\u220B",
                "sk": [
                  {
                    "id": "U_220C",
                    "text": "\u220C"
                  },
                  {
                    "id": "U_039D",
                    "text": "\u039D"
                  },
                  {
                    "id": "U_03BD",
                    "text": "\u03BD"
                  }
                ]
              },
              {
                "id": "U_2283",
                "text": "\u2283",
                "sk": [
                  {
                    "id": "U_2285",
                    "text": "\u2285"
                  },
                  {
                    "id": "U_2287",
                    "text": "\u2287"
                  },
                  {
                    "id": "U_2289",
                    "text": "\u2289"
                  },
                  {
                    "id": "U_039E",
                    "text": "\u039E"
                  },
                  {
                    "id": "U_03BE",
                    "text": "\u03BE"
                  }
                ]
              },
              {
                "id": "U_207F",
                "text": "\u207F",
                "sk": [
                  {
                    "id": "U_2099",
                    "text": "\u2099"
                  },
                  {
                    "id": "U_2071",
                    "text": "\u2071"
                  },
                  {
                    "id": "U_1D62",
                    "text": "\u1D62"
                  },
                  {
                    "id": "U_2095",
                    "text": "\u2095"
                  },
                  {
                    "id": "U_2C7C",
                    "text": "\u2C7C"
                  },
                  {
                    "id": "U_2096",
                    "text": "\u2096"
                  },
                  {
                    "id": "U_2098",
                    "text": "\u2098"
                  },
                  {
                    "id": "U_209A",
                    "text": "\u209A"
                  },
                  {
                    "id": "U_209B",
                    "text": "\u209B"
                  },
                  {
                    "id": "U_209C",
                    "text": "\u209C"
                  },
                  {
                    "id": "U_039F",
                    "text": "\u039F"
                  },
                  {
                    "id": "U_03BF",
                    "text": "\u03BF"
                  }
                ]
              },
              {
                "id": "U_221A",
                "text": "\u221A",
                "sk": [
                  {
                    "id": "U_221B",
                    "text": "\u221B"
                  },
                  {
                    "id": "U_221C",
                    "text": "\u221C"
                  },
                  {
                    "id": "U_03A0",
                    "text": "\u03A0"
                  },
                  {
                    "id": "U_03C0",
                    "text": "\u03C0"
                  }
                ]
              },
              {
                "id": "U_25B3",
                "text": "\u25B3",
                "sk": [
                  {
                    "id": "U_22BF",
                    "text": "\u22BF"
                  },
                  {
                    "id": "U_25A1",
                    "text": "\u25A1"
                  },
                  {
                    "id": "U_25AD",
                    "text": "\u25AD"
                  },
                  {
                    "id": "U_25B1",
                    "text": "\u25B1"
                  },
                  {
                    "id": "U_25CA",
                    "text": "\u25CA"
                  },
                  {
                    "id": "U_2B20",
                    "text": "\u2B20"
                  },
                  {
                    "id": "U_2B21",
                    "text": "\u2B21"
                  },
                  {
                    "id": "U_25CB",
                    "text": "\u25CB"
                  },
                  {
                    "id": "U_2B2D",
                    "text": "\u2B2D"
                  },
                  {
                    "id": "U_2B2F",
                    "text": "\u2B2F"
                  },
                  {
                    "id": "U_03A1",
                    "text": "\u03A1"
                  },
                  {
                    "id": "U_03C1",
                    "text": "\u03C1"
                  }
                ]
              },
              {
                "id": "U_27C2",
                "text": "\u27C2",
                "sk": [
                  {
                    "id": "U_2225",
                    "text": "\u2225"
                  },
                  {
                    "id": "U_2226",
                    "text": "\u2226"
                  },
                  {
                    "id": "U_03A3",
                    "text": "\u03A3"
                  },
                  {
                    "id": "U_03C3",
                    "text": "\u03C3"
                  },
                  {
                    "id": "U_03C2",
                    "text": "\u03C2"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_003C",
                "text": "<",
                "sk": [
                  {
                    "id": "U_226E",
                    "text": "\u226E"
                  },
                  {
                    "id": "U_2264",
                    "text": "\u2264"
                  },
                  {
                    "id": "U_226A",
                    "text": "\u226A"
                  },
                  {
                    "id": "U_227A",
                    "text": "\u227A"
                  },
                  {
                    "id": "U_22DE",
                    "text": "\u22DE"
                  },
                  {
                    "id": "U_21B5",
                    "text": "\u21B5"
                  },
                  {
                    "id": "U_03A4",
                    "text": "\u03A4"
                  },
                  {
                    "id": "U_03C4",
                    "text": "\u03C4"
                  }
                ]
              },
              {
                "width": "100",
                "id": "U_003E",
                "text": ">",
                "sk": [
                  {
                    "id": "U_226F",
                    "text": "\u226F"
                  },
                  {
                    "id": "U_2265",
                    "text": "\u2265"
                  },
                  {
                    "id": "U_226B",
                    "text": "\u226B"
                  },
                  {
                    "id": "U_227B",
                    "text": "\u227B"
                  },
                  {
                    "id": "U_22DF",
                    "text": "\u22DF"
                  },
                  {
                    "id": "U_21A6",
                    "text": "\u21A6"
                  },
                  {
                    "id": "U_03A5",
                    "text": "\u03A5"
                  },
                  {
                    "id": "U_03C5",
                    "text": "\u03C5"
                  }
                ]
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "id": "T_NUM2",
                "pad": "15",
                "sp": "1",
                "text": "2/2"
              },
              {
                "id": "U_2192",
                "text": "\u2192",
                "sk": [
                  {
                    "id": "U_219B",
                    "text": "\u219B"
                  },
                  {
                    "id": "U_2190",
                    "text": "\u2190"
                  },
                  {
                    "id": "U_219A",
                    "text": "\u219A"
                  },
                  {
                    "id": "U_2191",
                    "text": "\u2191"
                  },
                  {
                    "id": "U_2193",
                    "text": "\u2193"
                  },
                  {
                    "id": "U_03A6",
                    "text": "\u03A6"
                  },
                  {
                    "id": "U_03C6",
                    "text": "\u03C6"
                  }
                ]
              },
              {
                "id": "U_21D2",
                "text": "\u21D2",
                "sk": [
                  {
                    "id": "U_21CF",
                    "text": "\u21CF"
                  },
                  {
                    "id": "U_21D0",
                    "text": "\u21D0"
                  },
                  {
                    "id": "U_21CD",
                    "text": "\u21CD"
                  },
                  {
                    "id": "U_21D4",
                    "text": "\u21D4"
                  },
                  {
                    "id": "U_03A7",
                    "text": "\u03A7"
                  },
                  {
                    "id": "U_03C7",
                    "text": "\u03C7"
                  }
                ]
              },
              {
                "id": "U_21BA",
                "text": "\u21BA",
                "sk": [
                  {
                    "id": "U_21BB",
                    "text": "\u21BB"
                  },
                  {
                    "id": "U_03A8",
                    "text": "\u03A8"
                  },
                  {
                    "id": "U_03C8",
                    "text": "\u03C8"
                  }
                ]
              },
              {
                "id": "U_002B",
                "text": "+",
                "sk": [
                  {
                    "id": "U_00B1",
                    "text": "\u00B1"
                  },
                  {
                    "id": "U_207A",
                    "text": "\u207A"
                  },
                  {
                    "id": "U_208A",
                    "text": "\u208A"
                  },
                  {
                    "id": "U_2295",
                    "text": "\u2295"
                  },
                  {
                    "id": "U_229E",
                    "text": "\u229E"
                  },
                  {
                    "id": "U_03A9",
                    "text": "\u03A9"
                  },
                  {
                    "id": "U_03C9",
                    "text": "\u03C9"
                  }
                ]
              },
              {
                "id": "U_2212",
                "text": "\u2212",
                "sk": [
                  {
                    "id": "U_2213",
                    "text": "\u2213"
                  },
                  {
                    "id": "U_207B",
                    "text": "\u207B"
                  },
                  {
                    "id": "U_208B",
                    "text": "\u208B"
                  },
                  {
                    "id": "U_2296",
                    "text": "\u2296"
                  },
                  {
                    "id": "U_229F",
                    "text": "\u229F"
                  }
                ]
              },
              {
                "id": "U_00D7",
                "text": "\u00D7",
                "sk": [
                  {
                    "id": "U_00B7",
                    "text": "\u00B7"
                  },
                  {
                    "id": "U_2297",
                    "text": "\u2297"
                  },
                  {
                    "id": "U_22A0",
                    "text": "\u22A0"
                  },
                  {
                    "id": "U_22A1",
                    "text": "\u22A1"
                  },
                  {
                    "id": "U_0058",
                    "text": "X"
                  },
                  {
                    "id": "U_0078",
                    "text": "x"
                  }
                ]
              },
              {
                "id": "U_00F7",
                "text": "\u00F7",
                "sk": [
                  {
                    "id": "U_002F",
                    "text": "/"
                  },
                  {
                    "id": "U_2236",
                    "text": "\u2236"
                  },
                  {
                    "id": "U_2298",
                    "text": "\u2298"
                  },
                  {
                    "id": "U_0059",
                    "text": "Y"
                  },
                  {
                    "id": "U_0079",
                    "text": "y"
                  }
                ]
              },
              {
                "id": "U_003D",
                "text": "=",
                "sk": [
                  {
                    "id": "U_2248",
                    "text": "\u2248"
                  },
                  {
                    "id": "U_2260",
                    "text": "\u2260"
                  },
                  {
                    "id": "U_2261",
                    "text": "\u2261"
                  },
                  {
                    "id": "U_2245",
                    "text": "\u2245"
                  },
                  {
                    "id": "U_207C",
                    "text": "\u207C"
                  },
                  {
                    "id": "U_208C",
                    "text": "\u208C"
                  },
                  {
                    "id": "U_005A",
                    "text": "Z"
                  },
                  {
                    "id": "U_007A",
                    "text": "z"
                  }
                ]
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "default",
                "width": "150",
                "id": "K_LOWER",
                "sp": "1",
                "text": "\u0561\u0562\u0563"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_002E",
                    "text": "."
                  },
                  {
                    "id": "U_055A",
                    "text": "\u055A"
                  },
                  {
                    "id": "U_0028",
                    "text": "("
                  },
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_201E",
                    "text": "\u201E"
                  },
                  {
                    "id": "U_21A6",
                    "text": "\u21A6"
                  }
                ]
              },
              {
                "width": "440",
                "id": "K_SPACE"
              },
              {
                "width": "100",
                "id": "U_0589",
                "text": "\u0589",
                "sk": [
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0029",
                    "text": ")"
                  },
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  },
                  {
                    "id": "U_21B5",
                    "text": "\u21B5"
                  }
                ]
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "caps",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "width": "105",
                "id": "U_055D",
                "text": "\u055D",
                "sk": [
                  {
                    "id": "U_055C",
                    "text": "\u055C"
                  }
                ]
              },
              {
                "width": "105",
                "id": "U_0587",
                "text": "\u0587"
              },
              {
                "width": "105",
                "id": "U_0537",
                "text": "\u0537"
              },
              {
                "width": "105",
                "id": "U_054C",
                "text": "\u054C"
              },
              {
                "width": "105",
                "id": "U_054F",
                "text": "\u054F"
              },
              {
                "width": "105",
                "id": "U_002D",
                "text": "-",
                "sk": [
                  {
                    "id": "U_2013",
                    "text": "\u2013"
                  },
                  {
                    "id": "U_2014",
                    "text": "\u2014"
                  },
                  {
                    "id": "U_005F",
                    "text": "_"
                  },
                  {
                    "id": "U_058A",
                    "text": "\u058A"
                  },
                  {
                    "id": "U_055F",
                    "text": "\u055F"
                  }
                ]
              },
              {
                "width": "105",
                "id": "U_0542",
                "text": "\u0542"
              },
              {
                "width": "105",
                "id": "U_0543",
                "text": "\u0543"
              },
              {
                "width": "105",
                "id": "U_053D",
                "text": "\u053D"
              },
              {
                "width": "105",
                "id": "U_054A",
                "text": "\u054A"
              },
              {
                "width": "105",
                "id": "U_055E",
                "text": "\u055E",
                "sk": [
                  {
                    "id": "U_002F",
                    "text": "/"
                  },
                  {
                    "id": "U_055B",
                    "text": "\u055B"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "width": "105",
                "id": "U_0554",
                "text": "\u0554"
              },
              {
                "width": "105",
                "id": "U_0552",
                "text": "\u0552"
              },
              {
                "width": "105",
                "id": "U_0535",
                "text": "\u0535"
              },
              {
                "width": "105",
                "id": "U_0550",
                "text": "\u0550"
              },
              {
                "width": "105",
                "id": "U_0539",
                "text": "\u0539"
              },
              {
                "width": "105",
                "id": "U_053E",
                "text": "\u053E"
              },
              {
                "width": "105",
                "id": "U_0545",
                "text": "\u0545"
              },
              {
                "width": "105",
                "id": "U_0548",
                "text": "\u0548"
              },
              {
                "width": "105",
                "id": "U_053B",
                "text": "\u053B"
              },
              {
                "width": "105",
                "id": "U_0555",
                "text": "\u0555"
              },
              {
                "width": "105",
                "id": "U_0553",
                "text": "\u0553"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "width": "105",
                "id": "U_0531",
                "pad": "15",
                "text": "\u0531"
              },
              {
                "width": "105",
                "id": "U_054D",
                "text": "\u054D"
              },
              {
                "width": "105",
                "id": "U_0547",
                "text": "\u0547"
              },
              {
                "width": "105",
                "id": "U_0534",
                "text": "\u0534"
              },
              {
                "width": "105",
                "id": "U_0541",
                "text": "\u0541"
              },
              {
                "width": "105",
                "id": "U_0556",
                "text": "\u0556"
              },
              {
                "width": "105",
                "id": "U_0533",
                "text": "\u0533"
              },
              {
                "width": "105",
                "id": "U_0540",
                "text": "\u0540"
              },
              {
                "width": "105",
                "id": "U_054B",
                "text": "\u054B"
              },
              {
                "width": "105",
                "id": "U_053F",
                "text": "\u053F"
              },
              {
                "width": "105",
                "id": "U_053C",
                "text": "\u053C"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "105",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*ShiftedLock*"
              },
              {
                "width": "105",
                "id": "U_0536",
                "text": "\u0536"
              },
              {
                "width": "105",
                "id": "U_053A",
                "text": "\u053A"
              },
              {
                "width": "105",
                "id": "U_0538",
                "text": "\u0538"
              },
              {
                "width": "105",
                "id": "U_0551",
                "text": "\u0551"
              },
              {
                "width": "105",
                "id": "U_0549",
                "text": "\u0549"
              },
              {
                "width": "105",
                "id": "U_054E",
                "text": "\u054E"
              },
              {
                "width": "105",
                "id": "U_0532",
                "text": "\u0532"
              },
              {
                "width": "105",
                "id": "U_0546",
                "text": "\u0546"
              },
              {
                "width": "105",
                "id": "U_0544",
                "text": "\u0544"
              },
              {
                "width": "105",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "1#\u058F"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "105",
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_002E",
                    "text": "."
                  },
                  {
                    "id": "U_055A",
                    "text": "\u055A"
                  },
                  {
                    "id": "U_0028",
                    "text": "("
                  },
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  }
                ]
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "width": "105",
                "id": "U_0589",
                "text": "\u0589",
                "sk": [
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0029",
                    "text": ")"
                  },
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_201D",
                    "text": "\u201D"
                  }
                ]
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.s_option_ligature_ew_13=KeymanWeb.KLOAD(this.KI,"option_ligature_ew","0");
  this.s_option_ligature_mv_14=KeymanWeb.KLOAD(this.KI,"option_ligature_mv","0");
  this.s_to_base_keys_16=[" ",{t:'d',d:0},{t:'d',d:1}];
  this.s_small_to_res_17="թծծ";
  this.s_capital_to_res_18="ԹԾԾ";
  this.s_seh_base_keys_19=" հՀ";
  this.s_small_seh_res_20="սշշ";
  this.s_capital_seh_res_21="ՍՇՇ";
  this.s_da_base_keys_22=[" ",{t:'d',d:2},{t:'d',d:3}];
  this.s_small_da_res_23="դձձ";
  this.s_capital_da_res_24="ԴՁՁ";
  this.s_gim_base_keys_25=" հՀ";
  this.s_small_gim_res_26="գղղ";
  this.s_capital_gim_res_27="ԳՂՂ";
  this.s_ken_base_keys_28=" հՀ";
  this.s_small_ken_res_29="կխխ";
  this.s_capital_ken_res_30="ԿԽԽ";
  this.s_za_base_keys_31=" հՀ";
  this.s_small_za_res_32="զժժ";
  this.s_capital_za_res_33="ԶԺԺ";
  this.s_co_base_keys_34=" հՀ";
  this.s_small_co_res_35="ցչչ";
  this.s_capital_co_res_36="ՑՉՉ";
  this.s_apostrophe_base_keys_37=[" ","ւ","Ւ","ե","Ե","ր","Ր",{t:'d',d:4},{t:'d',d:5},"փ","Փ","ջ","Ջ",{t:'d',d:6},{t:'d',d:7},"-",",",".","<",">",{t:'d',d:8},"օ","Օ","[","]"];
  this.s_apostrophe_res_38="'ևևէԷռՌտՏպՊճՃծԾ֊՚·‹›՛°°‘’";
  this.s_double_quote_base_keys_39=[" ","ւ","Ւ","ե","Ե","ր","Ր",{t:'d',d:4},{t:'d',d:5},"փ","Փ","ջ","Ջ",{t:'d',d:6},{t:'d',d:7},"<",">","[","]"];
  this.s_double_quote_res_40="\"ևևԷԷՌՌՏՏՊՊՃՃԾԾ«»“”";
  this.s_backslash_base_keys_41=[" ","-",{t:'d',d:8},"լ","Լ","ը","Ը","օ","Օ","ա","Ա","ե","Ե","=",{t:'d',d:4},{t:'d',d:5},"վ","Վ","բ","Բ","ո","Ո",{t:'d',d:6},{t:'d',d:7},"*","8","+","<",">","[","]","{","}"];
  this.s_backslash_res_42="\\−÷∟∟××∘∘∀∀∃∃≡⟂⟂∨∨∈∈∪∪⊂⊂∗∞±≤≥〈〉≺≻";
  this.s_slash_base_keys_43=[" ","=","լ","Լ","-",">","<","*","ե","Ե","վ","Վ","ն","Ն","0","բ","Բ","ո","Ո",{t:'d',d:6},{t:'d',d:7},{t:'d',d:9},{t:'d',d:10},";"];
  this.s_slash_res_44="/≠∠∠՟↦↵⋆∄∄∧∧¬¬∅∉∉∩∩⊄⊄′″‴";
  this.s46="1";
  this.s47="1";
  this.s48="1";
  this.s49="1";
  this.s50="1";
  this.s51="1";
  this.s52="1";
  this.s53="0";
  this.s54="1";
  this.s55="0";
  this.s56="1";
  this.s57="0";
  this.s58="1";
  this.s59="1";
  this.s60="1";
  this.s61="1";
  this.s62="1";
  this.s63="1";
  this.s64="1";
  this.s65="0";
  this.s66="1";
  this.s67="0";
  this.s68="1";
  this.s69="0";
  this.s70="1";
  this.s71="1";
  this.s72="1";
  this.s73="1";
  this.s74="1";
  this.s75="1";
  this.s76="1";
  this.s77="1";
  this.s78="1";
  this.s79="1";
  this.s80="1";
  this.s81="1";
  this.s82="1";
  this.s83="1";
  this.s84="1";
  this.s85="1";
  this.s86="1";
  this.s87="1";
  this.KVER="15.0.266.0";
  this.KVS=['s_option_ligature_ew_13','s_option_ligature_mv_14'];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)) {
      if(k.KFCM(1,t,['√'])&&this.s_option_ligature_ew_13!==this.s50){
        r=m=1;   // Line 252
        k.KDC(1,t);
        this.s_option_ligature_ew_13=this.s51;
        k.KSAVE("option_ligature_ew",this.s_option_ligature_ew_13);
      }
      else if(k.KFCM(1,t,['√'])&&this.s_option_ligature_ew_13===this.s56){
        r=m=1;   // Line 255
        k.KDC(1,t);
        this.s_option_ligature_ew_13=this.s57;
        k.KSAVE("option_ligature_ew",this.s_option_ligature_ew_13);
      }
      else if(k.KFCM(1,t,['ե'])&&this.s_option_ligature_ew_13===this.s72){
        r=m=1;   // Line 269
        k.KDC(1,t);
        k.KO(-1,t,"և");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)) {
      if(k.KFCM(1,t,['√'])&&this.s_option_ligature_mv_14!==this.s62){
        r=m=1;   // Line 260
        k.KDC(1,t);
        this.s_option_ligature_mv_14=this.s63;
        k.KSAVE("option_ligature_mv",this.s_option_ligature_mv_14);
      }
      else if(k.KFCM(1,t,['√'])&&this.s_option_ligature_mv_14===this.s68){
        r=m=1;   // Line 263
        k.KDC(1,t);
        this.s_option_ligature_mv_14=this.s69;
        k.KSAVE("option_ligature_mv",this.s_option_ligature_mv_14);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s75){
        r=m=1;   // Line 274
        k.KDC(1,t);
        k.KO(-1,t,"ﬓ");
      }
      else if(k.KFCM(1,t,['վ'])&&this.s_option_ligature_mv_14===this.s84){
        r=m=1;   // Line 289
        k.KDC(1,t);
        k.KO(-1,t,"ﬖ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s78){
        r=m=1;   // Line 279
        k.KDC(1,t);
        k.KO(-1,t,"ﬔ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s81){
        r=m=1;   // Line 284
        k.KDC(1,t);
        k.KO(-1,t,"ﬕ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s87){
        r=m=1;   // Line 294
        k.KDC(1,t);
        k.KO(-1,t,"ﬗ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"⁻");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"⁃");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"•");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"‣");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"©");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"¤");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"₤");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"֍");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"₣");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"℠");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"„");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"⁺");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"°");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"™");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"®");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"—");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"⁰");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"⁹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"⁸");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"⁷");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"⁶");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"⁵");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"⁴");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"³");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"²");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"¹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"÷");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"·");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"՚");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"‰");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"№");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"√");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"℃");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"×");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"՛");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"…");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"₾");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"֎");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KO(-1,t,"₴");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"֏");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"§");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"ª");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"¶");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"º");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"₹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"¥");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"‱");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"₽");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"≈");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"–");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"₀");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"₉");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"₈");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"₇");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"₆");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"₅");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"₄");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"₃");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"₂");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"₁");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 241
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 242
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 329
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 365
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 406
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 447
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 483
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 519
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 560
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 601
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 642
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 683
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 724
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 765
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 806
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 847
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 878
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 908
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,10);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 939
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,10);
      }
      else if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KDO(-1,t,10);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 328
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 364
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 405
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 446
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 482
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 518
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 559
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 600
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 641
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 682
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 723
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 764
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 805
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 846
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 877
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 907
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,9);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 938
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,9);
      }
      else if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KDO(-1,t,9);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 367
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 408
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 449
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 485
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 521
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 562
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 603
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 644
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 685
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 726
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 767
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 808
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 849
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 910
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,8);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 974
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,8);
      }
      else if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KDO(-1,t,8);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 175
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 171
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 170
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"։");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"՞");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"Ա");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"Ա");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"Բ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"Բ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 325
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 361
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 402
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 443
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 479
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 515
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 556
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 597
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 638
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 679
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 720
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 761
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 802
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 843
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,7);
      }
      else if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KDO(-1,t,7);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 326
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 362
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 403
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 444
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 480
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 516
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 557
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 598
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 639
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 680
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 721
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 762
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 803
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,7);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 844
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,7);
      }
      else if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KDO(-1,t,7);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_D /* 0x44 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 305
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 341
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 382
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 423
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 464
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 500
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 536
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 577
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 618
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 659
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 700
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 741
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 782
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 823
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 859
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 889
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 920
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 955
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,13);
      }
      else if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KDO(-1,t,13);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_D /* 0x44 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 306
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 342
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 383
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 424
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 465
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 501
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 537
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 578
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 619
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 660
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 701
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 742
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 783
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 824
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 860
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 890
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 921
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,13);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 956
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,13);
      }
      else if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KDO(-1,t,13);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"Ե");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"Ե");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"Ֆ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"Ֆ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_G /* 0x47 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 310
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 346
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 387
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 428
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 469
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 505
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 541
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 582
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 623
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 664
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 705
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 746
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 787
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 828
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 864
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 894
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 925
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 960
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,12);
      }
      else if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KDO(-1,t,12);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_G /* 0x47 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 311
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 347
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 388
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 429
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 470
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 506
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 542
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 583
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 624
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 665
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 706
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 747
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 788
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 829
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 865
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 895
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 926
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,12);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 961
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,12);
      }
      else if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KDO(-1,t,12);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"Հ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"Հ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KO(-1,t,"Ի");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"Ի");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"Ջ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"Ջ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_K /* 0x4B */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 315
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 351
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 392
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 433
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 474
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 510
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 546
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 587
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 628
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 669
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 710
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 751
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 792
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 833
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 869
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 899
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 930
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 965
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,11);
      }
      else if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KDO(-1,t,11);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_K /* 0x4B */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 316
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 352
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 393
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 434
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 475
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 511
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 547
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 588
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 629
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 670
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 711
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 752
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 793
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 834
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 870
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 900
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 931
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,11);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 966
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,11);
      }
      else if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KDO(-1,t,11);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"Լ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"Լ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"Մ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"Մ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"Ն");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"Ն");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"Օ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"Օ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"Փ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"Փ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"Ք");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"Ք");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"Ր");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,"Ր");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 377
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 418
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 459
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 495
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 531
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 572
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 613
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 654
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 695
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 736
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 777
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 818
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 854
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 884
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 915
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 950
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,1);
      }
      else if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KDO(-1,t,1);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 378
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 419
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 460
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 496
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 532
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 573
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 614
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 655
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 696
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 737
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 778
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 819
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 855
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 885
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 916
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,1);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 951
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,1);
      }
      else if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KDO(-1,t,1);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_T /* 0x54 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 300
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 336
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 372
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 413
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 454
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 490
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 526
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 567
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 608
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 649
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 690
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 731
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 772
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 813
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 945
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,5);
      }
      else if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KDO(-1,t,5);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_T /* 0x54 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 301
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 337
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 373
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 414
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 455
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 491
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 527
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 568
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 609
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 650
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 691
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 732
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 773
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 814
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 946
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,5);
      }
      else if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KDO(-1,t,5);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"Ո");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"Ո");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"Վ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"Վ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"Ւ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"Ւ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"Ը");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"Ը");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"Յ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"Յ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 320
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 356
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 397
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 438
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 551
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 592
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 633
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 674
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 715
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 756
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 797
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 838
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 874
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 904
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 935
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 970
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,3);
      }
      else if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KDO(-1,t,3);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 321
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 357
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 398
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 439
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 552
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 593
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 634
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 675
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 716
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 757
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 798
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 839
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 875
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 905
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 936
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 971
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,3);
      }
      else if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KDO(-1,t,3);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 218
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 330
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 366
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 407
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 448
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 484
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 520
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 561
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 602
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 643
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 684
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 725
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 766
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 807
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 848
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 879
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 909
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 940
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,17);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 973
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,17);
      }
      else if(1){
        r=m=1;   // Line 216
        k.KDC(0,t);
        k.KDO(-1,t,17);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 217
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 239
        k.KDC(0,t);
        k.KO(-1,t,"՝");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 214
        k.KDC(0,t);
        k.KO(-1,t,"ա");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 215
        k.KDC(0,t);
        k.KO(-1,t,"ա");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"բ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"բ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 323
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 359
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 400
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 441
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 477
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 513
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 554
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 595
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 636
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 677
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 718
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 759
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 800
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 841
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,6);
      }
      else if(1){
        r=m=1;   // Line 190
        k.KDC(0,t);
        k.KDO(-1,t,6);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 324
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 360
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 401
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 442
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 478
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 514
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 555
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 596
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 637
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 678
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 719
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 760
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 801
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 842
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,6);
      }
      else if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KDO(-1,t,6);
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_D /* 0x44 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 303
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 339
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 380
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 421
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 462
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 498
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 534
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 575
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 616
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 657
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 698
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 739
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 780
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 821
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 857
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 887
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 918
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 953
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,16);
      }
      else if(1){
        r=m=1;   // Line 210
        k.KDC(0,t);
        k.KDO(-1,t,16);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_D /* 0x44 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 304
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 340
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 381
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 422
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 463
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 499
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 535
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 576
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 617
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 658
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 699
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 740
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 781
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 822
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 858
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 888
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 919
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,16);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 954
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,16);
      }
      else if(1){
        r=m=1;   // Line 211
        k.KDC(0,t);
        k.KDO(-1,t,16);
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s76){
        r=m=1;   // Line 277
        k.KDC(1,t);
        k.KO(-1,t,"ﬔ");
      }
      else if(1){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ե");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s77){
        r=m=1;   // Line 278
        k.KDC(1,t);
        k.KO(-1,t,"ﬔ");
      }
      else if(1){
        r=m=1;   // Line 234
        k.KDC(0,t);
        k.KO(-1,t,"ե");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 208
        k.KDC(0,t);
        k.KO(-1,t,"ֆ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 209
        k.KDC(0,t);
        k.KO(-1,t,"ֆ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_G /* 0x47 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 308
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 344
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 385
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 426
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 467
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 503
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 539
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 580
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 621
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 662
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 703
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 744
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 785
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 826
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 862
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 892
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 923
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 958
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,15);
      }
      else if(1){
        r=m=1;   // Line 206
        k.KDC(0,t);
        k.KDO(-1,t,15);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_G /* 0x47 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 309
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 345
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 386
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 427
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 468
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 504
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 540
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 581
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 622
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 663
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 704
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 745
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 786
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 827
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 863
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 893
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 924
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,15);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 959
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,15);
      }
      else if(1){
        r=m=1;   // Line 207
        k.KDC(0,t);
        k.KDO(-1,t,15);
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_H /* 0x48 */)) {
      if(k.KFCM(2,t,['մ',{t:'d',d:14}])&&this.s_option_ligature_mv_14===this.s85){
        r=m=1;   // Line 292
        k.KDC(2,t);
        k.KO(-1,t,"ﬗ");
      }
      else if(1){
        r=m=1;   // Line 204
        k.KDC(0,t);
        k.KO(-1,t,"հ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_H /* 0x48 */)) {
      if(k.KFCM(2,t,['մ',{t:'d',d:14}])&&this.s_option_ligature_mv_14===this.s86){
        r=m=1;   // Line 293
        k.KDC(2,t);
        k.KO(-1,t,"ﬗ");
      }
      else if(1){
        r=m=1;   // Line 205
        k.KDC(0,t);
        k.KO(-1,t,"հ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_I /* 0x49 */)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s79){
        r=m=1;   // Line 282
        k.KDC(1,t);
        k.KO(-1,t,"ﬕ");
      }
      else if(1){
        r=m=1;   // Line 223
        k.KDC(0,t);
        k.KO(-1,t,"ի");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_I /* 0x49 */)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s80){
        r=m=1;   // Line 283
        k.KDC(1,t);
        k.KO(-1,t,"ﬕ");
      }
      else if(1){
        r=m=1;   // Line 224
        k.KDC(0,t);
        k.KO(-1,t,"ի");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 202
        k.KDC(0,t);
        k.KO(-1,t,"ջ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 203
        k.KDC(0,t);
        k.KO(-1,t,"ջ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_K /* 0x4B */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 313
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 349
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 390
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 431
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 472
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 508
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 544
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 585
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 626
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 667
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 708
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 749
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 790
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 831
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 867
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 897
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 928
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 963
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,14);
      }
      else if(1){
        r=m=1;   // Line 200
        k.KDC(0,t);
        k.KDO(-1,t,14);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_K /* 0x4B */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 314
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 350
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 391
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 432
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 473
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 509
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 545
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 586
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 627
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 668
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 709
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 750
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 791
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 832
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 868
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 898
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 929
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,14);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 964
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,14);
      }
      else if(1){
        r=m=1;   // Line 201
        k.KDC(0,t);
        k.KDO(-1,t,14);
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 198
        k.KDC(0,t);
        k.KO(-1,t,"լ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 199
        k.KDC(0,t);
        k.KO(-1,t,"լ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_M /* 0x4D */)) {
      if(k.KFCM(1,t,['√'])&&this.s_option_ligature_mv_14!==this.s58){
        r=m=1;   // Line 258
        k.KDC(1,t);
        this.s_option_ligature_mv_14=this.s59;
        k.KSAVE("option_ligature_mv",this.s_option_ligature_mv_14);
      }
      else if(k.KFCM(1,t,['√'])&&this.s_option_ligature_mv_14===this.s64){
        r=m=1;   // Line 261
        k.KDC(1,t);
        this.s_option_ligature_mv_14=this.s65;
        k.KSAVE("option_ligature_mv",this.s_option_ligature_mv_14);
      }
      else if(1){
        r=m=1;   // Line 182
        k.KDC(0,t);
        k.KO(-1,t,"մ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_M /* 0x4D */)) {
      if(k.KFCM(1,t,['√'])&&this.s_option_ligature_mv_14!==this.s60){
        r=m=1;   // Line 259
        k.KDC(1,t);
        this.s_option_ligature_mv_14=this.s61;
        k.KSAVE("option_ligature_mv",this.s_option_ligature_mv_14);
      }
      else if(k.KFCM(1,t,['√'])&&this.s_option_ligature_mv_14===this.s66){
        r=m=1;   // Line 262
        k.KDC(1,t);
        this.s_option_ligature_mv_14=this.s67;
        k.KSAVE("option_ligature_mv",this.s_option_ligature_mv_14);
      }
      else if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"մ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_N /* 0x4E */)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s73){
        r=m=1;   // Line 272
        k.KDC(1,t);
        k.KO(-1,t,"ﬓ");
      }
      else if(k.KFCM(1,t,['վ'])&&this.s_option_ligature_mv_14===this.s82){
        r=m=1;   // Line 287
        k.KDC(1,t);
        k.KO(-1,t,"ﬖ");
      }
      else if(1){
        r=m=1;   // Line 184
        k.KDC(0,t);
        k.KO(-1,t,"ն");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_N /* 0x4E */)) {
      if(k.KFCM(1,t,['մ'])&&this.s_option_ligature_mv_14===this.s74){
        r=m=1;   // Line 273
        k.KDC(1,t);
        k.KO(-1,t,"ﬓ");
      }
      else if(k.KFCM(1,t,['վ'])&&this.s_option_ligature_mv_14===this.s83){
        r=m=1;   // Line 288
        k.KDC(1,t);
        k.KO(-1,t,"ﬖ");
      }
      else if(1){
        r=m=1;   // Line 185
        k.KDC(0,t);
        k.KO(-1,t,"ն");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 221
        k.KDC(0,t);
        k.KO(-1,t,"օ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 222
        k.KDC(0,t);
        k.KO(-1,t,"օ");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 219
        k.KDC(0,t);
        k.KO(-1,t,"փ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 220
        k.KDC(0,t);
        k.KO(-1,t,"փ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 237
        k.KDC(0,t);
        k.KO(-1,t,"ք");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 238
        k.KDC(0,t);
        k.KO(-1,t,"ք");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"ր");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ր");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 375
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 416
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 457
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 493
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 529
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 570
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 611
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 652
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 693
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 734
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 775
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 816
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 852
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 882
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 913
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 948
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,0);
      }
      else if(1){
        r=m=1;   // Line 212
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 376
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 417
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 458
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 494
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 530
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 571
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 612
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 653
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 694
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 735
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 776
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 817
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 853
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 883
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 914
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 949
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,0);
      }
      else if(1){
        r=m=1;   // Line 213
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_T /* 0x54 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 298
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 334
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 370
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 411
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 452
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 488
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 524
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 565
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 606
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 647
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 688
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 729
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 770
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 811
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 943
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,4);
      }
      else if(1){
        r=m=1;   // Line 229
        k.KDC(0,t);
        k.KDO(-1,t,4);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_T /* 0x54 */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 299
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 335
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 371
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 412
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:16}])){
        r=m=1;   // Line 453
        k.KDC(1,t);
        k.KO(-1,t,"դ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:13}])){
        r=m=1;   // Line 489
        k.KDC(1,t);
        k.KO(-1,t,"Դ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 525
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 566
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 607
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 648
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 689
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 730
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 771
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 812
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,4);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 944
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,4);
      }
      else if(1){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KDO(-1,t,4);
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 225
        k.KDC(0,t);
        k.KO(-1,t,"ո");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 226
        k.KDC(0,t);
        k.KO(-1,t,"ո");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"վ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"վ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_W /* 0x57 */)) {
      if(k.KFCM(1,t,['√'])&&this.s_option_ligature_ew_13!==this.s46){
        r=m=1;   // Line 250
        k.KDC(1,t);
        this.s_option_ligature_ew_13=this.s47;
        k.KSAVE("option_ligature_ew",this.s_option_ligature_ew_13);
      }
      else if(k.KFCM(1,t,['√'])&&this.s_option_ligature_ew_13===this.s52){
        r=m=1;   // Line 253
        k.KDC(1,t);
        this.s_option_ligature_ew_13=this.s53;
        k.KSAVE("option_ligature_ew",this.s_option_ligature_ew_13);
      }
      else if(k.KFCM(1,t,['ե'])&&this.s_option_ligature_ew_13===this.s70){
        r=m=1;   // Line 267
        k.KDC(1,t);
        k.KO(-1,t,"և");
      }
      else if(1){
        r=m=1;   // Line 235
        k.KDC(0,t);
        k.KO(-1,t,"ւ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_W /* 0x57 */)) {
      if(k.KFCM(1,t,['√'])&&this.s_option_ligature_ew_13!==this.s48){
        r=m=1;   // Line 251
        k.KDC(1,t);
        this.s_option_ligature_ew_13=this.s49;
        k.KSAVE("option_ligature_ew",this.s_option_ligature_ew_13);
      }
      else if(k.KFCM(1,t,['√'])&&this.s_option_ligature_ew_13===this.s54){
        r=m=1;   // Line 254
        k.KDC(1,t);
        this.s_option_ligature_ew_13=this.s55;
        k.KSAVE("option_ligature_ew",this.s_option_ligature_ew_13);
      }
      else if(k.KFCM(1,t,['ե'])&&this.s_option_ligature_ew_13===this.s71){
        r=m=1;   // Line 268
        k.KDC(1,t);
        k.KO(-1,t,"և");
      }
      else if(1){
        r=m=1;   // Line 236
        k.KDC(0,t);
        k.KO(-1,t,"ւ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"ը");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"ը");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 227
        k.KDC(0,t);
        k.KO(-1,t,"յ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 228
        k.KDC(0,t);
        k.KO(-1,t,"յ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 318
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 354
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 395
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 436
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 549
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 590
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 631
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 672
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 713
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 754
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 795
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 836
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 872
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 902
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 933
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 968
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,2);
      }
      else if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KDO(-1,t,2);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KFCM(1,t,[{t:'d',d:4}])){
        r=m=1;   // Line 319
        k.KDC(1,t);
        k.KO(-1,t,"թ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:5}])){
        r=m=1;   // Line 355
        k.KDC(1,t);
        k.KO(-1,t,"Թ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:0}])){
        r=m=1;   // Line 396
        k.KDC(1,t);
        k.KO(-1,t,"ս");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:1}])){
        r=m=1;   // Line 437
        k.KDC(1,t);
        k.KO(-1,t,"Ս");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:15}])){
        r=m=1;   // Line 550
        k.KDC(1,t);
        k.KO(-1,t,"գ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:12}])){
        r=m=1;   // Line 591
        k.KDC(1,t);
        k.KO(-1,t,"Գ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:14}])){
        r=m=1;   // Line 632
        k.KDC(1,t);
        k.KO(-1,t,"կ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:11}])){
        r=m=1;   // Line 673
        k.KDC(1,t);
        k.KO(-1,t,"Կ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:2}])){
        r=m=1;   // Line 714
        k.KDC(1,t);
        k.KO(-1,t,"զ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:3}])){
        r=m=1;   // Line 755
        k.KDC(1,t);
        k.KO(-1,t,"Զ");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:6}])){
        r=m=1;   // Line 796
        k.KDC(1,t);
        k.KO(-1,t,"ց");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:7}])){
        r=m=1;   // Line 837
        k.KDC(1,t);
        k.KO(-1,t,"Ց");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:9}])){
        r=m=1;   // Line 873
        k.KDC(1,t);
        k.KO(-1,t,"'");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:10}])){
        r=m=1;   // Line 903
        k.KDC(1,t);
        k.KO(-1,t,"\"");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:17}])){
        r=m=1;   // Line 934
        k.KDC(1,t);
        k.KO(-1,t,"\\");
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(1,t,[{t:'d',d:8}])){
        r=m=1;   // Line 969
        k.KDC(1,t);
        k.KO(-1,t,"/");
        k.KDO(-1,t,2);
      }
      else if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KDO(-1,t,2);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"՜");
      }
    }
    if(m==1) {
    
      k.KDC(-1,t);
      r=this.g_deadkeys_1(t,e);
      m=2;
    }
    return r;
  };
  this.g_deadkeys_1=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KFCM(2,t,[{t:'d',d:4},{t:'a',a:this.s_to_base_keys_16,n:1}])){
        m=1;   // Line 988
        k.KDC(2,t);
        k.KO(-1,t,"թ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},{t:'a',a:this.s_to_base_keys_16}])){
        m=1;   // Line 989
        k.KDC(2,t);
        k.KIO(-1,this.s_small_to_res_17,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:5},{t:'a',a:this.s_to_base_keys_16,n:1}])){
        m=1;   // Line 991
        k.KDC(2,t);
        k.KO(-1,t,"Թ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:5},{t:'a',a:this.s_to_base_keys_16}])){
        m=1;   // Line 992
        k.KDC(2,t);
        k.KIO(-1,this.s_capital_to_res_18,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:0},{t:'a',a:this.s_seh_base_keys_19,n:1}])){
        m=1;   // Line 1002
        k.KDC(2,t);
        k.KO(-1,t,"ս");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:0},{t:'a',a:this.s_seh_base_keys_19}])){
        m=1;   // Line 1003
        k.KDC(2,t);
        k.KIO(-1,this.s_small_seh_res_20,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:1},{t:'a',a:this.s_seh_base_keys_19,n:1}])){
        m=1;   // Line 1005
        k.KDC(2,t);
        k.KO(-1,t,"Ս");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:1},{t:'a',a:this.s_seh_base_keys_19}])){
        m=1;   // Line 1006
        k.KDC(2,t);
        k.KIO(-1,this.s_capital_seh_res_21,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:16},{t:'a',a:this.s_da_base_keys_22,n:1}])){
        m=1;   // Line 1016
        k.KDC(2,t);
        k.KO(-1,t,"դ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:16},{t:'a',a:this.s_da_base_keys_22}])){
        m=1;   // Line 1017
        k.KDC(2,t);
        k.KIO(-1,this.s_small_da_res_23,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:13},{t:'a',a:this.s_da_base_keys_22,n:1}])){
        m=1;   // Line 1019
        k.KDC(2,t);
        k.KO(-1,t,"Դ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:13},{t:'a',a:this.s_da_base_keys_22}])){
        m=1;   // Line 1020
        k.KDC(2,t);
        k.KIO(-1,this.s_capital_da_res_24,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:15},{t:'a',a:this.s_gim_base_keys_25,n:1}])){
        m=1;   // Line 1030
        k.KDC(2,t);
        k.KO(-1,t,"գ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:15},{t:'a',a:this.s_gim_base_keys_25}])){
        m=1;   // Line 1031
        k.KDC(2,t);
        k.KIO(-1,this.s_small_gim_res_26,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:12},{t:'a',a:this.s_gim_base_keys_25,n:1}])){
        m=1;   // Line 1033
        k.KDC(2,t);
        k.KO(-1,t,"Գ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:12},{t:'a',a:this.s_gim_base_keys_25}])){
        m=1;   // Line 1034
        k.KDC(2,t);
        k.KIO(-1,this.s_capital_gim_res_27,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:14},{t:'a',a:this.s_ken_base_keys_28,n:1}])){
        m=1;   // Line 1044
        k.KDC(2,t);
        k.KO(-1,t,"կ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:14},{t:'a',a:this.s_ken_base_keys_28}])){
        m=1;   // Line 1045
        k.KDC(2,t);
        k.KIO(-1,this.s_small_ken_res_29,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:11},{t:'a',a:this.s_ken_base_keys_28,n:1}])){
        m=1;   // Line 1047
        k.KDC(2,t);
        k.KO(-1,t,"Կ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:11},{t:'a',a:this.s_ken_base_keys_28}])){
        m=1;   // Line 1048
        k.KDC(2,t);
        k.KIO(-1,this.s_capital_ken_res_30,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:2},{t:'a',a:this.s_za_base_keys_31,n:1}])){
        m=1;   // Line 1058
        k.KDC(2,t);
        k.KO(-1,t,"զ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:2},{t:'a',a:this.s_za_base_keys_31}])){
        m=1;   // Line 1059
        k.KDC(2,t);
        k.KIO(-1,this.s_small_za_res_32,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:3},{t:'a',a:this.s_za_base_keys_31,n:1}])){
        m=1;   // Line 1061
        k.KDC(2,t);
        k.KO(-1,t,"Զ");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:3},{t:'a',a:this.s_za_base_keys_31}])){
        m=1;   // Line 1062
        k.KDC(2,t);
        k.KIO(-1,this.s_capital_za_res_33,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:6},{t:'a',a:this.s_co_base_keys_34,n:1}])){
        m=1;   // Line 1072
        k.KDC(2,t);
        k.KO(-1,t,"ց");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:6},{t:'a',a:this.s_co_base_keys_34}])){
        m=1;   // Line 1073
        k.KDC(2,t);
        k.KIO(-1,this.s_small_co_res_35,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:7},{t:'a',a:this.s_co_base_keys_34,n:1}])){
        m=1;   // Line 1075
        k.KDC(2,t);
        k.KO(-1,t,"Ց");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:7},{t:'a',a:this.s_co_base_keys_34}])){
        m=1;   // Line 1076
        k.KDC(2,t);
        k.KIO(-1,this.s_capital_co_res_36,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:9},{t:'a',a:this.s_apostrophe_base_keys_37,n:1}])){
        m=1;   // Line 1084
        k.KDC(2,t);
        k.KO(-1,t,"'");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:9},{t:'a',a:this.s_apostrophe_base_keys_37}])){
        m=1;   // Line 1085
        k.KDC(2,t);
        k.KIO(-1,this.s_apostrophe_res_38,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:10},{t:'a',a:this.s_double_quote_base_keys_39,n:1}])){
        m=1;   // Line 1093
        k.KDC(2,t);
        k.KO(-1,t,"\"");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:10},{t:'a',a:this.s_double_quote_base_keys_39}])){
        m=1;   // Line 1094
        k.KDC(2,t);
        k.KIO(-1,this.s_double_quote_res_40,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:17},{t:'a',a:this.s_backslash_base_keys_41,n:1}])){
        m=1;   // Line 1102
        k.KDC(2,t);
        k.KO(-1,t,"\\");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:17},{t:'a',a:this.s_backslash_base_keys_41}])){
        m=1;   // Line 1103
        k.KDC(2,t);
        k.KIO(-1,this.s_backslash_res_42,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:8},{t:'a',a:this.s_slash_base_keys_43,n:1}])){
        m=1;   // Line 1111
        k.KDC(2,t);
        k.KO(-1,t,"/");
        k.KCXO(-1,t,2,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:8},{t:'a',a:this.s_slash_base_keys_43}])){
        m=1;   // Line 1112
        k.KDC(2,t);
        k.KIO(-1,this.s_slash_res_44,2,t);
      }
    return r;
  };
}
