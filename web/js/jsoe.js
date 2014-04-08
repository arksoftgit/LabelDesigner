// we need tabs as spaces and not CSS magin-left in order to retain format when copying and pasting the code
window.SINGLE_TAB = "  ";
window.DOUBLE_TAB = MultiplyString( 2, window.SINGLE_TAB );
window.ImgCollapsed = "images/plus.gif";
window.ImgExpanded = "images/minus.gif";
window.QuoteKeys = true;

var g_JsonLabelLod = "{ \"OIs\":[ {" +
                              "\"Object\":[ {" +
                                    "\"Name\":\"TZLLD\"," +
                                    "\"Root\":[ {" +
                                          "\"Name\":\"LLD\"," +
                                          "\"Entity\":[ {" +
                                                "\"Name\":\"Panel\"," +
                                                "\"Entity\":[ {" +
                                                      "\"Name\":\"Block\"," +
                                                      "\"Entity\":[ {" +
                                                            "\"Name\":\"BlockBlock\"," +
                                                            "\"Recursive\":\"Y\"" +
                                                         "}," +
                                                         "{" +
                                                            "\"Name\":\"BlockMapRef\"," +
                                                            "\"Entity\":[" +
                                                               "{ \"Name\":\"BlockLOD_Attribute\" }," +
                                                               "{ \"Name\":\"BlockLOD_Entity\" }," +
                                                               "{ \"Name\":\"BlockContext\" }," +
                                                               "{ \"Name\":\"BlockViewObjRef\" }" +
                                                            "]" +
                                                         "}" +
                                                      "]" +
                                                   "}" +
                                                "]" +
                                             "}," +
                                             "{" +
                                                "\"Name\":\"DisplayStatement\"," +
                                                "\"Derived\":\"Y\"" +
                                             "}," +
                                             "{" +
                                                "\"Name\":\"ViewObjRef\"," +
                                                "\"Entity\":[" +
                                                   "{" +
                                                      "\"Name\":\"LOD\"" +
                                                   "}" +
                                                "]" +
                                             "}" +
                                          "]" +
                                       "}" +
                                    "]" +
                                 "}" +
                              "]" +
                           "}" +
                        "]" +
                     "}";
