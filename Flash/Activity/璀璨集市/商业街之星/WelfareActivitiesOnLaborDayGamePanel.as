package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class WelfareActivitiesOnLaborDayGamePanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _curPlayerIndex:int;
      
      private var _surplusNum:int;
      
      private var _scoreArr:Array;
      
      private var _curIndex:int;
      
      private var _indexArr:Array;
      
      private var _gotoIndexArr:Array;
      
      private var _curValueS:Array;
      
      private var _randomRemoveArr:Array;
      
      private var _doIndex:int = 0;
      
      public function WelfareActivitiesOnLaborDayGamePanel()
      {
         this._indexArr = [1,2,3,4,5,6];
         super();
         resUrl = "2021/0430/WelfareActivitiesOnLaborDayGamePanel";
         configUrl = "2021/0430/welfareActivitiesOnLaborDay";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         this.initGame();
         if(BitBuffSetClass.getState(24475) == 0)
         {
            NpcDialog.show(5545,["哇，这里好热闹啊!"],["..."],[function():void
            {
               NpcDialog.show(4675,["小铁皮，快来哟…"],["..."],[function():void
               {
                  NpcDialog.show(4675,["商业街的发展离不开各店铺的运作，大家有着不同的分工，但都在为商会做贡献哟。"],["好棒！"],[function():void
                  {
                     NpcDialog.show(4675,["每位代表都会在自己的回合分配自己的棋子进入各个店铺，最后在每个店铺中数量分配最多的代表将获得对应店铺的积分哟。"],["..."],[function():void
                     {
                        NpcDialog.show(4675,["所有店铺获得的积分总和就能转化为友情点数了，能获得多少代表的友情点数全看你的发挥哟！"],["看来会很精彩呢。"],[function():void
                        {
                           NpcDialog.show(4675,["不过有一点你要记住哟，每个店铺中，相同数量的棋子会互相抵消，从而失去竞争权哟。"],["..."],[function():void
                           {
                              NpcDialog.show(4675,["每个店铺代表都有自己的特长，多尝试利用每个代表的技能来赢得更多积分哟！"],["好耶!"],[function():void
                              {
                                 BitBuffSetClass.setState(24475,1);
                              }],false,null,true);
                           }],false,null,true);
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }
      }
      
      private function initGame() : void
      {
         var j:int = 0;
         for(var i:int = 0; i < 4; i++)
         {
            for(j = 0; j < 5; j++)
            {
               if(j < 3)
               {
                  _mainUI["mapMc_" + i]["playerMc_" + j].visible = false;
               }
               _mainUI["mapMc_" + i]["itemMc_" + j].gotoAndStop(j + 1);
               _mainUI["mapMc_" + i]["itemNumTx_" + j].text = "0";
               _mainUI["mapMc_" + i]["flagTips_" + j].visible = false;
               _mainUI["palyMovie_" + j].visible = false;
            }
            _mainUI["mapMovie_" + i].visible = false;
         }
         _mainUI.skillPlayMc.visible = false;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "skillBtn":
               Alert.show("确认要发动主动技能吗？",function():void
               {
                  _mainUI.skillPlayMc.visible = true;
                  CommonUI.setEnabled(_mainUI,false,false);
                  AnimateManager.playMcAnimate(_mainUI.skillPlayMc,_curPlayerIndex,"mc" + _curPlayerIndex,function():void
                  {
                     _mainUI.skillPlayMc.visible = false;
                     CommonUI.setEnabled(_mainUI,true,false);
                     sendCmdWithPromise(_commdId,[7,6]).then(function(e:SocketEvent):void
                     {
                        var num1:int;
                        var i:int;
                        var randomNum:uint = 0;
                        var b:ByteArray = e.data as ByteArray;
                        b.position = 0;
                        num1 = int(b.readUnsignedInt());
                        _randomRemoveArr = [];
                        for(i = 0; i < 3; i++)
                        {
                           randomNum = uint(KTool.subByte(num1,i * 4,4));
                           _randomRemoveArr.push(randomNum);
                        }
                        sendCmdWithPromise(_commdId,[8,1]).then(function(e:SocketEvent):void
                        {
                           var gotoIndex:uint = 0;
                           var b:ByteArray = e.data as ByteArray;
                           b.position = 0;
                           var num:int = int(b.readUnsignedInt());
                           _gotoIndexArr = [];
                           for(var i:int = 0; i < 5; i++)
                           {
                              gotoIndex = uint(KTool.subByte(num,i * 4,4));
                              _gotoIndexArr.push(gotoIndex);
                           }
                           getValues();
                        });
                     });
                  },false,true);
               });
               break;
            case "gotoBtn_" + index:
               sendCmdWithPromise(this._commdId,[8,index + 1]).then(function(e:SocketEvent):void
               {
                  var gotoIndex:uint = 0;
                  var b:ByteArray = e.data as ByteArray;
                  b.position = 0;
                  var num:int = int(b.readUnsignedInt());
                  _gotoIndexArr = [];
                  for(var i:int = 0; i < 5; i++)
                  {
                     gotoIndex = uint(KTool.subByte(num,i * 4,4));
                     _gotoIndexArr.push(gotoIndex);
                  }
                  getValues();
               });
               break;
            case "giveUpBtn":
               Alert.show("确认要放弃吗？",function():void
               {
                  Alarm2.show("虽然中途放弃，但你的付出仍然获得了店铺代表们的好感，本次获得10友情点数！");
                  sendCmd(_commdId,[9,2],function():void
                  {
                     hide();
                     ModuleManager.showAppModule("WelfareActivitiesOnLaborDayMainPanel");
                  });
               });
               break;
            case "closeS":
               this.hide();
               ModuleManager.showAppModule("WelfareActivitiesOnLaborDayMainPanel");
               break;
            case "closeBtn":
               sendCmd(this._commdId,[9,1],function():void
               {
                  if(_scoreArr[_curPlayerIndex - 1] < 25)
                  {
                     Alarm2.show("效果不佳，不过给大家分享了咖啡厅的新品，广受好评，本次获得的友情点数提升到了25点！",function():void
                     {
                        hide();
                        ModuleManager.showAppModule("WelfareActivitiesOnLaborDayMainPanel");
                     });
                  }
                  else
                  {
                     Alarm2.show("恭喜你，赢得了店铺代表们的好感，本次获得" + _scoreArr[_curPlayerIndex - 1] + "友情点数！",function():void
                     {
                        hide();
                        ModuleManager.showAppModule("WelfareActivitiesOnLaborDayMainPanel");
                     });
                  }
               });
               break;
            case "leaveBtn":
               if(this._surplusNum > 0)
               {
                  Alert.show("是否要放弃转换荣誉点数结束比赛？",function():void
                  {
                     sendCmd(_commdId,[9,2],function():void
                     {
                        hide();
                        ModuleManager.showAppModule("WelfareActivitiesOnLaborDayMainPanel");
                     });
                  });
               }
               else
               {
                  sendCmd(this._commdId,[9,2],function():void
                  {
                     hide();
                     ModuleManager.showAppModule("WelfareActivitiesOnLaborDayMainPanel");
                  });
               }
         }
      }
      
      private function getValues() : void
      {
         KTool.getMultiValue([12731,12732,12733,12734,12735,12729],function(va:Array):void
         {
            var index1111:int = 0;
            _indexArr = [1,2,3,4,5];
            _curValueS = [];
            for(var i:int = 0; i < 6; i++)
            {
               _curValueS.push(va[i]);
            }
            var playerMapIndex:int = int(_gotoIndexArr[_curPlayerIndex - 1]);
            CommonUI.setEnabled(_mainUI,false,false);
            if(playerMapIndex == 0)
            {
               index1111 = int(_indexArr.indexOf(_curPlayerIndex));
               if(index1111 >= 0)
               {
                  _indexArr.splice(index1111,1);
               }
               _doIndex = 0;
               updatePlayerNumTx();
               palyOterMovie(_indexArr[_doIndex]);
            }
            else
            {
               palyPlayerMovie();
            }
         });
      }
      
      private function palyPlayerMovie() : void
      {
         var mapIndex:int = 0;
         mapIndex = int(this._gotoIndexArr[this._curPlayerIndex - 1]);
         _mainUI["palyMovie_" + (this._curPlayerIndex - 1)].visible = true;
         AnimateManager.playMcAnimate(_mainUI,1,"palyMovie_" + (this._curPlayerIndex - 1),function():void
         {
            _mainUI["palyMovie_" + (_curPlayerIndex - 1)].visible = false;
         },false,true);
         _mainUI["mapMovie_" + (mapIndex - 1)].visible = true;
         AnimateManager.playMcAnimate(_mainUI,1,"mapMovie_" + (mapIndex - 1),function():void
         {
            _mainUI["mapMovie_" + (mapIndex - 1)].visible = false;
            var playerMapIndex:int = int(_gotoIndexArr[_curPlayerIndex - 1]);
            var paiqianNum:int = int(KTool.subByte(_curValueS[_curPlayerIndex - 1],(playerMapIndex - 1) * 8,8));
            _mainUI["mapMc_" + (playerMapIndex - 1)]["itemNumTx_" + (_curPlayerIndex - 1)].text = String(paiqianNum);
            var surplusNum:int = int(KTool.subByte(_curValueS[5],4 + (_curPlayerIndex - 1) * 4,4));
            _mainUI.numMc["surplusNumTx_" + (_curPlayerIndex - 1)].text = String(surplusNum);
            var index1111:int = int(_indexArr.indexOf(_curPlayerIndex));
            if(index1111 >= 0)
            {
               _indexArr.splice(index1111,1);
            }
            _doIndex = 0;
            palyOterMovie(_indexArr[_doIndex]);
         },false,true);
      }
      
      private function updatePlayerNumTx() : void
      {
         var i:int = 0;
         var paiqianNum:int = 0;
         var arr:Array = null;
         var mapIndex:int = 0;
         var playIndex:int = 0;
         if(this._curPlayerIndex == 1 || this._curPlayerIndex == 3)
         {
            for(i = 0; i < 4; i++)
            {
               paiqianNum = int(KTool.subByte(this._curValueS[this._curPlayerIndex - 1],i * 8,8));
               _mainUI["mapMc_" + i]["itemNumTx_" + (this._curPlayerIndex - 1)].text = String(paiqianNum);
            }
         }
         else
         {
            arr = [0,2,3];
            for(i = 0; i < 3; i++)
            {
               mapIndex = int(arr[i]);
               playIndex = int(this._randomRemoveArr[i]);
               if(playIndex > 0)
               {
                  paiqianNum = int(KTool.subByte(this._curValueS[playIndex - 1],i * 8,8));
                  _mainUI["mapMc_" + mapIndex]["itemNumTx_" + (playIndex - 1)].text = String(paiqianNum);
               }
            }
         }
      }
      
      private function palyOterMovie(playIndex:int) : void
      {
         var mapIndex:int = 0;
         mapIndex = int(this._gotoIndexArr[playIndex - 1]);
         if(mapIndex > 0)
         {
            _mainUI["palyMovie_" + (playIndex - 1)].visible = true;
            AnimateManager.playMcAnimate(_mainUI,1,"palyMovie_" + (playIndex - 1),function():void
            {
               _mainUI["palyMovie_" + (playIndex - 1)].visible = false;
            },false,true);
            _mainUI["mapMovie_" + (mapIndex - 1)].visible = true;
            AnimateManager.playMcAnimate(_mainUI,1,"mapMovie_" + (mapIndex - 1),function():void
            {
               _mainUI["mapMovie_" + (mapIndex - 1)].visible = false;
               showNumTx(playIndex);
            },false,true);
         }
         else
         {
            ++this._doIndex;
            if(this._doIndex < this._indexArr.length)
            {
               this.palyOterMovie(this._indexArr[this._doIndex]);
            }
            else
            {
               CommonUI.setEnabled(_mainUI,true,false);
               refresh();
            }
         }
      }
      
      private function showNumTx(playIndex:int) : void
      {
         var mapIndex:int = int(this._gotoIndexArr[playIndex - 1]);
         var paiqianNum2:int = int(KTool.subByte(this._curValueS[playIndex - 1],(mapIndex - 1) * 8,8));
         _mainUI["mapMc_" + (mapIndex - 1)]["itemNumTx_" + (playIndex - 1)].text = String(paiqianNum2);
         var surplusNum:int = int(KTool.subByte(this._curValueS[5],4 + (playIndex - 1) * 4,4));
         _mainUI.numMc["surplusNumTx_" + (playIndex - 1)].text = String(surplusNum);
         ++this._doIndex;
         if(this._doIndex < this._indexArr.length)
         {
            this.palyOterMovie(this._indexArr[this._doIndex]);
         }
         else
         {
            CommonUI.setEnabled(_mainUI,true,false);
            refresh();
         }
      }
      
      override protected function updatePanel() : void
      {
         var daily_12729:int;
         var zhuanhuaNum:uint;
         var daily_12730:int;
         var surplusSkillNum:int;
         var allNum:int;
         var daily_12731:int;
         var daily_12732:int;
         var daily_12733:int;
         var daily_12734:int;
         var daily_12735:int;
         var daily_201770:int;
         var daily_12736:int;
         var daily_12749:int;
         var daily_12737:int;
         var daily_12738:int;
         var i:int = 0;
         var daily_2000110:int = 0;
         var daily_2000111:int = 0;
         var sore:int = 0;
         var index1:uint = 0;
         var index2:uint = 0;
         var index3:uint = 0;
         var index4:uint = 0;
         var allsurplusNum:int = 0;
         var surplusNum:int = 0;
         var randomNum:int = 0;
         var paiqianNum1:int = 0;
         var paiqianNum2:int = 0;
         var paiqianNum3:int = 0;
         var paiqianNum4:int = 0;
         var paiqianNum5:int = 0;
         var scoreNum1:int = 0;
         var scoreNum2:int = 0;
         var scoreNum3:int = 0;
         var scoreNum4:int = 0;
         this._commdId = getValue("comId")[0];
         daily_12729 = int(getValue("daily_12729"));
         zhuanhuaNum = uint(KTool.subByte(daily_12729,0,4));
         this._surplusNum = 3 - zhuanhuaNum;
         daily_12730 = int(getValue("daily_12730"));
         this._curPlayerIndex = KTool.subByte(daily_12730,0,4);
         if(BitUtils.getBit(daily_12729,24) > 0)
         {
            _mainUI.numMc.gotoAndStop(2);
            _mainUI.titleMc.gotoAndStop(2);
            this._scoreArr = [];
            for(i = 0; i < 5; i++)
            {
               if(i < 4)
               {
                  sore = int(KTool.subByte(getValue("daily_12739"),i * 8,8));
               }
               else
               {
                  sore = int(KTool.subByte(daily_12730,24,8));
               }
               _mainUI.numMc["scoreTx_" + i].text = String(sore);
               this._scoreArr.push(sore);
            }
            _mainUI.btnMc.gotoAndStop(2);
            if(this._surplusNum <= 0)
            {
               CommonUI.setEnabled(_mainUI.btnMc.zhuanhuanBtn,false,true);
            }
            CommonUI.setEnabled(_mainUI.skillBtn,false,true);
            daily_2000110 = int(getValue("daily_2000110"));
            daily_2000111 = int(getValue("daily_2000111"));
            for(i = 0; i < 3; i++)
            {
               index1 = uint(KTool.subByte(daily_2000110,i * 4,4));
               _mainUI["mapMc_" + 0]["playerMc_" + i].gotoAndStop(index1);
               _mainUI["mapMc_" + 0]["playerMc_" + i].visible = index1 > 0 ? true : false;
               index2 = uint(KTool.subByte(daily_2000110,i * 4 + 12,4));
               _mainUI["mapMc_" + 1]["playerMc_" + i].gotoAndStop(index2);
               _mainUI["mapMc_" + 1]["playerMc_" + i].visible = index2 > 0 ? true : false;
               index3 = uint(KTool.subByte(daily_2000111,i * 4,4));
               _mainUI["mapMc_" + 2]["playerMc_" + i].gotoAndStop(index3);
               _mainUI["mapMc_" + 2]["playerMc_" + i].visible = index3 > 0 ? true : false;
               index4 = uint(KTool.subByte(daily_2000111,i * 4 + 12,4));
               _mainUI["mapMc_" + 3]["playerMc_" + i].gotoAndStop(index4);
               _mainUI["mapMc_" + 3]["playerMc_" + i].visible = index4 > 0 ? true : false;
            }
         }
         else
         {
            _mainUI.numMc.gotoAndStop(1);
            _mainUI.titleMc.gotoAndStop(1);
            allsurplusNum = 0;
            for(i = 0; i < 5; i++)
            {
               surplusNum = int(KTool.subByte(daily_12729,4 + i * 4,4));
               allsurplusNum += surplusNum;
               _mainUI.numMc["surplusNumTx_" + i].text = String(surplusNum);
            }
            _mainUI.btnMc.gotoAndStop(1);
         }
         _mainUI.skillMc.gotoAndStop(this._curPlayerIndex);
         surplusSkillNum = (this._curPlayerIndex == 5 ? 3 : 1) - KTool.subByte(daily_12730,20,4);
         _mainUI.surplusSkillNumTx.text = surplusSkillNum + "/" + (this._curPlayerIndex == 5 ? 3 : 1);
         if(surplusSkillNum <= 0)
         {
            CommonUI.setEnabled(_mainUI.skillBtn,false,true);
         }
         allNum = 0;
         for(i = 0; i < 4; i++)
         {
            _mainUI["itemIcon_" + i].gotoAndStop(this._curPlayerIndex);
            randomNum = int(KTool.subByte(daily_12730,4 + i * 4,4));
            _mainUI["randomNumTx_" + i].text = String(randomNum);
            if(randomNum > 0)
            {
               allNum++;
               CommonUI.setEnabled(_mainUI["gotoBtn_" + i],true,false);
            }
            else
            {
               CommonUI.setEnabled(_mainUI["gotoBtn_" + i],false,true);
            }
         }
         daily_12731 = int(getValue("daily_12731"));
         daily_12732 = int(getValue("daily_12732"));
         daily_12733 = int(getValue("daily_12733"));
         daily_12734 = int(getValue("daily_12734"));
         daily_12735 = int(getValue("daily_12735"));
         daily_201770 = int(getValue("daily_201770"));
         for(i = 0; i < 4; i++)
         {
            paiqianNum1 = int(KTool.subByte(daily_12731,i * 8,8));
            _mainUI["mapMc_" + i]["itemNumTx_" + 0].text = String(paiqianNum1);
            paiqianNum2 = int(KTool.subByte(daily_12732,i * 8,8));
            _mainUI["mapMc_" + i]["itemNumTx_" + 1].text = String(paiqianNum2);
            paiqianNum3 = int(KTool.subByte(daily_12733,i * 8,8));
            _mainUI["mapMc_" + i]["itemNumTx_" + 2].text = String(paiqianNum3);
            paiqianNum4 = int(KTool.subByte(daily_12734,i * 8,8));
            _mainUI["mapMc_" + i]["itemNumTx_" + 3].text = String(paiqianNum4);
            paiqianNum5 = int(KTool.subByte(daily_12735,i * 8,8));
            _mainUI["mapMc_" + i]["itemNumTx_" + 4].text = String(paiqianNum5);
            _mainUI["mapMc_" + i]["flagTips_" + 0].visible = BitUtils.getBit(daily_201770,i * 5 + 0) && BitUtils.getBit(daily_12729,24);
            _mainUI["mapMc_" + i]["flagTips_" + 1].visible = BitUtils.getBit(daily_201770,i * 5 + 1) && BitUtils.getBit(daily_12729,24);
            _mainUI["mapMc_" + i]["flagTips_" + 2].visible = BitUtils.getBit(daily_201770,i * 5 + 2) && BitUtils.getBit(daily_12729,24);
            _mainUI["mapMc_" + i]["flagTips_" + 3].visible = BitUtils.getBit(daily_201770,i * 5 + 3) && BitUtils.getBit(daily_12729,24);
            _mainUI["mapMc_" + i]["flagTips_" + 4].visible = BitUtils.getBit(daily_201770,i * 5 + 4) && BitUtils.getBit(daily_12729,24);
         }
         daily_12736 = int(getValue("daily_12736"));
         daily_12749 = int(getValue("daily_12749"));
         daily_12737 = int(getValue("daily_12737"));
         daily_12738 = int(getValue("daily_12738"));
         for(i = 0; i < 3; i++)
         {
            scoreNum1 = int(KTool.subByte(daily_12736,i * 8,8));
            _mainUI["mapMc_" + 0]["numTx_" + i].text = String(scoreNum1);
            scoreNum2 = int(KTool.subByte(daily_12749,i * 8,8));
            _mainUI["mapMc_" + 1]["numTx_" + i].text = String(scoreNum2);
            scoreNum3 = int(KTool.subByte(daily_12737,i * 8,8));
            _mainUI["mapMc_" + 2]["numTx_" + i].text = String(scoreNum3);
            scoreNum4 = int(KTool.subByte(daily_12738,i * 8,8));
            _mainUI["mapMc_" + 3]["numTx_" + i].text = String(scoreNum4);
         }
         if(BitUtils.getBit(daily_12729,24) == 0)
         {
            if(allsurplusNum == 0)
            {
               sendCmd(this._commdId,[7,7],function():void
               {
                  refresh();
               });
            }
            else if(allNum == 0)
            {
               sendCmd(this._commdId,[8,1],function():void
               {
                  refresh();
               });
            }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

