package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import flash.utils.setTimeout;
   import gs.TweenMax;
   import gs.easing.Linear;
   
   public class AttackTiPuSiS1Panel extends ActivityModel
   {
      private var _havaPos:int;
      
      private var _curPos:int;
      
      private var _ItemNum:int;
      
      private var _bit:int;
      
      private var _bit1:int;
      
      private var _gameCount:int;
      
      private var _havaCount:int;
      
      private var _movePos:int;
      
      private var _EventArr_1:Array;
      
      private var _EventArr_2:Array;
      
      private var _EventArr_3:Array;
      
      private var m_IsFirstTime:Boolean = true;
      
      public function AttackTiPuSiS1Panel()
      {
         this._EventArr_1 = [2,8,12,17,24,25,36,39,46];
         this._EventArr_2 = [11,19,31,40,49];
         this._EventArr_3 = [3,6,9,15,21,28,33,41,44,48];
         super();
         configUrl = "2024/1025/AttackTiPuSi";
         resUrl = "2024/1025/AttackTiPuSiS1Panel";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("0910狙击泰普斯","打开前往支援面板","2021运营活动");
         _ui["page"].visible = false;
         _ui["ani"].gotoAndStop(1);
         _ui["ani"].visible = false;
      }
      
      override protected function updatePanel() : void
      {
         var i:int;
         var k:int;
         this._havaPos = getValue("_havaPos");
         this._curPos = getValue("_curPos");
         this._bit1 = getValue("_bit1");
         if(this._curPos > 50)
         {
            this._curPos = 51;
         }
         this._ItemNum = getValue("_ItemNum");
         this._bit = getValue("_bit");
         this._bit1 = getValue("_bit1");
         this._gameCount = getValue("_count");
         _ui["numTxt"].text = this._gameCount;
         for(i = 0; i <= 51; i++)
         {
            _ui["mc_" + i].gotoAndStop(1);
         }
         for(k = 1; k <= 5; k++)
         {
            if(KTool.getBit(this._bit1,k) == 1)
            {
               _ui["mccc_" + k].visible = false;
            }
            else
            {
               _ui["mccc_" + k].visible = true;
            }
         }
         if(this.m_IsFirstTime == true)
         {
            _ui["player"].x = _ui["mc_" + this._curPos].x;
            _ui["player"].y = _ui["mc_" + this._curPos].y;
            if(KTool.getBit(this._bit,25) == 0)
            {
               this._IsEvent1();
               this._IsEvent2();
               this._IsEvent3();
            }
            if(this._curPos > 50)
            {
               doAction("FlgeReq1",4).then(function():void
               {
                  hide();
                  ModuleManager.showAppModule("AttackTiPuSiS4Panel");
               });
            }
            this.m_IsFirstTime = false;
         }
         else
         {
            this._movePos = this._curPos - this._havaPos;
            this._Move();
         }
      }
      
      private function setMouseEnabled(b:Boolean) : void
      {
         _ui["start"].mouseEnabled = b;
         _ui["getBtn"].mouseEnabled = b;
         _ui["close"].mouseEnabled = b;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("AttackTiPuSiMainPanel");
               break;
            case "getBtn":
               hide();
               ModuleManager.showAppModule("AttackTiPuSiS2Panel");
               break;
            case "start":
               if(this._gameCount >= 1)
               {
                  doAction("FlgeReq1",2).then(function():void
                  {
                     playAnimation();
                  });
               }
               else
               {
                  doAction("pointNotEnough");
               }
         }
      }
      
      private function IsEvent() : void
      {
         this._IsEvent1();
         this._IsEvent2();
         this._IsEvent3();
      }
      
      private function playAnimation() : void
      {
         this.setMouseEnabled(false);
         AnimateManager.playMcAnimate(_ui,1,"diceMC",this.stopPlaying);
      }
      
      private function stopPlaying() : void
      {
         this.setMouseEnabled(true);
         _activityHelper.update().then(function():void
         {
            _havaPos = getValue("_havaPos");
            _curPos = getValue("_curPos");
            _movePos = _curPos - _havaPos;
            _ui["diceMC"]["ani"].gotoAndStop(_movePos);
            refresh();
         });
      }
      
      private function _Move() : void
      {
         this.setMouseEnabled(false);
         if(this._curPos > 50)
         {
            if(this._havaPos == 45)
            {
               this.setMouseEnabled(false);
               TweenMax.to(_ui["player"],0.3,{
                  "alpha":1,
                  "x":_ui["mc_46"].x,
                  "y":_ui["mc_46"].y,
                  "scaleX":1,
                  "scaleY":1,
                  "onComplete":function():void
                  {
                     TweenMax.to(_ui["player"],1.2,{
                        "alpha":1,
                        "x":_ui["mc_51"].x,
                        "y":_ui["mc_51"].y,
                        "scaleX":1,
                        "scaleY":1,
                        "onComplete":function():void
                        {
                           setMouseEnabled(true);
                           doAction("alarm1").then(function():void
                           {
                              doAction("FlgeReq1",4).then(function():void
                              {
                                 hide();
                                 ModuleManager.showAppModule("AttackTiPuSiS4Panel");
                              });
                           });
                        },
                        "ease":Linear.easeOut
                     });
                  },
                  "ease":Linear.easeOut
               });
            }
            else
            {
               this.setMouseEnabled(false);
               TweenMax.to(_ui["player"],0.5,{
                  "alpha":1,
                  "x":_ui["mc_51"].x,
                  "y":_ui["mc_51"].y,
                  "scaleX":1,
                  "scaleY":1,
                  "onComplete":function():void
                  {
                     setMouseEnabled(true);
                     doAction("alarm1").then(function():void
                     {
                        doAction("FlgeReq1",4).then(function():void
                        {
                           hide();
                           ModuleManager.showAppModule("AttackTiPuSiS4Panel");
                        });
                     });
                  },
                  "ease":Linear.easeOut
               });
            }
         }
         else if(this._movePos == 1)
         {
            this.setMouseEnabled(false);
            TweenMax.to(_ui["player"],0.3,{
               "alpha":1,
               "x":_ui["mc_" + (this._havaPos + 1)].x,
               "y":_ui["mc_" + (this._havaPos + 1)].y,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  setMouseEnabled(true);
                  _IsEvent1();
                  _IsEvent2();
                  _IsEvent3();
               },
               "ease":Linear.easeOut
            });
         }
         else if(this._movePos == 2)
         {
            this.setMouseEnabled(false);
            TweenMax.to(_ui["player"],0.3,{
               "alpha":1,
               "x":_ui["mc_" + (this._havaPos + 1)].x,
               "y":_ui["mc_" + (this._havaPos + 1)].y,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 2)].x,
                     "y":_ui["mc_" + (_havaPos + 2)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        setMouseEnabled(true);
                        _IsEvent1();
                        _IsEvent2();
                        _IsEvent3();
                     },
                     "ease":Linear.easeOut
                  });
               },
               "ease":Linear.easeOut
            });
         }
         else if(this._movePos == 3)
         {
            this.setMouseEnabled(false);
            TweenMax.to(_ui["player"],0.3,{
               "alpha":1,
               "x":_ui["mc_" + (this._havaPos + 1)].x,
               "y":_ui["mc_" + (this._havaPos + 1)].y,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 2)].x,
                     "y":_ui["mc_" + (_havaPos + 2)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos + 3)].x,
                           "y":_ui["mc_" + (_havaPos + 3)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              setMouseEnabled(true);
                              _IsEvent1();
                              _IsEvent2();
                              _IsEvent3();
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               },
               "ease":Linear.easeOut
            });
         }
         else if(this._movePos == 4)
         {
            this.setMouseEnabled(false);
            TweenMax.to(_ui["player"],0.3,{
               "alpha":1,
               "x":_ui["mc_" + (this._havaPos + 1)].x,
               "y":_ui["mc_" + (this._havaPos + 1)].y,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 2)].x,
                     "y":_ui["mc_" + (_havaPos + 2)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos + 3)].x,
                           "y":_ui["mc_" + (_havaPos + 3)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              TweenMax.to(_ui["player"],0.3,{
                                 "alpha":1,
                                 "x":_ui["mc_" + (_havaPos + 4)].x,
                                 "y":_ui["mc_" + (_havaPos + 4)].y,
                                 "scaleX":1,
                                 "scaleY":1,
                                 "onComplete":function():void
                                 {
                                    setMouseEnabled(true);
                                    _IsEvent1();
                                    _IsEvent2();
                                    _IsEvent3();
                                 },
                                 "ease":Linear.easeOut
                              });
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               },
               "ease":Linear.easeOut
            });
         }
         else if(this._movePos == 5)
         {
            this.setMouseEnabled(false);
            TweenMax.to(_ui["player"],0.3,{
               "alpha":1,
               "x":_ui["mc_" + (this._havaPos + 1)].x,
               "y":_ui["mc_" + (this._havaPos + 1)].y,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 2)].x,
                     "y":_ui["mc_" + (_havaPos + 2)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos + 3)].x,
                           "y":_ui["mc_" + (_havaPos + 3)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              TweenMax.to(_ui["player"],0.3,{
                                 "alpha":1,
                                 "x":_ui["mc_" + (_havaPos + 4)].x,
                                 "y":_ui["mc_" + (_havaPos + 4)].y,
                                 "scaleX":1,
                                 "scaleY":1,
                                 "onComplete":function():void
                                 {
                                    TweenMax.to(_ui["player"],0.3,{
                                       "alpha":1,
                                       "x":_ui["mc_" + (_havaPos + 5)].x,
                                       "y":_ui["mc_" + (_havaPos + 5)].y,
                                       "scaleX":1,
                                       "scaleY":1,
                                       "onComplete":function():void
                                       {
                                          setMouseEnabled(true);
                                          _IsEvent1();
                                          _IsEvent2();
                                          _IsEvent3();
                                       },
                                       "ease":Linear.easeOut
                                    });
                                 },
                                 "ease":Linear.easeOut
                              });
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               },
               "ease":Linear.easeOut
            });
         }
         else if(this._movePos == 6)
         {
            this.setMouseEnabled(false);
            TweenMax.to(_ui["player"],0.3,{
               "alpha":1,
               "x":_ui["mc_" + (this._havaPos + 1)].x,
               "y":_ui["mc_" + (this._havaPos + 1)].y,
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 2)].x,
                     "y":_ui["mc_" + (_havaPos + 2)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos + 3)].x,
                           "y":_ui["mc_" + (_havaPos + 3)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              TweenMax.to(_ui["player"],0.3,{
                                 "alpha":1,
                                 "x":_ui["mc_" + (_havaPos + 4)].x,
                                 "y":_ui["mc_" + (_havaPos + 4)].y,
                                 "scaleX":1,
                                 "scaleY":1,
                                 "onComplete":function():void
                                 {
                                    TweenMax.to(_ui["player"],0.3,{
                                       "alpha":1,
                                       "x":_ui["mc_" + (_havaPos + 5)].x,
                                       "y":_ui["mc_" + (_havaPos + 5)].y,
                                       "scaleX":1,
                                       "scaleY":1,
                                       "onComplete":function():void
                                       {
                                          TweenMax.to(_ui["player"],0.3,{
                                             "alpha":1,
                                             "x":_ui["mc_" + (_havaPos + 6)].x,
                                             "y":_ui["mc_" + (_havaPos + 6)].y,
                                             "scaleX":1,
                                             "scaleY":1,
                                             "onComplete":function():void
                                             {
                                                setMouseEnabled(true);
                                                _IsEvent1();
                                                _IsEvent2();
                                                _IsEvent3();
                                             },
                                             "ease":Linear.easeOut
                                          });
                                       },
                                       "ease":Linear.easeOut
                                    });
                                 },
                                 "ease":Linear.easeOut
                              });
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               },
               "ease":Linear.easeOut
            });
         }
      }
      
      private function _IsEvent1() : void
      {
         var i:int;
         for(i = 1; i <= this._EventArr_1.length; i++)
         {
            if(this._EventArr_1[i - 1] == this._curPos)
            {
               doAction("FlgeReq1",3).then(function():void
               {
                  _havaCount = _ItemNum;
                  _activityHelper.update().then(function():void
                  {
                     _havaPos = getValue("_havaPos");
                     _curPos = getValue("_curPos");
                     _ItemNum = getValue("_ItemNum");
                     _bit = getValue("_bit");
                     _gameCount = getValue("_count");
                     _EventFun1();
                  });
               });
               break;
            }
         }
      }
      
      private function _IsEvent2() : void
      {
         var i:int;
         for(i = 1; i <= this._EventArr_2.length; i++)
         {
            if(this._EventArr_2[i - 1] == this._curPos && KTool.getBit(this._bit1,i) != 1)
            {
               doAction("FlgeReq1",3).then(function():void
               {
                  _activityHelper.update().then(function():void
                  {
                     _havaPos = getValue("_havaPos");
                     _curPos = getValue("_curPos");
                     _ItemNum = getValue("_ItemNum");
                     _bit = getValue("_bit");
                     _gameCount = getValue("_count");
                     _bit1 = getValue("_bit1");
                     _EventFun2();
                  });
               });
               break;
            }
         }
      }
      
      private function _IsEvent3() : void
      {
         for(var i:int = 1; i <= this._EventArr_3.length; i++)
         {
            if(this._EventArr_3[i - 1] == this._curPos)
            {
               hide();
               ModuleManager.showAppModule("AttackTiPuSiS3Panel");
               break;
            }
         }
      }
      
      private function playAnimation1() : void
      {
         _ui["ani"].visible = true;
         AnimateManager.playMcAnimate(_ui,1,"ani",this.stopPlaying1);
      }
      
      private function stopPlaying1() : void
      {
         this.setMouseEnabled(true);
         _ui["ani"].visible = false;
         var temp:int = this._havaPos - this._curPos;
         _ui["player"].x = _ui["mc_" + (this._havaPos - temp)].x;
         _ui["player"].y = _ui["mc_" + (this._havaPos - temp)].y;
         for(var k:int = 1; k <= 5; k++)
         {
            if(KTool.getBit(this._bit1,k) == 1)
            {
               _ui["mccc_" + k].visible = false;
            }
            else
            {
               _ui["mccc_" + k].visible = true;
            }
         }
         this.IsEvent();
      }
      
      private function _EventFun2() : void
      {
         this.setMouseEnabled(false);
         _ui["page"].visible = true;
         _ui["page"].gotoAndStop(4);
         setTimeout(function():void
         {
            _ui["page"].visible = false;
            playAnimation1();
         },2000);
      }
      
      private function _EventFun1() : void
      {
         this.setMouseEnabled(false);
         if(this._havaCount != this._ItemNum)
         {
            _ui["page"].visible = true;
            _ui["page"].gotoAndStop(3);
            setTimeout(function():void
            {
               setMouseEnabled(true);
               _ui["page"].visible = false;
            },2000);
         }
         else if(this._curPos > this._havaPos)
         {
            _ui["page"].visible = true;
            _ui["page"].gotoAndStop(1);
            setTimeout(function():void
            {
               _ui["page"].visible = false;
               if(_curPos - _havaPos == 1)
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 1)].x,
                     "y":_ui["mc_" + (_havaPos + 1)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        setMouseEnabled(true);
                        IsEvent();
                     },
                     "ease":Linear.easeOut
                  });
               }
               else if(_curPos - _havaPos == 2)
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 1)].x,
                     "y":_ui["mc_" + (_havaPos + 1)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos + 2)].x,
                           "y":_ui["mc_" + (_havaPos + 2)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              setMouseEnabled(true);
                              IsEvent();
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               }
               else
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos + 1)].x,
                     "y":_ui["mc_" + (_havaPos + 1)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos + 2)].x,
                           "y":_ui["mc_" + (_havaPos + 2)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              TweenMax.to(_ui["player"],0.3,{
                                 "alpha":1,
                                 "x":_ui["mc_" + (_havaPos + 3)].x,
                                 "y":_ui["mc_" + (_havaPos + 3)].y,
                                 "scaleX":1,
                                 "scaleY":1,
                                 "onComplete":function():void
                                 {
                                    setMouseEnabled(true);
                                    IsEvent();
                                 },
                                 "ease":Linear.easeOut
                              });
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               }
            },2000);
         }
         else
         {
            _ui["page"].visible = true;
            _ui["page"].gotoAndStop(2);
            setTimeout(function():void
            {
               _ui["page"].visible = false;
               if(_havaPos - _curPos == 1)
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos - 1)].x,
                     "y":_ui["mc_" + (_havaPos - 1)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        setMouseEnabled(true);
                        IsEvent();
                     },
                     "ease":Linear.easeOut
                  });
               }
               else if(_havaPos - _curPos == 2)
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos - 1)].x,
                     "y":_ui["mc_" + (_havaPos - 1)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos - 2)].x,
                           "y":_ui["mc_" + (_havaPos - 2)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              setMouseEnabled(true);
                              IsEvent();
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               }
               else
               {
                  TweenMax.to(_ui["player"],0.3,{
                     "alpha":1,
                     "x":_ui["mc_" + (_havaPos - 1)].x,
                     "y":_ui["mc_" + (_havaPos - 1)].y,
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        TweenMax.to(_ui["player"],0.3,{
                           "alpha":1,
                           "x":_ui["mc_" + (_havaPos - 2)].x,
                           "y":_ui["mc_" + (_havaPos - 2)].y,
                           "scaleX":1,
                           "scaleY":1,
                           "onComplete":function():void
                           {
                              TweenMax.to(_ui["player"],0.3,{
                                 "alpha":1,
                                 "x":_ui["mc_" + (_havaPos - 3)].x,
                                 "y":_ui["mc_" + (_havaPos - 3)].y,
                                 "scaleX":1,
                                 "scaleY":1,
                                 "onComplete":function():void
                                 {
                                    setMouseEnabled(true);
                                    IsEvent();
                                 },
                                 "ease":Linear.easeOut
                              });
                           },
                           "ease":Linear.easeOut
                        });
                     },
                     "ease":Linear.easeOut
                  });
               }
            },2000);
         }
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}