var g_JsonNewLabel = "{" +
  "\".meta\":{" +
     "\"version\":\"1.0\"," +
     "\"date\":\"2014-04-01T13:52:06.872\"" +
  "}," +
  "\"OIs\":[" +
     "{" +
        "\".oimeta\":{" +
           "\"application\":\"Zeidon_Tools\"," +
           "\"odName\":\"TZLLD\"," +
           "\"fileName\":\"x15\"," +
           "\"incremental\":true" +
        "}," +
        "\"LLD\":[" +
           "{" +
              "\".meta\":{" +
                 "\"incrementals\":\"UC\"" +
              "}," +
              "\"Tag\":\"label\"," +
              "\".Tag\":{" +
                 "\"updated\":\"true\"" +
              "}," +
              "\"Name\":\"Drop area ...\"," +
              "\".Name\":{" +
                 "\"updated\":\"true\"" +
              "}," +
              "\"Panel\":[" +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel1\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"1\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Block\":[" +
                       "{" +
                          "\".meta\":{" +
                             "\"incrementals\":\"UC\"" +
                          "}," +
                          "\"Tag\":\"Tag100\"," +
                          "\".Tag\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Top\":\"26px\"," +
                          "\".Top\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Left\":\"189px\"," +
                          "\".Left\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Height\":\"469px\"," +
                          "\".Height\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Width\":\"559px\"," +
                          "\".Width\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BorderColor\":\"#ffffff\"," +
                          "\".BorderColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"TextColor\":\"#ffffff\"," +
                          "\".TextColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BackgroundColor\":\"#ffffff\"," +
                          "\".BackgroundColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Level\":\"1\"," +
                          "\".Level\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BlockBlock\":[" +
                             "{" +
                                "\".meta\":{" +
                                   "\"incrementals\":\"UC\"" +
                                "}," +
                                "\"Tag\":\"Tag101\"," +
                                "\".Tag\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Top\":\"28px\"," +
                                "\".Top\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Left\":\"22px\"," +
                                "\".Left\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Height\":\"426px\"," +
                                "\".Height\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Width\":\"519px\"," +
                                "\".Width\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderColor\":\"#ffffff\"," +
                                "\".BorderColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"TextColor\":\"#ffffff\"," +
                                "\".TextColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BackgroundColor\":\"#ffffff\"," +
                                "\".BackgroundColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Level\":\"2\"," +
                                "\".Level\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BlockBlock\":[" +
                                   "{" +
                                      "\".meta\":{" +
                                         "\"incrementals\":\"UC\"" +
                                      "}," +
                                      "\"Tag\":\"Tag102\"," +
                                      "\".Tag\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Top\":\"19px\"," +
                                      "\".Top\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Left\":\"32px\"," +
                                      "\".Left\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Height\":\"390px\"," +
                                      "\".Height\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Width\":\"470px\"," +
                                      "\".Width\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"BorderColor\":\"#ffffff\"," +
                                      "\".BorderColor\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"TextColor\":\"#ffffff\"," +
                                      "\".TextColor\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"BackgroundColor\":\"#ffffff\"," +
                                      "\".BackgroundColor\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Level\":\"3\"," +
                                      "\".Level\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"BlockBlock\":[" +
                                         "{" +
                                            "\".meta\":{" +
                                               "\"incrementals\":\"UC\"" +
                                            "}," +
                                            "\"Tag\":\"Tag103\"," +
                                            "\".Tag\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"Top\":\"20px\"," +
                                            "\".Top\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"Left\":\"21px\"," +
                                            "\".Left\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"Height\":\"353px\"," +
                                            "\".Height\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"Width\":\"425px\"," +
                                            "\".Width\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"BorderColor\":\"#ffffff\"," +
                                            "\".BorderColor\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"TextColor\":\"#ffffff\"," +
                                            "\".TextColor\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"BackgroundColor\":\"#ffffff\"," +
                                            "\".BackgroundColor\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"Level\":\"4\"," +
                                            "\".Level\":{" +
                                               "\"updated\":\"true\"" +
                                            "}," +
                                            "\"BlockBlock\":[" +
                                               "{" +
                                                  "\".meta\":{" +
                                                     "\"incrementals\":\"UC\"" +
                                                  "}," +
                                                  "\"Tag\":\"Tag104\"," +
                                                  "\".Tag\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"Top\":\"20px\"," +
                                                  "\".Top\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"Left\":\"26px\"," +
                                                  "\".Left\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"Height\":\"313px\"," +
                                                  "\".Height\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"Width\":\"377px\"," +
                                                  "\".Width\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"BorderColor\":\"#ffffff\"," +
                                                  "\".BorderColor\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"TextColor\":\"#ffffff\"," +
                                                  "\".TextColor\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"BackgroundColor\":\"#ffffff\"," +
                                                  "\".BackgroundColor\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"Level\":\"5\"," +
                                                  "\".Level\":{" +
                                                     "\"updated\":\"true\"" +
                                                  "}," +
                                                  "\"BlockBlock\":[" +
                                                     "{" +
                                                        "\".meta\":{" +
                                                           "\"incrementals\":\"UC\"" +
                                                        "}," +
                                                        "\"Tag\":\"Tag105\"," +
                                                        "\".Tag\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"Top\":\"6px\"," +
                                                        "\".Top\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"Left\":\"21px\"," +
                                                        "\".Left\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"Height\":\"286px\"," +
                                                        "\".Height\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"Width\":\"339px\"," +
                                                        "\".Width\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"BorderColor\":\"#ffffff\"," +
                                                        "\".BorderColor\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"TextColor\":\"#ffffff\"," +
                                                        "\".TextColor\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"BackgroundColor\":\"#ffffff\"," +
                                                        "\".BackgroundColor\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"Level\":\"6\"," +
                                                        "\".Level\":{" +
                                                           "\"updated\":\"true\"" +
                                                        "}," +
                                                        "\"BlockBlock\":[" +
                                                           "{" +
                                                              "\".meta\":{" +
                                                                 "\"incrementals\":\"UC\"" +
                                                              "}," +
                                                              "\"Tag\":\"Tag106\"," +
                                                              "\".Tag\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"Top\":\"14px\"," +
                                                              "\".Top\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"Left\":\"14px\"," +
                                                              "\".Left\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"Height\":\"249px\"," +
                                                              "\".Height\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"Width\":\"306px\"," +
                                                              "\".Width\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"BorderColor\":\"#ffffff\"," +
                                                              "\".BorderColor\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"TextColor\":\"#ffffff\"," +
                                                              "\".TextColor\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"BackgroundColor\":\"#ffffff\"," +
                                                              "\".BackgroundColor\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"Level\":\"7\"," +
                                                              "\".Level\":{" +
                                                                 "\"updated\":\"true\"" +
                                                              "}," +
                                                              "\"BlockBlock\":[" +
                                                                 "{" +
                                                                    "\".meta\":{" +
                                                                       "\"incrementals\":\"UC\"" +
                                                                    "}," +
                                                                    "\"Tag\":\"Tag107\"," +
                                                                    "\".Tag\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"Top\":\"9px\"," +
                                                                    "\".Top\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"Left\":\"7px\"," +
                                                                    "\".Left\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"Height\":\"219px\"," +
                                                                    "\".Height\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"Width\":\"278px\"," +
                                                                    "\".Width\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"BorderColor\":\"#ffffff\"," +
                                                                    "\".BorderColor\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"TextColor\":\"#ffffff\"," +
                                                                    "\".TextColor\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"BackgroundColor\":\"#ffffff\"," +
                                                                    "\".BackgroundColor\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"Level\":\"8\"," +
                                                                    "\".Level\":{" +
                                                                       "\"updated\":\"true\"" +
                                                                    "}," +
                                                                    "\"BlockBlock\":[" +
                                                                       "{" +
                                                                          "\".meta\":{" +
                                                                             "\"incrementals\":\"UC\"" +
                                                                          "}," +
                                                                          "\"Tag\":\"Tag108\"," +
                                                                          "\".Tag\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"BlockTitle\":\"block title\"," +
                                                                          "\".BlockTitle\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"BlockSectionType\":\"section type\"," +
                                                                          "\".BlockSectionType\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"Top\":\"5px\"," +
                                                                          "\".Top\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"Left\":\"20px\"," +
                                                                          "\".Left\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"Height\":\"197px\"," +
                                                                          "\".Height\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"Width\":\"238px\"," +
                                                                          "\".Width\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"BorderColor\":\"#e91068\"," +
                                                                          "\".BorderColor\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"TextColor\":\"#2829ad\"," +
                                                                          "\".TextColor\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"BackgroundColor\":\"#c5dab7\"," +
                                                                          "\".BackgroundColor\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"TextAlign\":\"left\"," +
                                                                          "\".TextAlign\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"Level\":\"9\"," +
                                                                          "\".Level\":{" +
                                                                             "\"updated\":\"true\"" +
                                                                          "}," +
                                                                          "\"BlockBlock\":[" +
                                                                             "{" +
                                                                                "\".meta\":{" +
                                                                                   "\"incrementals\":\"UC\"" +
                                                                                "}," +
                                                                                "\"Tag\":\"Tag109\"," +
                                                                                "\".Tag\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"Top\":\"8px\"," +
                                                                                "\".Top\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"Left\":\"19px\"," +
                                                                                "\".Left\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"Height\":\"175px\"," +
                                                                                "\".Height\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"Width\":\"200px\"," +
                                                                                "\".Width\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"BorderColor\":\"#ffffff\"," +
                                                                                "\".BorderColor\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"TextColor\":\"#ffffff\"," +
                                                                                "\".TextColor\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"BackgroundColor\":\"#ffffff\"," +
                                                                                "\".BackgroundColor\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"Level\":\"10\"," +
                                                                                "\".Level\":{" +
                                                                                   "\"updated\":\"true\"" +
                                                                                "}," +
                                                                                "\"BlockBlock\":[" +
                                                                                   "{" +
                                                                                      "\".meta\":{" +
                                                                                         "\"incrementals\":\"UC\"" +
                                                                                      "}," +
                                                                                      "\"Tag\":\"Tag110\"," +
                                                                                      "\".Tag\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"Top\":\"15px\"," +
                                                                                      "\".Top\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"Left\":\"15px\"," +
                                                                                      "\".Left\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"Height\":\"145px\"," +
                                                                                      "\".Height\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"Width\":\"169px\"," +
                                                                                      "\".Width\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"BorderColor\":\"#ffffff\"," +
                                                                                      "\".BorderColor\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"TextColor\":\"#ffffff\"," +
                                                                                      "\".TextColor\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"BackgroundColor\":\"#ffffff\"," +
                                                                                      "\".BackgroundColor\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"Level\":\"11\"," +
                                                                                      "\".Level\":{" +
                                                                                         "\"updated\":\"true\"" +
                                                                                      "}," +
                                                                                      "\"BlockBlock\":[" +
                                                                                         "{" +
                                                                                            "\".meta\":{" +
                                                                                               "\"incrementals\":\"UC\"" +
                                                                                            "}," +
                                                                                            "\"Tag\":\"Tag111\"," +
                                                                                            "\".Tag\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"Top\":\"9px\"," +
                                                                                            "\".Top\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"Left\":\"12px\"," +
                                                                                            "\".Left\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"Height\":\"125px\"," +
                                                                                            "\".Height\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"Width\":\"144px\"," +
                                                                                            "\".Width\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"BorderColor\":\"#ffffff\"," +
                                                                                            "\".BorderColor\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"TextColor\":\"#ffffff\"," +
                                                                                            "\".TextColor\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"BackgroundColor\":\"#ffffff\"," +
                                                                                            "\".BackgroundColor\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"Level\":\"12\"," +
                                                                                            "\".Level\":{" +
                                                                                               "\"updated\":\"true\"" +
                                                                                            "}," +
                                                                                            "\"BlockBlock\":[" +
                                                                                               "{" +
                                                                                                  "\".meta\":{" +
                                                                                                     "\"incrementals\":\"UC\"" +
                                                                                                  "}," +
                                                                                                  "\"Tag\":\"Tag112\"," +
                                                                                                  "\".Tag\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"Top\":\"11px\"," +
                                                                                                  "\".Top\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"Left\":\"18px\"," +
                                                                                                  "\".Left\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"Height\":\"100px\"," +
                                                                                                  "\".Height\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"Width\":\"100px\"," +
                                                                                                  "\".Width\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"BorderColor\":\"#ffffff\"," +
                                                                                                  "\".BorderColor\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"TextColor\":\"#ffffff\"," +
                                                                                                  "\".TextColor\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"BackgroundColor\":\"#ffffff\"," +
                                                                                                  "\".BackgroundColor\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}," +
                                                                                                  "\"Level\":\"13\"," +
                                                                                                  "\".Level\":{" +
                                                                                                     "\"updated\":\"true\"" +
                                                                                                  "}" +
                                                                                               "}" +
                                                                                             "]" +
                                                                                         "}" +
                                                                                       "]" +
                                                                                   "}" +
                                                                                 "]" +
                                                                             "}" +
                                                                           "]" +
                                                                       "}" +
                                                                     "]" +
                                                                 "}" +
                                                               "]" +
                                                           "}" +
                                                         "]" +
                                                     "}" +
                                                   "]" +
                                               "}" +
                                             "]" +
                                         "}" +
                                       "]" +
                                   "}" +
                                 "]" +
                             "}" +
                           "]" +
                       "}," +
                       "{" +
                          "\".meta\":{" +
                             "\"incrementals\":\"UC\"" +
                          "}," +
                          "\"Tag\":\"Tag113\"," +
                          "\".Tag\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Top\":\"109px\"," +
                          "\".Top\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Left\":\"45px\"," +
                          "\".Left\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Height\":\"61px\"," +
                          "\".Height\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Width\":\"87px\"," +
                          "\".Width\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BorderColor\":\"#ffffff\"," +
                          "\".BorderColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"TextColor\":\"#ffffff\"," +
                          "\".TextColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BackgroundColor\":\"#ffffff\"," +
                          "\".BackgroundColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Level\":\"1\"," +
                          "\".Level\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BlockBlock\":[" +
                             "{" +
                                "\".meta\":{" +
                                   "\"incrementals\":\"UC\"" +
                                "}," +
                                "\"Tag\":\"Tag114\"," +
                                "\".Tag\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Top\":\"13px\"," +
                                "\".Top\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Left\":\"13px\"," +
                                "\".Left\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Height\":\"38px\"," +
                                "\".Height\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Width\":\"54px\"," +
                                "\".Width\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderColor\":\"#ffffff\"," +
                                "\".BorderColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"TextColor\":\"#ffffff\"," +
                                "\".TextColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BackgroundColor\":\"#ffffff\"," +
                                "\".BackgroundColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Margin\":\"1.0\"," +
                                "\".Margin\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"MarginTop\":\"1.0\"," +
                                "\".MarginTop\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"MarginBottom\":\"1.0\"," +
                                "\".MarginBottom\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"MarginLeft\":\"1.0\"," +
                                "\".MarginLeft\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"MarginRight\":\"1.0\"," +
                                "\".MarginRight\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Border\":\"2.0\"," +
                                "\".Border\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderTop\":\"2.0\"," +
                                "\".BorderTop\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderBottom\":\"2.0\"," +
                                "\".BorderBottom\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderLeft\":\"2.0\"," +
                                "\".BorderLeft\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderRight\":\"2.0\"," +
                                "\".BorderRight\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Padding\":\"3.0\"," +
                                "\".Padding\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"PaddingTop\":\"3.0\"," +
                                "\".PaddingTop\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"PaddingBottom\":\"3.0\"," +
                                "\".PaddingBottom\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"PaddingLeft\":\"3.0\"," +
                                "\".PaddingLeft\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"PaddingRight\":\"3.0\"," +
                                "\".PaddingRight\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Level\":\"2\"," +
                                "\".Level\":{" +
                                   "\"updated\":\"true\"" +
                                "}" +
                             "}" +
                           "]" +
                       "}" +
                     "]" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel2\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"2\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Height\":\"11\"," +
                    "\".Height\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Width\":\"8.5\"," +
                    "\".Width\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Block\":[" +
                       "{" +
                          "\".meta\":{" +
                             "\"incrementals\":\"UC\"" +
                          "}," +
                          "\"Tag\":\"Tag200\"," +
                          "\".Tag\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Top\":\"143px\"," +
                          "\".Top\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Left\":\"209px\"," +
                          "\".Left\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Height\":\"310px\"," +
                          "\".Height\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Width\":\"335px\"," +
                          "\".Width\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BorderColor\":\"#ffffff\"," +
                          "\".BorderColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"TextColor\":\"#ffffff\"," +
                          "\".TextColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BackgroundColor\":\"#ffffff\"," +
                          "\".BackgroundColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Level\":\"1\"," +
                          "\".Level\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BlockBlock\":[" +
                             "{" +
                                "\".meta\":{" +
                                   "\"incrementals\":\"UC\"" +
                                "}," +
                                "\"Tag\":\"Tag203\"," +
                                "\".Tag\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Top\":\"27px\"," +
                                "\".Top\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Left\":\"60px\"," +
                                "\".Left\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Height\":\"150px\"," +
                                "\".Height\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Width\":\"182px\"," +
                                "\".Width\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderColor\":\"#ffffff\"," +
                                "\".BorderColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"TextColor\":\"#ffffff\"," +
                                "\".TextColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BackgroundColor\":\"#ffffff\"," +
                                "\".BackgroundColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Level\":\"2\"," +
                                "\".Level\":{" +
                                   "\"updated\":\"true\"" +
                                "}" +
                             "}" +
                           "]" +
                       "}" +
                     "]" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel2\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"2\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Block\":[" +
                       "{" +
                          "\".meta\":{" +
                             "\"incrementals\":\"UC\"" +
                          "}," +
                          "\"Tag\":\"Tag201\"," +
                          "\".Tag\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Top\":\"114px\"," +
                          "\".Top\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Left\":\"267px\"," +
                          "\".Left\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Height\":\"283px\"," +
                          "\".Height\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Width\":\"239px\"," +
                          "\".Width\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BorderColor\":\"#ffffff\"," +
                          "\".BorderColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"TextColor\":\"#ffffff\"," +
                          "\".TextColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BackgroundColor\":\"#ffffff\"," +
                          "\".BackgroundColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Level\":\"1\"," +
                          "\".Level\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BlockBlock\":[" +
                             "{" +
                                "\".meta\":{" +
                                   "\"incrementals\":\"UC\"" +
                                "}," +
                                "\"Tag\":\"Tag202\"," +
                                "\".Tag\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Top\":\"31px\"," +
                                "\".Top\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Left\":\"33px\"," +
                                "\".Left\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Height\":\"205px\"," +
                                "\".Height\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Width\":\"173px\"," +
                                "\".Width\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BorderColor\":\"#ffffff\"," +
                                "\".BorderColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"TextColor\":\"#ffffff\"," +
                                "\".TextColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BackgroundColor\":\"#ffffff\"," +
                                "\".BackgroundColor\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"Level\":\"2\"," +
                                "\".Level\":{" +
                                   "\"updated\":\"true\"" +
                                "}," +
                                "\"BlockBlock\":[" +
                                   "{" +
                                      "\".meta\":{" +
                                         "\"incrementals\":\"UC\"" +
                                      "}," +
                                      "\"Tag\":\"Tag204\"," +
                                      "\".Tag\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Top\":\"52px\"," +
                                      "\".Top\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Left\":\"28px\"," +
                                      "\".Left\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Height\":\"100px\"," +
                                      "\".Height\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Width\":\"100px\"," +
                                      "\".Width\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"BorderColor\":\"#ffffff\"," +
                                      "\".BorderColor\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"TextColor\":\"#ffffff\"," +
                                      "\".TextColor\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"BackgroundColor\":\"#ffffff\"," +
                                      "\".BackgroundColor\":{" +
                                         "\"updated\":\"true\"" +
                                      "}," +
                                      "\"Level\":\"3\"," +
                                      "\".Level\":{" +
                                         "\"updated\":\"true\"" +
                                      "}" +
                                   "}" +
                                 "]" +
                             "}" +
                           "]" +
                       "}" +
                     "]" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel3\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"3\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Block\":[" +
                       "{" +
                          "\".meta\":{" +
                             "\"incrementals\":\"UC\"" +
                          "}," +
                          "\"Tag\":\"Tag305\"," +
                          "\".Tag\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Top\":\"220px\"," +
                          "\".Top\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Left\":\"355px\"," +
                          "\".Left\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Height\":\"100px\"," +
                          "\".Height\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Width\":\"100px\"," +
                          "\".Width\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BorderColor\":\"#ffffff\"," +
                          "\".BorderColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"TextColor\":\"#ffffff\"," +
                          "\".TextColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"BackgroundColor\":\"#ffffff\"," +
                          "\".BackgroundColor\":{" +
                             "\"updated\":\"true\"" +
                          "}," +
                          "\"Level\":\"1\"," +
                          "\".Level\":{" +
                             "\"updated\":\"true\"" +
                          "}" +
                       "}" +
                     "]" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel4\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"4\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel5\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"5\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel6\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"6\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel7\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"7\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel8\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"8\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}" +
                 "}," +
                 "{" +
                    "\".meta\":{" +
                       "\"incrementals\":\"UC\"" +
                    "}," +
                    "\"Tag\":\"panel9\"," +
                    "\".Tag\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Order\":\"9\"," +
                    "\".Order\":{" +
                       "\"updated\":\"true\"" +
                    "}," +
                    "\"Level\":\"0\"," +
                    "\".Level\":{" +
                       "\"updated\":\"true\"" +
                    "}" +
                 "}" +
               "]" +
           "}" +
         "]" +
     "}" +
   "]" +
"}";             
var g_JsonLabel = "{ \".oimeta\" : { \"application\" : \"epamms\", \"odName\" : \"TZLLD\", \"fileName\" : \"onCatchException\", \"incremental\" : \"true\" }, " +
                     "\"LLD\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Name\" : \"Drop area ...\" , " +
                     "\"Panel\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"1\" , \"Tag\" : \"panel1\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                     "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"46.21875px\", \"Left\" : \"18px\", \"Height\" : \"415px\", \"Width\" : \"361px\", \"Tag\" : \"Tag100\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"61px\", \"Left\" : \"72px\", \"Height\" : \"160px\", \"Width\" : \"200px\", \"Tag\" : \"Tag101\" , \"Level\" : \"2\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"43px\", \"Left\" : \"69px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag103\" , \"Level\" : \"3\"  } ] }, " +
                     "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"257px\", \"Left\" : \"190px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag102\" , \"Level\" : \"2\"  } ] }, " +
                     "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"55px\", \"Left\" : \"439px\", \"Height\" : \"403px\", \"Width\" : \"182px\", \"Tag\" : \"Tag104\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"64.21875px\", \"Left\" : \"36px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag105\" , \"Level\" : \"2\"  } ] } ]}, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"2\" , \"Tag\" : \"panel2\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                     "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"78px\", \"Left\" : \"82px\", \"Height\" : \"299px\", \"Width\" : \"262px\", \"Tag\" : \"Tag106\" , \"Level\" : \"1\"  }, " +
                     "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"174px\", \"Left\" : \"396px\", \"Height\" : \"297px\", \"Width\" : \"216px\", \"Tag\" : \"Tag107\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"54px\", \"Left\" : \"36px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag108\" , \"Level\" : \"2\"  } ] } ]}, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"3\" , \"Tag\" : \"panel3\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                     "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"47px\", \"Left\" : \"135px\", \"Height\" : \"488px\", \"Width\" : \"415px\", \"Tag\" : \"Tag109\" , \"Level\" : \"1\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"66px\", \"Left\" : \"80px\", \"Height\" : \"311px\", \"Width\" : \"243px\", \"Tag\" : \"Tag110\" , \"Level\" : \"2\" , " +
                     "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"56px\", \"Left\" : \"61px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag111\" , \"Level\" : \"3\"  } ] } ] } ]}, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"4\" , \"Tag\" : \"panel4\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"5\" , \"Tag\" : \"panel5\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"6\" , \"Tag\" : \"panel6\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"7\" , \"Tag\" : \"panel7\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"8\" , \"Tag\" : \"panel8\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                     "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"9\" , \"Tag\" : \"panel9\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\"  } ] } ]} ";

var g_JsonNewLabel1 = " { \"OIs\" : [ { \".oimeta\" : { \"application\" : \"Zeidon_Tools\", \"odName\" : \"TZLLD\", \"incremental\" : true }, " +
                  " \"LLD\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "    \"Tag\" : \"label\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Name\" : \"Drop area ...\", \".Name\" : { \"updated\" : \"true\" }, " +
                  "       \"CSS_FileName\" : \"css\", \".CSS_FileName\" : { \"updated\" : \"true\" }, " +
                  "       \"BackgroundColor\" : \"#b62953\", \".BackgroundColor\" : { \"updated\" : \"true\" }, " +
                  "       \"ContinuationTextPreviousPage\" : \"Continued from previous page\", \".ContinuationTextPreviousPage\" : { \"updated\" : \"true\" }, " +
                  "       \"ContinuationTextNextPage\" : \"Continued on next page\", \".ContinuationTextNextPage\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  " \"Panel\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "            \"Tag\" : \"panel1\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "            \"Order\" : \"1\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "            \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "            \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "            \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "            \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "            \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" }, " +
                  "   \"Block\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "               \"Tag\" : \"Tag100\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "               \"Top\" : \"86px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "               \"Left\" : \"157px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "               \"Height\" : \"443px\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "               \"Width\" : \"490px\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "               \"BorderColor\" : \"#ffffff\", \".BorderColor\" : { \"updated\" : \"true\" }, " +
                  "               \"TextColor\" : \"#ffffff\", \".TextColor\" : { \"updated\" : \"true\" }, " +
                  "               \"BackgroundColor\" : \"#ffffff\", \".BackgroundColor\" : { \"updated\" : \"true\" }, " +
                  "               \"Level\" : \"1\", \".Level\" : { \"updated\" : \"true\" }, " +
                  "      \"BlockBlock\" : [ { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "                       \"Tag\" : \"Tag101\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "                       \"Top\" : \"43px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "                       \"Left\" : \"36px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "                       \"Height\" : \"175px\", \".Height\" : { \"updated\" : \"true\"  }, " +
                  "                       \"Width\" : \"179px\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "                       \"BorderColor\" : \"#e36262\", \".BorderColor\" : { \"updated\" : \"true\" }, " +
                  "                       \"TextColor\" : \"#4050dc\", \".TextColor\" : { \"updated\" : \"true\" }, " +
                  "                       \"BackgroundColor\" : \"#5ce73b\", \".BackgroundColor\" : { \"updated\" : \"true\" }, " +
                  "                       \"Level\" : \"2\", \".Level\" : { \"updated\" : \"true\" } } ] } ] }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "        \"Tag\" : \"panel2\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "        \"Order\" : \"2\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "        \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "        \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "        \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "        \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "        \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel3\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"3\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel4\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"4\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel5\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"5\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel6\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"6\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel7\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"7\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel8\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"8\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } }, " +
                  "  { \".meta\" : { \"incrementals\" : \"UC___\" }, " +
                  "       \"Tag\" : \"panel9\", \".Tag\" : { \"updated\" : \"true\" }, " +
                  "       \"Order\" : \"9\", \".Order\" : { \"updated\" : \"true\" }, " +
                  "       \"Top\" : \"0px\", \".Top\" : { \"updated\" : \"true\" }, " +
                  "       \"Left\" : \"0px\", \".Left\" : { \"updated\" : \"true\" }, " +
                  "       \"Height\" : \"9in\", \".Height\" : { \"updated\" : \"true\" }, " +
                  "       \"Width\" : \"8.5in\", \".Width\" : { \"updated\" : \"true\" }, " +
                  "       \"Level\" : \"0\", \".Level\" : { \"updated\" : \"true\" } } ] " +
                  "        } ] " +
                  "      } ] " +
                  "   }";

var g_JsonStore = " { \"store\": { " +
                  "  \"book\": [  " +
                  "    { \"category\": \"reference\", " +
                  "      \"author\": \"Nigel Rees\", " +
                  "      \"title\": \"Sayings of the Century\", " +
                  "      \"price\": 8.95 " +
                  "    }, " +
                  "    { \"category\": \"fiction\", " +
                  "      \"author\": \"Evelyn Waugh\", " +
                  "      \"title\": \"Sword of Honour\", " +
                  "      \"price\": 12.99 " +
                  "    }, " +
                  "    { \"category\": \"fiction\", " +
                  "      \"author\": \"Herman Melville\", " +
                  "      \"title\": \"Moby Dick\", " +
                  "      \"isbn\": \"0-553-21311-3\", " +
                  "      \"price\": 8.99 " +
                  "    }, " +
                  "    { \"category\": \"fiction\", " +
                  "      \"author\": \"J. R. R. Tolkien\", " +
                  "      \"title\": \"The Lord of the Rings\", " +
                  "      \"isbn\": \"0-395-19395-8\", " +
                  "      \"price\": 22.99 " +
                  "    } " +
                  "  ], " +
                  "  \"bicycle\": { " +
                  "    \"color\": \"red\", " +
                  "    \"price\": 19.95 " +
                  "  } " +
                  "  } " +
                  "  }";

var storageSession = window.sessionStorage;

function trimLeadingAndTrailingWhiteSpace( text ) {  // should be equivalent to javascript trim
   return text.replace( /^\s+|\s+$/g, "" );
}

function trimLeadingWhiteSpace( text ) {
   return text.replace( /^\s+/, "" );
}

function stripTrailingWhiteSpace( text ) {
   return text.replace( /\s+$/, "" );
}

function isWhiteSpace( ch ) {
   return " \t\n\r\v".indexOf( ch ) >= 0;
}

function capitalize( text ) {
   return text.charAt( 0 ).toUpperCase() + text.slice( 1 ).toLowerCase();
}

if (typeof( String.prototype.localeCompare) === "undefined" ) {
   String.prototype.localeCompare = function( s, locale, options ) {
      return ((this === s) ? 0 : ((this > s) ? 1 : -1));
   };
}

function strcmp( s1, s2 ) {
   return ((s1 === s2) ? 0 : ((s1 > s2) ? 1 : -1));
}

function MultiplyString( num, str ) {
   var sb =[];
   for ( var k = 0; k < num && k < 10; k++ ) {
      sb.push( str );
   }
   return sb.join( "" );
}

function buildTab( indent, file ) {
   var tab = "";
   for ( var k = 0; k < indent && k < 100; k++ ) {
      if ( file ) {
         tab += window.SINGLE_TAB;
      } else {
         tab += window.DOUBLE_TAB;
      }
   }
   return tab;
}
/*
function IsArray( obj ) {
   var a = $.isArray( obj );
   var b = obj &&
          typeof obj === "object" &&
          typeof obj.length === "number" &&
          !(obj.propertyIsEnumerable( "length" ));
   if ( a != b ) {
      console.log( "Different evaluations of IsArray" );
   }
   return a;
}
*/
function testJsonPath() {
   var jsonObject = jsonStringToJsonObject( g_JsonStore );
   var arg1 = "$..author";
   var arg2 = {resultType:"PATH"};
   var res1 = jsonPath( jsonObject, arg1 );
   var res2 = jsonPath( jsonObject, arg1, arg2 );
   var x1 = res1.toString();
   var x2 = res2.toString();
   console.log( "res1: " + res1 );
   console.log( "res2: " + res2 );
}

function jsonStringToJsonObject( jsonString ) {
   var jsonObject = jQuery.parseJSON( "[" + jsonString + "]" );  // this is faster and more secure than eval
   return jsonObject;
}

/*
function getLastEntity( jsonObj ) {
var fruitObject = { "a" : "apple", "b" : "banana", "c" : "carrot" };
Object.keys(fruitObject); // this returns all properties in an array ["a", "b", "c"]
fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]] // "carrot"
*/

function simpleTraverseJsonObject( jsonObject ) {
   if ( typeof jsonObject === "object" ) {
      $.each( jsonObject, function( key, value ) {
         // key is either an array index or object key
         simpleTraverseJsonObject( value );
      });
   } else if ( jsonObject !== null ) {
      // jsonObj is a number or string
      console.log( jsonObject );
   }
}

/*
   function addZeidonAttributeToElement( $element, attribute, value ) {
      if (typeof value === "string" || typeof value === "number" ) {
         var key = zeidonAttributeToKey( attribute );
         console.log( "addZeidonAttributeToElement: " + $element.attr( "id" ) + "  key: " + key + "  value: " + value );
         $element.data( key, value );
      }
   }           for ( var prop in obj ) {
               if ( typeof obj[prop] === "string" ) {
               // if ( prop === "Tag" || prop === "Top" || prop === "Left" || prop === "Height" || prop === "Width" || prop === "Order" ) {
               //    continue;
               // } else {
                     addZeidonAttributeToElement( $element, prop, obj[prop] );
               // }
               }
            }
*/

/*
var setParentOrig = function( o ) {
   if ( typeof o === "object" ) {
      for ( var n in o ) {
         if ( typeof n === "object" ) {
            setParentOrig( n );
            n["..parentO"] = o;
         }
      }
   }
}
*/

// called with every property and its value
function logKeyValue( key, value, indent ) {
   var tab = buildTab( indent, true );
   console.log( tab + key + " : " + value );
}

function logJsonObject( jsonObject, callback, indent, showAll ) {
   for ( var prop in jsonObject ) {
      if ( jsonObject[prop] !== null && typeof( jsonObject[prop] ) === "object" ) {
         if ( prop.charAt( 0 ) !== "." || (showAll === true && prop.charAt( 1 ) !== ".") ) {
            var tab = buildTab( indent, true );
         // console.log( "Object: " + jsonObject[key].toString() );
            if ( $.isArray( jsonObject[prop] ) ) {
               console.log( tab + "Array: " + prop + "  length: " + jsonObject[prop].length );
            } else {
               console.log( tab + "Object: " + prop );
            }
            // going one step down in the object tree!!
            logJsonObject( jsonObject[prop], callback, indent + 1, showAll );
         }
      } else {
      // console.log( key + " : " + jsonObject[key] );
         callback.apply( this, [prop, jsonObject[prop], indent] );
      }
   }
}

function logZeidonJsonObject( jsonObject, entity, showAll ) {
   var typeObj = typeof jsonObject;
   if ( typeObj === "object" ) {
      if ( $.isArray( jsonObject ) === false ) {
         var typeProp;
      // for ( var prop in jsonObject ) {
      //    console.log( "logZeidonObject prop: " + prop + " type: " + typeof( prop ) + "  type objprop: " + typeof( jsonObject[prop] ) );
      // }
         for ( var prop in jsonObject ) {
            typeProp = typeof jsonObject[prop];
            if ( typeProp === "object" ) {
            // console.log( "logZeidonObject Object: " + prop );
            // if ( prop !== "..parentO" && prop !== "..parentA" && prop !== ".meta" && prop !== ".oimeta" ) {
               if ( prop.charAt( 0 ) !== "." || (showAll === true && prop.charAt( 1 ) !== ".") ) {
               // console.log( "logZeidonObject Entity: " + prop + "   Absolute Position ==> " + jsonObject[prop][0][".hierNbr"] );
                  logZeidonJsonObject( jsonObject[prop], prop, showAll );
               }
            } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
            // console.log( "logZeidonObject " + typeProp + " key : value ==> " + prop + " : " + jsonObject[prop] );
            } else if ( typeProp === "boolean" ) {
            // console.log( "logZeidonObject boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
            } else {
               console.log( "logZeidonObject Unknown: " + typeProp + "  Object: " + jsonObject );
            }
         }
      } else {
      // console.log( "Array: " + jsonObject.length );
         if ( entity !== null && typeof( jsonObject[0] ) === "object" ) {
            for ( var k = 0; k < jsonObject.length; k++ ) {
               console.log( "logZeidonObject Showing Absolute Position: " + jsonObject[k][".hierNbr"] + "  Entity: " + entity + "  Tag: " + jsonObject[k]["Tag"] + "   Cursor: " + k );
               logZeidonJsonObject( jsonObject[k], null );
            }
         } else {
            console.log( "logZeidonObject Unknown Array object: " + typeof( jsonObject[0] ) + "  Object: " + jsonObject[0] );
            for ( var k = 0; k < jsonObject.length; k++ ) {
               logZeidonJsonObject( jsonObject[k], null, showAll );
            }
         }
      }
   } else {
      console.log( "logZeidonObject Unexpected: " + jsonObject );
   }
}

function initCursors( jsonObject, entity, cursors, parentObj, hierNbr ) {
   if ( typeof jsonObject === "object" ) {
      if ( $.isArray( jsonObject ) ) {
      // console.log( "initCursors Array: " + jsonObject.length );
         if ( entity !== null && typeof( jsonObject[0] ) === "object" ) {
            if ( cursors.get( entity ) === null ) {
               cursors.add( entity, jsonObject[0] );
            }
            for ( var k = 0; k < jsonObject.length; k++ ) {
               hierNbr++;
               console.log( "initCursors Setting Absolute Position: " + jsonObject[k] + "  Entity: " + jsonObject[k]["Tag"] + "   Absolute Position: " + hierNbr );
               jsonObject[k][".hierNbr"] = hierNbr;
               hierNbr = initCursors( jsonObject[k], null, cursors, jsonObject, hierNbr );
               jsonObject[k]["..parentA"] = jsonObject;
               jsonObject[k]["..parentO"] = parentObj;
               jsonObject[k][".entity"] = entity;
            }
         } else {
            console.log( "initCursors Unknown Array object: " + typeof( jsonObject[0] ) + "  Object: " + jsonObject[0] );
            for ( var k = 0; k < jsonObject.length; k++ ) {
               hierNbr = initCursors( jsonObject[k], null, cursors, parentObj, hierNbr );
            }
         }
      } else { // it's not an array
         var typeProp;
         for ( var prop in jsonObject ) {
            typeProp = typeof jsonObject[prop];
            if ( typeProp === "object" ) {
            // console.log( "initCursors Object: " + prop );
               if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
                  if ( $.isArray( jsonObject[prop] ) && typeof( jsonObject[prop][0] ) === "object" ) {
                     hierNbr = initCursors( jsonObject[prop], prop, cursors, parentObj, hierNbr );
                  } else {
                     console.log( "initCursors Unknown Subobject: " + typeProp + "  Object: " + jsonObject );
                  }
               }
            } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
            // console.log( "initCursors " + typeProp + " key : value ==> " + prop + " : " + jsonObject[prop] );
            } else if ( typeProp === "boolean" ) {
            // console.log( "initCursors boolean key : value ==> " + prop + " : " + jsonObject[prop] ? "Y" : "N" );
            } else {
               console.log( "initCursors Unknown: " + typeProp + "  Object: " + jsonObject );
            }
         }
      }
   } else {
      console.log( "initCursors Unexpected: " + jsonObject );
   }
   return hierNbr;
}

function setHierarchicalJsonObject( jsonObject, rootEntity, cursors ) {
   var obj;
   var returnObj;
   var typeProp;
   if ( typeof jsonObject === "object" ) {
      for ( var prop in jsonObject ) {
         typeProp = typeof prop;
         if ( typeProp === "string" ) {
            if ( prop === "OIs" ) {
               obj = jsonObject[prop];
               if ( $.isArray( obj ) ) {
                  for ( var k = 0; k < obj.length; k++ ) {
                     if ( typeof obj[k] === "object" ) {
                        var containerObj = obj[k];
                        for ( prop in containerObj ) {
                           if ( typeof prop === "string" && prop === rootEntity ) {
                              var entityCursor = cursors.get( "_" );
                              if ( entityCursor === null ) {
                                 entityCursor = new ZeidonEntityCursor( rootEntity, null, null, null );
                              }
                              entityCursor.setEI( obj, k );
                              cursors.add( "_", entityCursor );
                              setHierarchicalJsonObjectRecurse( containerObj[prop], null, cursors, null, 0 );
                              return containerObj;
                           }
                        }
                     }
                  }
               }
            } else if ( prop.charAt( 0 ) !== "." ) {
               returnObj = setHierarchicalJsonObject( jsonObject[prop], rootEntity, cursors );
               if ( returnObj ) {
                  return returnObj;
               }
            }
         } else if ( typeProp === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               obj = jsonObject[prop];
               if ( obj !== null ) {
                  typeObj = typeof obj;
                  if ( typeObj === "object" ) {
                     returnObj = setHierarchicalJsonObject( jsonObject[prop], rootEntity, cursors );
                     if ( returnObj ) {
                        return returnObj;
                     }
                  }
               }
            }
         }
      }
   }
   return null;
}

function setHierarchicalJsonObjectRecurse( jsonObject, entity, cursors, parentObj, hierNbr ) {
   var obj;
   var typeObj;
   if ( typeof jsonObject === "object" ) {
      for ( var prop in jsonObject ) {
         obj = jsonObject[prop];
         if ( obj !== null ) {
            typeObj = typeof obj;
            if ( typeObj === "object" ) {
               if ( prop.charAt( 0 ) !== "." ) {  // ..parentA ..parentO .meta .oimeta
                  console.log( "setHierarchicalJsonObjectRecurse Object: " + prop );
                  if ( $.isArray( obj ) ) {
                     console.log( "setHierarchicalJsonObjectRecurse Array: " + prop + "  length: " + obj.length );
                     if ( prop !== null && typeof( obj[0] ) === "object" ) {
                        var entityCursor;
                        if ( prop === "OIs" ) {
                           entityCursor = cursors.get( "_" );
                        } else {
                           entityCursor = cursors.get( prop );
                        }
                        if ( entityCursor && entityCursor.getEI() === null ) {
                           entityCursor.setEI( obj, obj.length > 0 ? 0 : -1 );
                        }
                        for ( var k = 0; k < obj.length; k++ ) {
                           hierNbr++;
                           console.log( "setHierarchicalJsonObjectRecurse Setting Absolute Position: " + obj[k]["Tag"] + "  Entity: " + prop + "   Absolute Position: " + hierNbr );
                           obj[k][".hierNbr"] = hierNbr;
                           obj[k]["..parentA"] = obj;
                           obj[k]["..parentO"] = parentObj;
                           obj[k][".entity"] = prop;
                           hierNbr = setHierarchicalJsonObjectRecurse( obj[k], null, cursors, obj[k], hierNbr );
                        // cursors.findParentEntity( prop );
                        }
                     } else {
                        console.log( "setHierarchicalJsonObjectRecurse Unknown Array object: " + typeof( obj[0] ) + "  Object: " + obj[0] );
                        for ( var k = 0; k < obj.length; k++ ) {
                           hierNbr = setHierarchicalJsonObjectRecurse( obj[k], null, cursors, obj, hierNbr );
                        }
                     }
                  } else {
                     console.log( "Object: " + prop );
                     if ( entity ) {
                        hierNbr++;
                        obj[".hierNbr"] = hierNbr;
                        obj["..parentO"] = parentObj;
                     }
                     // going one step down in the object tree!!
                     hierNbr = setHierarchicalJsonObjectRecurse( obj, null, cursors, obj, hierNbr );
                  }
               }
          /* } else {
               // func.apply( this, [prop, obj, 1] );
               if ( typeObj === "string" || typeObj === "number" || typeObj === "function" || typeObj === "undefined" ) {
               // console.log( "setHierarchicalJsonObjectRecurse " + typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeObj === "boolean" ) {
               // console.log( "setHierarchicalJsonObjectRecurse boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "setHierarchicalJsonObjectRecurse Unknown: " + typeObj + "  Object: " + jsonObject );
               } */
            }
         }
      }
   } else {
      console.log( "setHierarchicalJsonObjectRecurse Unexpected: " + jsonObject );
   }
   return hierNbr;
}

var ZeidonEntityCursor = function( entity, parentEntity, recursive, derived ) {
   var _entity;  // don't think we need entity ... remove for deployment!!!
   var _parentEntity; // parent entity name
   var _recursive;
   var _derived;
   var _array = null; // entity instance container
   var _cursor = -1; // current cursor position (-1 ==> unset)

   (function() {
      console.log( "Adding ZeidonEntityCursor: " + entity + "  Parent: " + parentEntity + "  Recursive:" + recursive + "  Derived:" + derived );
      _entity = entity;
      _parentEntity = parentEntity;
      _recursive = recursive;
      _derived = derived;
      _array = null;
      _cursor = -1;
   })();

   this.setEI = function( array, cursor ) {
      if ( $.isArray( array ) === false ) {
         throw new Error( "setEI: Object must be an array for entity: " + _entity );
      }
      _array = array;
      _cursor = cursor;
      return this;
   };

   this.getEI = function() {
      if ( _array && _cursor >= 0 ) {
         return _array[_cursor];
      } else {
         return null;
      }
   };

   this.getArray = function() {
      return _array;
   };

   this.getCursor = function() {
      return _cursor;
   };

   this.getParent = function() {
      return _parentEntity;
   };

   this.getRecursive = function() {
      return _recursive;
   };

   this.getDerived = function() {
      return _derived;
   };

   this.getEntity = function() {
      return _entity;
   };

   this.clear = function() {
      _array = null;
      _cursor = -1;
   };
};

var ZeidonViewCursors = function() {
   var _db = [];
   var _keyType;
   var _valueType;
   var _root;

   (function() {
      _keyType = "string";
      _valueType = "object";
      _root = null;
   })();

   var getIndexOfKey = function( key ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be " + _keyType );
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return k;
         }
      }
      return -1;
   };

   this.getRoot = function() {
      return _root;
   }

   this.loadLod = function( lodObject, parentEntity ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               var entity = parentEntity;
               if ( $.isArray( lodObject[prop] ) ) {
               // console.log( "Array: " + prop + "  length: " + lodObject[prop].length );
                  for ( var k = 0; k < lodObject[prop].length; k++ ) {
                     entity = lodObject[prop][k].Name;
                     if ( entity ) {
                        var entityCursor;
                     // console.log( "Found Entity: " + entity + "  Parent: " + parentEntity );
                        if ( prop === "Object"  ) {
                           entityCursor = new ZeidonEntityCursor( entity, null, null, null );
                           this.add( "_", entityCursor );
                        } else if ( prop === "Root" ) {
                           _root = entity;
                           parentEntity = "_";
                        }
                        if ( _root ) {
                           entityCursor = new ZeidonEntityCursor( entity, parentEntity, lodObject[prop][k].Recursive, lodObject[prop][k].Derived );
                           this.add( entity, entityCursor );
                        } else {
                           // this is the name of the LOD ... put it in a global hashmap
                           if ( ! globalLods.get( entity ) ) {
                              globalLods.add( entity, this ); // add this LOD to the global hashmap
                           }
                        }
                        // going one step down in the object tree!!
                        console.log( "Object0: " + prop );
                        this.loadLod( lodObject[prop][k], entity );
                     } else {
                        // going one step down in the object tree!!
                        console.log( "Object1: " + prop );
                        this.loadLod( lodObject[prop], parentEntity );
                     }
                  }
               } else {
                  // going one step down in the object tree!!
                  console.log( "Object2: " + prop );
                  this.loadLod( lodObject[prop], parentEntity );
               }
            }
         } else {
         // console.log( "Attribute ==> " + prop + " : " + lodObject[prop] );
         }
      }
   };
/*
   this.loadLod = function( lodObject, parentEntity ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               if ( $.isArray( lodObject[prop] ) ) {
                  console.log( "Array: " + prop + "  length: " + lodObject[prop].length );
                  if ( prop === "Root"  ) {
                     _root = lodObject[prop][0].Name;
                     parentEntity = _root;
                     entityCursor = new ZeidonEntityCursor( _root );
                     this.add( parentEntity, entityCursor );
                  } else if ( prop === "Entity" ) {
                     var entity = lodObject[prop][0].Name;
                     console.log( "Found Entity: " + entity + "  Parent: " + parentEntity );
                     entityCursor = new ZeidonEntityCursor( entity );
                     this.add( entity, entityCursor );
                     parentEntity = lodObject.Name;
                  }
               } else {
                  console.log( "Object: " + prop );
               }
               // going one step down in the object tree!!
               this.loadLod( lodObject[prop], parentEntity );
            }
         } else {
            console.log( prop + " : " + lodObject[prop] );
         }
      }
   };
*/
   this.logLod = function( lodObject, parent ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               if ( $.isArray( lodObject[prop] ) ) {
                  if ( prop === "Entity" || prop === "Root" ) {
                     for ( var k = 0; k < lodObject[prop].length; k++ ) {
                        var entity = lodObject[prop][k].Name;
                        var recursive = lodObject[prop][k].Recursive;
                        var derived = lodObject[prop][k].Derived;
                        var message = prop + ": " + entity + "  Parent: " + parent;
                        if ( recursive )
                           message += "  Recursive";
                        if ( derived )
                           message += "  Derived";
                        console.log( message );
                        // going one step down in the object tree!!
                        this.logLod( lodObject[prop][k], entity );  // we know this is mandatory
                     }
                  } else {
                     if ( prop === "OIs" || prop === "Object" ) {
                        console.log( "Container: " + prop + "  length: " + lodObject[prop].length  );
                     } else {
                        console.log( "Array: " + prop + "  length: " + lodObject[prop].length );
                     }
                     // going one step down in the object tree!!
                     this.logLod( lodObject[prop], parent );
                  }
               } else {
                  // going one step down in the object tree!!
               // console.log( "Non-Array: " + prop );
                  this.logLod( lodObject[prop], parent );
               }
            }
         }
      }
   };

   this.resetEntityCursors = function() {
      this.iterate( function( k, v ) {
         if ( k !== "_" ) { // forget the top container ... not a real entity, but does hold the "container entity"
            console.log( "Reset cursors for: " + v.getEntity() );
            v.clear();
         }
      });
   };

/*
   this.resetEntityCursors = function() {
      this.privateResetEntityCursors( _lodObject );
   }

   this.privateResetEntityCursors = function( lodObject ) {
      for ( var prop in lodObject ) {
         if ( lodObject[prop] !== null && typeof( lodObject[prop] ) === "object" ) {
            if ( prop.charAt( 0 ) !== "." ) {
               if ( $.isArray( lodObject[prop] ) ) {
                  if ( prop === "Entity" || prop === "Root" ) {
                     for ( var k = 0; k < lodObject[prop].length; k++ ) {
                        var entity = lodObject[prop][k].Name;
                        var entityCursor = this.get( entity );
                        if ( entityCursor ) {
                           entityCursor.clear();
                           console.log( "Reset cursors for: " + entity );
                        } else {
                           console.log( "No reset for entity: " + entity );
                        }
                        // going one step down in the object tree!!
                        this.privateResetEntityCursors( lodObject[prop][k] );
                     }
                  } else {
                     // going one step down in the object tree!!
                     console.log( "Skipping: " + prop );
                     this.privateResetEntityCursors( lodObject[prop] );
                  }
               } else {
                  console.log( "Non-Array: " + prop );
                  this.privateResetEntityCursors( lodObject[prop] );
               }
            }
         }
      }
   };
*/

   this.add = function( key, value ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be " + _keyType );
      } else if ( value !== null && typeof value !== _valueType ) {
         throw new Error( "Type of value should be " + _valueType );
      }
      var index = getIndexOfKey( key );
      if ( index === -1 ) {
         _db.push( [key, value] );
      } else {
         _db[index][1] = value;
      }
      return this;
   };

   this.get = function( key ) {
      if ( typeof key !== _keyType || _db.length === 0 ){
         return null;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return _db[k][1];
         }
      }
      return null;
   };

   this.size = function() {
      return _db.length;
   };

   this.keys = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][0] );
      }
      return result;
   };

   this.values = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][1] );
      }
      return result;
   };

   this.toString = function() {
      var result;
      if ( _db.length > 0 ) {
         result = "{ ";
         for ( var k = 0; k < _db.length; k++ ) {
            result += "{ " + _db[k][0] + " : " + _db[k][1] + " }";
         }
         result += " }";
      } else {
         result = "{}";
      }
      return result;
   };

   this.iterate = function( callback ) {
      if ( _db.length === 0 ) {
         return false;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === _root ) {
            while ( k < _db.length ) {
               callback( _db[k][0], _db[k][1] );
               k++;
            }
            return true;
         }
      }
      return false;
   };

   this.removeItem = function( key ) {
      var k = getIndexOfKey( key );
      var item = null;
      if ( k >= 0 ) {
         item = _db[k][1];
         while ( k < _db.length ) {
            _db[k][0] = _db[k + 1][0];
            _db[k][1] = _db[k + 1][1];
            k++;
         }
         _db.length--;
         _db[_db.length][0] = null;
         _db[_db.length][1] = null;
      }
      return item;
   };

   this.clear = function() {
      _db.length = 0;
      _db = [];
   };

   this.display = function() {
      var ei;
      this.iterate( function( k, v ) {
         if ( k !== "_" ) { // forget the top container ... not a real entity
            ei = v.getEI();
            if ( ei ) {
               console.log( "Entity: " + k + "   Absolute Entity: " + ei[".hierNbr"] + "   Cursor: " + v.getCursor() );
            } else {
               console.log( "Entity: " + k + "   No Cursor" );
            }
         }
      });
   };

   this.logHierarchy = function( entity, attribute ) {
      var entityObj = this.get( entity );
      if ( entityObj ) {
         var indent = 0;
         var parentObj = entityObj["..parentO"];
         if ( parentObj ) {
            indent = this.logHierarchy( parentObj[".entity"], attribute );
         }
         var tab = buildTab( indent, true );
         console.log( tab + entity + "  " + attribute + ": " + entityObj[attribute] );
         return indent + 1;
      }
      return 0;
   };

   this.findParentEntity = function( entity ) {
      var entityCursor = this.get( entity );
      if ( entityCursor ) {
         if ( entityCursor.getEntity() !== entity ) {
            console.log( "findParentEntity encountered entity mismatch: " + entity + "   getEntity: " + entityCursor.getEntity() );
            return null;
         }
         console.log( "findParentEntity of: " + entity + "  ==> " +  entityCursor.getParent() + "   Cursor: " + entityCursor.getCursor() );
         return entityCursor.getParent();
      }
      return null;
   };

   this.searchForEntityByValue = function( entityObj, searchAttribute, searchValue, position, cursorIdx ) {
      var k;
      switch ( position ) {
         case 1: // POS_FIRST
            k = 0;
            break;
         case 2: // POS_LAST
            k = entityObj.length - 1;
            break;
         case 3: // POS_NEXT
            k = cursorIdx + 1;
            break;
         case 4: // POS_PREV
            k = cursorIdx - 1;
            break;
         default:
            k = cursorIdx;
            console.log( "Invalid position parameter: " + position );
      }
      if ( searchAttribute ) {
         if ( position === 1 || position === 3 ) { // POS_FIRST or POS_NEXT
            while ( k < entityObj.length ) {
               if ( entityObj[k][searchAttribute] === searchValue ) {
                  break;
               }
               k++;
            }
         } else if ( position === 2 || position === 4 ) { // POS_LAST or POS_PREV
            while ( k >= 0 ) {
               if ( entityObj[k][searchAttribute] === searchValue ) {
                  break;
               }
               k--;
            }
         }
      }
      if ( k < 0 || k >= entityObj.length ) {
         k = cursorIdx;
      }

      return k;
   };

   // If searchAttribute is not null, look for the first/last/next/prev instance of searchEntity with the attribute value specified by searchValue, otherwise,
   // just look for the first/last/next/prev instance of searchEntity meeting the given criteria.
   // If position is not POS_NONE, reset the cursors if the requested entity instance is located.  Respect parentage if scopingEntity is specified (i.e.  only
   // entities hierarchically below the scoping entity can change position).
   // Position may be one of five values: POS_NONE = 0; POS_FIRST = 1; POS_LAST = 2; POS_NEXT = 3; POS_PREV = 4.
   // Note that that "path" and "recurse" parameters are for testing purposes only and should be removed prior to deployment.
   // So far newParent is not used and map should not be necessary ... remove before deployment?
   this.locateEntity = function( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, entity, newParent, map, recurse, path ) {
// this.locateEntity = function( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, entity, newParent, map ) {
      var entityCursor;
      var cursorIdx;
      var rc = -4;
      if ( typeof entityObj === "object" ) {
         console.log( "locateEntity coming through path: " + path + "   recurse: " + recurse );
         if ( $.isArray( entityObj ) ) {
            var k;
         // console.log( "locateEntity Array: " + jsonObject.length );
            if ( entity !== null && typeof( entityObj[0] ) === "object" ) {
               entityCursor = this.get( entity );
               cursorIdx = entityCursor.getCursor();
               if ( entity === searchEntity ) { // we are at the correct entity
                  k = this.searchForEntityByValue( entityObj, searchAttribute, searchValue, position, cursorIdx );
                  if ( k >= 0 ) {
                  // map.add( entity, entityObj );
                     if ( position ) {
                        this.resetEntityCursors();
                        console.log( "locateEntity1 resetting EI for entity: " + entity );
                        entityCursor.setEI( entityObj, k );
                        this.resetChildCursors( entityObj[k], entity, map );
                     }
                     if ( k === cursorIdx ) {
                        if ( position === 3 || position === 4 ) { // POS_NEXT or POS_PREV
                           return -1; // CURSOR_UNCHANGED
                        }
                     }
                     return 0; // CURSOR_SET
                  } else {
                     return -2; // CURSOR_UNDEFINED
                  }
               } else { // we are hierarchically above the entity we are looking for
                  if ( belowScope === false ) { // can't move parentage at this level
                     if ( entity === scopingEntity ) {
                        belowScope = true;
                     }
                     rc = this.locateEntity( entityObj[cursorIdx], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, null, newParent, map, recurse + 1, "A2" );
                     if ( rc > -4 ) {
                     // map.add( entity, entityObj );
                        if ( position ) {
                           console.log( "locateEntity2 resetting EI for entity: " + entity );
                           entityCursor.setEI( entityObj, cursorIdx );
                           this.resetChildCursors( entityObj[cursorIdx], entity, map );
                        }
                        return rc;
                     }
                  } else { // so parentage is permitted to change at this level
                     if ( position === 1 || position === 3 ) { // POS_FIRST or POS_NEXT
                        for ( k = (position === 1) ? 0 : cursorIdx; k < entityObj.length; k++ ) {
                           rc = this.locateEntity( entityObj[k], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, null, newParent, map, recurse + 1, "A1" );
                           if ( rc > -4 ) {
                           // map.add( entity, entityObj );
                              console.log( "locateEntity3 resetting EI for entity: " + entity );
                              entityCursor.setEI( entityObj, k );
                              this.resetChildCursors( entityObj[k], entity, map );
                              if ( position === 1 || k === cursorIdx ) {
                                 return rc;
                              } else {
                                 return -2; // CURSOR_SET_NEWPARENT
                              }
                           }
                        }
                     } else if ( position === 2 || position === 4 ) { // POS_LAST or POS_PREV
                        for ( k = (position === 2) ? entityObj.length - 1 : cursorIdx; k >= 0; k-- ) {
                           rc = this.locateEntity( entityObj[k], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, null, newParent, map, recurse + 1, "A2" );
                           if ( rc > -4 ) {
                           // map.add( entity, entityObj );
                              console.log( "locateEntity4 resetting EI for entity: " + entity );
                              entityCursor.setEI( entityObj, k );
                              this.resetChildCursors( entityObj[k], entity, map );
                              if ( position === 2 || k === cursorIdx ) {
                                 return rc;
                              } else {
                                 return -2; // CURSOR_SET_NEWPARENT
                              }
                           }
                        }
                     } else {
                        console.log( "Locating entity has an invalid position parameter: " + position );
                     }
                  }
               }
            }
         } else { // it's not an array
            var typeProp;
            for ( var prop in entityObj ) {
               typeProp = typeof entityObj[prop];
               if ( typeProp === "object" ) {
                  console.log( "locateEntity Object: " + prop );
                  if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
                     if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                        entityCursor = this.get( prop );
                        cursorIdx = entityCursor.getCursor();
                        rc = this.locateEntity( entityObj[prop], searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, prop, cursorIdx, map, recurse + 1, "C" );
                        if ( rc > -4 ) {
                           console.log( "locateEntity1A resetting EI for entity: " + entity );
                           this.display();
                           entityCursor.setEI( entityObj[prop], cursorIdx );
                           console.log( "locateEntity1B resetting EI for entity: " + entity );
                           this.display();
                           this.resetChildCursors( entityObj[prop][cursorIdx], prop, map );
                           console.log( "locateEntity1C resetting EI for entity: " + entity );
                           this.display();
                           return rc; // do not reset entityCursor here
                        }
                     } else {
                        console.log( "locateEntity Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
                     }
                  }
            /* } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
                  console.log( "locateEntity " + typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeProp === "boolean" ) {
                  console.log( "locateEntity boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "locateEntity Unknown: " + typeProp + "  Object: " + entityObj ); */
               }
            }
         }
      } else {
         console.log( "locateEntity Unexpected: " + entityObj );
      }
      return rc;
   };

   this.resetChildCursors = function( entityObj, entity, map ) {
      var typeProp;
      for ( var prop in entityObj ) {
         typeProp = typeof entityObj[prop];
         if ( typeProp === "object" ) {
            if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
               if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                  this.resetChildCursorsRecurse( entityObj[prop], prop, map );
               } else {
                  console.log( "Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
               }
            }
      /* } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
            console.log( typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
         } else if ( typeProp === "boolean" ) {
            console.log( "boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
         } else {
            console.log( "Unknown: " + typeProp + "  Object: " + entityObj ); */
         }
      }
   }
   this.resetChildCursorsRecurse = function( entityObj, entity, map ) {
      if ( typeof entityObj === "object" ) {
         if ( $.isArray( entityObj ) ) {
            if ( entity !== null && typeof( entityObj[0] ) === "object" ) {
               var eo = this.get( entity );
               if ( eo ) {
                  if ( eo.getEI() === null ) {
                  // map.add( entity, entityObj[0] );
                     eo.setEI( entityObj, 0 );
                     console.log( "resetChildCursorsRecurse resetting entity: " + entity + "  hierNbr: " + entityObj[0]["..parentO"][".hierNbr"] );
                     this.resetChildCursorsRecurse( entityObj[0], null, map );
                  }
               } else {
                  console.log( "resetChildCursors could not establish cursor position for entity: " + entity );
               }
            } else {
               for ( var k = 0; k < entityObj.length; k++ ) {   // never get here!!!
                  this.resetChildCursorsRecurse( entityObj[k], null, map );
               }
            }
         } else { // it's not an array
            var typeProp;
            for ( var prop in entityObj ) {
               typeProp = typeof entityObj[prop];
               if ( typeProp === "object" ) {
                  if ( prop.charAt( 0 ) !== "." && prop !== "OIs" ) {  // ..parentA ..parentO .meta .oimeta and OIs
                     if ( $.isArray( entityObj[prop] ) && typeof( entityObj[prop][0] ) === "object" ) {
                        this.resetChildCursorsRecurse( entityObj[prop], prop, map );
                     } else {
                        console.log( "Unknown Subobject: " + typeProp + "  Object: " + entityObj + "   Path D" );
                     }
                  }
            /* } else if ( typeProp === "string" || typeProp === "number" || typeProp === "function" || typeProp === "undefined" ) {
                  console.log( typeProp + " key : value ==> " + prop + " : " + entityObj[prop] );
               } else if ( typeProp === "boolean" ) {
                  console.log( "boolean key : value ==> " + prop + " : " + entityObj[prop] ? "true" : "false" );
               } else {
                  console.log( "Unknown: " + typeProp + "  Object: " + entityObj ); */
               }
            }
         }
      } else {
         console.log( "Unexpected: " + entityObj );
      }
   };

   this.validateCursors = function( entity ) {
      var entityCursor;
      var ei;
      var idx;
      while ( entity ) {
         if ( entity === _root ) {
            return true; // everything looks good
         }
         var entityCursor = this.get( entity );
         if ( entityCursor && entityCursor.getEI() ) {
            entity = entityCursor.getParent();
         } else {
            break;
         }
      }
      return false;
   };

/*
    zPOS_NONE  = 0;
    zPOS_FIRST = 1;
    zPOS_LAST  = 2;
    zPOS_NEXT  = 3;
    zPOS_PREV  = 4;

    zCURSOR_NULL = -3
    zCURSOR_UNDEFINED = -2
    zCURSOR_UNCHANGED = -1
    zCURSOR_SET = 0
    zCURSOR_SET_NEWPARENT = 1
    zCURSOR_SET_RECURSIVE_CHILD = 2
*/
/*
   this.hasAnyWithinOi = function( searchEntity ) {
      if ( this.get( searchEntity ) ) {
         return 0; // zCURSOR_SET
      } else {
         return -3; // zCURSOR_NULL;
      }
   };
*/
   this.hasAnyWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      if ( searchAttribute === undefined || searchValue === undefined ) {
         searchAttribute = null;
         searchValue = null;
      }
      var entityObj = this.get( _root );
      if ( entityObj ) {
         var map = new SimpleHashMap( "string", "object" );
         // this.locateEntity( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope, entity, newParent, map, recurse, path );
         rc = this.locateEntity( entityObj, searchEntity, _root, searchAttribute, searchValue, 0, false, _root, false, map, 0, "" );
         if ( rc >= 0 ) {
            entityObj = map.get( searchEntity );
            for ( var prop in entityObj ) {
               this.resetChildCursors( entityObj[prop], prop, map );
            }
            return rc; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };
/*
   this.hasNext = function( searchEntity ) {
      ? zCURSOR_SET : zCURSOR_UNCHANGED;
   };

   this.hasPrev = function( searchEntity ) {
      ? zCURSOR_SET : zCURSOR_UNCHANGED;
   };

   this.hasAny = function( searchEntity, scopingEntity ) {
      ? zCURSOR_SET : zCURSOR_NULL;
   };

   this.hasAny = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      ? zCURSOR_SET : zCURSOR_NULL;
   };
*/
   this.setWithinOi = function( searchEntity, scopingEntity, searchAttribute, searchValue, position, belowScope ) {
      if ( typeof searchAttribute === "undefined" ) searchAttribute = null;
      if ( typeof searchValue === "undefined" ) searchValue = null;
      if ( typeof scopingEntity === "undefined" || scopingEntity === null ) {
         scopingEntity = this.findParentEntity( searchEntity );
      }
      if ( belowScope || this.validateCursors( searchEntity ) ) {
         var entityCursor = this.get( "_" );
         if ( entityCursor ) {
            var entityObj = entityCursor.getEI();
            if ( entityObj ) {
               var map = new SimpleHashMap( "string", "object" );
               // this.locateEntity( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, entity, newParent, map, recurse, path );
               var rc = this.locateEntity( entityObj, searchEntity, scopingEntity, searchAttribute, searchValue, position, false, _root, false, map, 0, "" );
               if ( rc >= 0 ) {
/*                entityCursor = this.get( searchEntity );
                  if ( entityCursor ) {
                     entityObj = entityCursor.getEI();
                     if ( entityObj ) {
                        this.resetChildCursors( entityObj, searchEntity, map );
                     } else {
                        console.log( "Error: setWithinOi could not reset child cursors" );
                        return -6;
                     }
                  } else {
                     console.log( "Error: setWithinOi could not locate child cursor" );
                     return -5;
                  } */
                  return rc; // zCURSOR_SET
               }
               return -2; // zCURSOR_UNDEFINED
            }
         }
         return -3; // zCURSOR_NULL;
      }
      return -4; // ???
   };

   this.setFirstWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, _root, searchAttribute, searchValue, 1, true );
   };
/*
   this.setFirst = function( searchEntity, scopingEntity ) {
      return this.setWithinOi( searchEntity, scopingEntity, null, null, 1, false );
   };
*/
   this.setFirst = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 1, false );
   };
/*
   this.setFirst = function( searchEntity ) {
      if ( this.validateCursors( searchEntity ) ) {
         var entityObj = this.get( searchEntity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];

            this.add( searchEntity, parentArr[0] );
            // ??? parentObj[".cursor"] = 0;
            var map = new SimpleHashMap( "string", "object" );
            this.resetChildCursors( entityObj, searchEntity, map );
            return 0; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };
*/
   this.setLastWithinOi = function( searchEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, _root, searchAttribute, searchValue, 2, true );
   };
/*
   this.setLast = function( searchEntity, scopingEntity ) {
      return this.setWithinOi( searchEntity, scopingEntity, null, null, 2, false );
   };
*/
   this.setLast = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 2, false );
   };
/*
   this.setLast = function( searchEntity ) {
      if ( this.validateCursors( searchEntity ) ) {
         var entityObj = this.get( searchEntity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];

            this.add( searchEntity, parentArr[parentArr.length - 1] );
            // ??? parentObj[".cursor"] = parentArr.length - 1;
            var map = new SimpleHashMap( "string", "object" );
            this.resetChildCursors( entityObj, searchEntity, map );
            return 0; // zCURSOR_SET
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };
*/
   this.setNext = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 3, false );
   };
/*
   this.setNext = function( searchEntity ) {
      if ( this.validateCursors( searchEntity ) ) {
         var entityObj = this.get( searchEntity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];
            // ??? var k = parentObj[".cursor"];

            if ( k < parentArr.length - 1 ) {
               k++;
               this.add( searchEntity, parentArr[k] );
               // ??? parentObj[".cursor"] = k;
               var map = new SimpleHashMap( "string", "object" );
               this.resetChildCursors( entityObj, searchEntity, map );
               return 0; // zCURSOR_SET
            }
            return -1; // zCURSOR_UNCHANGED
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };
*/
   this.setPrev = function( searchEntity, scopingEntity, searchAttribute, searchValue ) {
      return this.setWithinOi( searchEntity, scopingEntity, searchAttribute, searchValue, 4, false );
   };
/*
   this.setPrev = function( searchEntity ) {
      if ( this.validateCursors( searchEntity ) ) {
      var entityObj = this.get( searchEntity );
         if ( entityObj !== null ) {
            var parentObj = entityObj["..parentO"];
            var parentArr = entityObj["..parentA"];
            // ??? var k = parentObj[".cursor"];

            if ( k > 0 ) {
               k--;
               this.add( searchEntity, parentArr[k] );
               // ??? parentObj[".cursor"] = k;
               var map = new SimpleHashMap( "string", "object" );
               this.resetChildCursors( entityObj, searchEntity, map );
               return 0; // zCURSOR_SET
            }
            return -1; // zCURSOR_UNCHANGED
         }
         return -2; // zCURSOR_UNDEFINED
      }
      return -3; // zCURSOR_NULL;
   };
*/
   this.setSubobject = function( entity, subEntity ) {

   };

   this.resetSubobject = function( entity, subEntity ) {

   };

   this.getAttribute = function( entity, attribute ) {
      var entityCursor = this.get( entity );
      if ( entityCursor ) {
         var entityObj = entityCursor.getEI();
         if ( entityObj ) {
         // console.log( entityObj );
            return entityObj[attribute];
         }
      }
      return "";
   };
};

/*
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
newObject = Object.create(oldObject);
*/
var SimpleHashMap = function( keyType, valueType ) {
   var _db = [];
   var _keyType;
   var _valueType;

   (function() {
      _keyType = keyType;
      _valueType = valueType;
   })();

   var getIndexOfKey = function( key ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be " + _keyType );
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return k;
         }
      }
      return -1;
   };

   this.add = function( key, value ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be " + _keyType );
      } else if ( value !== null && typeof value !== _valueType ) {
         throw new Error( "Type of value should be " + _valueType );
      }
      var index = getIndexOfKey( key );
      if ( index === -1 ) {
         _db.push( [key, value] );
      } else {
         _db[index][1] = value;
      }
      return this;
   };

   this.get = function( key ) {
      if ( typeof key !== _keyType || _db.length === 0 ){
         return null;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return _db[k][1];
         }
      }
      return null;
   };

   this.size = function() {
      return _db.length;
   };

   this.keys = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][0] );
      }
      return result;
   };

   this.values = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][1] );
      }
      return result;
   };

   this.iterate = function( callback ) {
      if ( _db.length === 0 ) {
         return false;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         callback( _db[k][0], _db[k][1] );
      }
      return true;
   };
};

var globalLods = new SimpleHashMap( "string", "object" );

function testSimpleHashMap() {
   var a = new SimpleHashMap( "string", "string" );
   a.add("test", "1132")
    .add("test14", null)
    .add("1421test14", "12312666")
    .iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   /*
   a[test]=1132
   a[test14]=666
   a[1421test14]=12312666
   */
  /*
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   a.randomize().iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
   */
   /*
   a[1421test14]=12312666
   a[test]=1132
   a[test14]=666
   */
}

/** not yet implemented

var JsonHashMap = function( keyType, valueType, jsonString ) {  // added jsonString parameter
   var _db = [];
   var _keyType;
   var _valueType;

   (function() {
      _keyType = keyType;
      _valueType = valueType;
      // added
      if ( jsonString ) {
         var jsonObject = jsonStringToJsonObject( jsonString );
         jsonObjectToHashMap( jsonObject, _db );
      }
      // end added
   })();

   var getIndexOfKey = function( key ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be " + _keyType );
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return k;
         }
      }
      return -1;
   };

   this.add = function( key, value ) {
      if ( typeof key !== _keyType ) {
         throw new Error( "Type of key should be " + _keyType );
      } else if ( value !== null && typeof value !== _valueType ) {
         throw new Error( "Type of value should be " + _valueType );
      }
      var index = getIndexOfKey( key );
      if ( index === -1 ) {
         _db.push( [key, value] );
      } else {
         _db[index][1] = value;
      }
      return this;
   };

   this.get = function( key ) {
      if ( typeof key !== _keyType || _db.length === 0 ){
         return null;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         if ( _db[k][0] === key ) {
            return _db[k][1];
         }
      }
      return null;
   };

   this.size = function() {
      return _db.length;
   };

   this.keys = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][0] );
      }
      return result;
   };

   this.values = function() {
      if ( _db.length === 0 ) {
         return [];
      }
      var result = [];
      for ( var k = 0; k < _db.length; k++ ) {
         result.push( _db[k][1] );
      }
      return result;
   };

   // Added to support initializing a JsonHashMap from a JSON object ... not yet implemented!
   this.jsonToHash = function( jsonObject ) {
      var typeObj = typeof jsonObject;
      if ( typeObj === "object" ) {
         if ( $.isArray( jsonObject ) ) {
            $.each( jsonObject, function( key, value ) {
               add( key, value );
         });
         }
      }
   };

   this.toString = function() {
      var result;
      if ( _db.length > 0 ) {
         result = "{ ";
         for ( var k = 0; k < _db.length; k++ ) {
            result += "{ " + _db[k][0] + " : " + _db[k][1] + " }";
         }
         result += " }";
      } else {
         result = "{}";
      }
      return result;
   };

   this.randomize = function() {
      if ( db.length === 0 ) {
         return this;
      }
      var currentIndex = db.length, temporaryValue, randomIndex;
      while ( 0 !== currentIndex ) {
         randomIndex = Math.floor( Math.random() * currentIndex );
         currentIndex--;
         temporaryValue = db[currentIndex];
         db[currentIndex] = db[randomIndex];
         db[randomIndex] = temporaryValue;
      }
      return this;
   };

   this.iterate = function( callback ) {
      if ( _db.length === 0 ) {
         return false;
      }
      for ( var k = 0; k < _db.length; k++ ) {
         callback( _db[k][0], _db[k][1] );
      }
      return true;
   };
};

function testJsonHashMap() {
   var jsonObject = jsonStringToJsonObject( g_JsonStore );
   var a = new JsonHashMap( "string", "string", jsonObject );

   a.iterate( function( key, value ) { console.log( "a[" + key + "]=" + value ); } );
}
*/

function displayElementData( message, $element ) {
   if ( $element ) {
      console.log( message + "... Element Data for: " + $element.attr( "id" ) );
      if ( $element.data() ) {
         $.each( $element.data(), function( key, value ) {
            if ( typeof value === "string" || typeof value === "number" ) {
               console.log( "   ~ " + key + " : " + value );
            }
         });
      }
   }
}

function getRow( indent, data, isPropertyContent ) {
   var tabs = "";
   if ( indent >= 0 ) {
      for ( var k = 0; k < indent && !isPropertyContent; k++ )
         tabs += window.DOUBLE_TAB;
      if ( data !== null && data.length > 0 && data.charAt( data.length - 1 ) !== "\n" )
         data = data + "\n";
   }
   return tabs + data;
}

function renderJsonObjectAsFormattedHtml( jsonObj, indent, addComma, isArray, isPropertyContent ) {
   var formattedHtml = "";
   var comma = (addComma) ? "<span class='Comma'>,</span> " : "";
   var objType = typeof jsonObj;
   var collapseHtml = "";
   if ( $.isArray( jsonObj ) ) {
      if ( jsonObj.length === 0 ){
         formattedHtml += getRow( indent, "<span class='ArrayBrace'>[ ]</span>" + comma, isPropertyContent );
      } else {
         collapseHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" onClick=\"ExpImgClicked(this)\" /></span><span class='collapsible'>" : "";
         formattedHtml += getRow( indent, "<span class='ArrayBrace'>[</span>" + collapseHtml, isPropertyContent );
         for ( var k = 0; k < jsonObj.length; k++ ) {
            formattedHtml += renderJsonObjectAsFormattedHtml( jsonObj[k], indent + 1, k < (jsonObj.length - 1), true, false );
         }
         collapseHtml = window.IsCollapsible ? "</span>" : "";
         formattedHtml += getRow( indent, collapseHtml + "<span class='ArrayBrace'>]</span>" + comma, false );
      }
   } else if ( objType === "object" ) {
      if ( jsonObj === null ){
         formattedHtml += formatLiteral( "null", "", comma, indent, isArray, "Null" );
      } else if ( jsonObj.constructor === window._dateObj.constructor ) {
         formattedHtml += formatLiteral( "new Date(" + jsonObj.getTime() + ") /*" + jsonObj.toLocaleString() + "*/", "", comma, indent, isArray, "Date" );
      } else if ( jsonObj.constructor === window._regexpObj.constructor ) {
         formattedHtml += formatLiteral( "new RegExp(" + jsonObj + ")", "", comma, indent, isArray, "RegExp" );
      } else {
         var numProps = 0;
         var type = false;
         var content = false;
         var attributes = false;
         for ( var prop in jsonObj ) {
            if ( prop === "type" ) {
               if ( jsonObj[prop] !== "DIV" ) {
                  numProps = 0;
                  break;
               }
               type = true;
            }
            else
            if ( prop === "content" ) {
               content = true;
            }
            else
            if ( prop === "attributes" ) {
               attributes = true;
            }
            numProps++;
         }
         if ( numProps === 0 ) {
            formattedHtml += getRow( indent, "<span class='ObjectBrace'>{ }</span>" + comma, isPropertyContent );
         } else {
            collapseHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" onClick=\"ExpImgClicked(this)\" /></span><span class='collapsible'>" : "";
            formattedHtml += getRow( indent, "<span class='ObjectBrace'>{</span>" + collapseHtml, isPropertyContent );
            var j = 0;
            var skip = type && content && attributes;
            var quote = window.QuoteKeys ? "\"" : "";
            if ( skip ) {
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + "type" + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj["type"], indent + 1, ++j < numProps, false, true ), false );
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + "attributes" + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj["attributes"], indent + 1, ++j < numProps, false, true ), false );
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + "content" + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj["content"], indent + 1, ++j < numProps, false, true ), false );
            }
            for ( var prop in jsonObj ) {
               if ( skip ) {
                  if ( prop === "type" || prop === "content" || prop === "attributes" ) {
                     continue;
                  }
               }
               formattedHtml += getRow( indent + 1, "<span class='PropertyName'>" + quote + prop + quote + "</span>: " + renderJsonObjectAsFormattedHtml( jsonObj[prop], indent + 1, ++j < numProps, false, true ), false );
            }
            collapseHtml = window.IsCollapsible ? "</span>" : "";
            formattedHtml += getRow( indent, collapseHtml + "<span class='ObjectBrace'>}</span>" + comma, false );
         }
      }
   } else if ( objType === "string" ) {
      formattedHtml += formatLiteral( jsonObj.toString().split("\\").join("\\\\").split('"').join('\\"'), "\"", comma, indent, isArray, "String" );
   } else if ( objType === "number" ) {
      formattedHtml += formatLiteral( jsonObj, "", comma, indent, isArray, "Number" );
   } else if ( objType === "boolean" ) {
     formattedHtml += formatLiteral( jsonObj, "", comma, indent, isArray, "Boolean" );
   } else if ( objType === "function" ) {
      if ( jsonObj.constructor === window._regexpObj.constructor ) {
         formattedHtml += formatLiteral( "new RegExp(" + jsonObj + ")", "", comma, indent, isArray, "RegExp" );
      } else {
         jsonObj = formatFunction( indent, jsonObj );
         formattedHtml += formatLiteral( jsonObj, "", comma, indent, isArray, "Function" );
      }
   } else if ( objType === "undefined" ) {
      formattedHtml += formatLiteral( "undefined", "", comma, indent, isArray, "Null" );
   } else {
      formattedHtml += "UNKNOWN type: " + objType;
   }
   return formattedHtml;
}

function formatLiteral( literal, quote, comma, indent, isArray, style ) {
   var str;
   if ( indent >= 0 ) {
      if ( typeof literal === "string" ) {
         literal = literal.split("<").join("&lt;").split(">").join("&gt;");
      }
      str = "<span class='" + style + "'>" + quote + literal + quote + comma + "</span>";
      if ( isArray ) {
         str = getRow( indent, str, false );
      }
   } else {
      str = quote + literal + quote + comma;
   }
   return str;
}

function formatFunction( indent, obj ) {
   var tabs = buildTab( indent, false );
   var funcStrArray = obj.toString().split( "\n" );
   var str = "";
   for ( var k = 0; k < funcStrArray.length; k++ ) {
      str += ((k === 0) ? "" : tabs) + funcStrArray[k] + "\n";
   }

   return str;
}
