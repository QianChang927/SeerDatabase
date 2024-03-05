package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_11717 extends BaseMapProcess
   {
       
      
      private var _step:int;
      
      private var _itemNumArr:Array;
      
      private var _caijinNum:int;
      
      private var _duoxiNum:int;
      
      private var _surplusTime:int;
      
      public var _map:MapModel;
      
      public function MapProcess_11717()
      {
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         index1 = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "difuteBtn":
               NpcDialog.show(NPC.SEER,["我又带了一些彩晶石回来！"],["太棒了！"],[function():void
               {
                  NpcDialog.show(3590,["把它们放在墨鲁萨脚下，他们会自己吸收石化的气息的。古夫曼也有可能会出现，我们耐心等待就行了！"],["好！"],[function():void
                  {
                     KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                     {
                        update();
                     },[19,1]);
                  }],false,null,true);
               }],false,null,false);
               break;
            case "kongBtn":
               if(this._itemNumArr[0] > 0)
               {
                  this._map.controlLevel["mc"]["playMc"]["mc_" + index1].visible = true;
                  AnimateManager.playMcAnimate(this._map.controlLevel["mc"]["playMc"],1,"mc_" + index1,function():void
                  {
                     _map.controlLevel["mc"]["playMc"]["mc_" + index1].visible = false;
                     KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                     {
                        update();
                     },[16,index1 + 1]);
                  },false,true);
               }
               else
               {
                  Alarm2.show("你需要更多彩晶石！炫彩山，出发！",function():void
                  {
                     MapManager.changeMap(11716);
                  });
               }
               break;
            case "duoxiBtn":
               if(this._itemNumArr[1] > 0)
               {
                  KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                  {
                     var e:SocketEvent = param1;
                     if(_duoxiNum < 3)
                     {
                        Alarm2.show("墨鲁萨的解救进度增加了25%！当进度达到100%时，你就能获得墨鲁萨了！");
                     }
                     KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                     {
                        update();
                     },[19,6]);
                  },[16,index1 + 4]);
               }
               else
               {
                  Alarm2.show("将古夫曼击败，即可获得多西石!");
               }
               break;
            case "gufumanBtn":
               ModuleManager.showAppModule("ReSeeingThePartnersOfTheDayFightPanel",4);
         }
      }
      
      protected function update() : void
      {
         var arr:Array = null;
         arr = [1717881,1717882];
         ItemManager.updateItems(arr,function():void
         {
            _itemNumArr = new Array();
            var _loc1_:int = 0;
            while(_loc1_ < arr.length)
            {
               _itemNumArr[_loc1_] = ItemManager.getNumByID(arr[_loc1_]);
               _loc1_++;
            }
         });
         KTool.getMultiValue([103127,103122,103124,103125],function(param1:Array):void
         {
            var i:int;
            var i2:int;
            var i5:int = 0;
            var i6:int = 0;
            var passTime:int = 0;
            var i7:int = 0;
            var i8:int = 0;
            var i1:int = 0;
            var va:Array = param1;
            _caijinNum = 0;
            _duoxiNum = 0;
            i = 0;
            while(i < 3)
            {
               if(BitUtils.getBit(va[1],i) > 0)
               {
                  ++_caijinNum;
               }
               i++;
            }
            i2 = 0;
            while(i2 < 4)
            {
               if(BitUtils.getBit(va[1],i2 + 3) > 0)
               {
                  ++_duoxiNum;
               }
               i2++;
            }
            _step = va[0];
            if(BitUtils.getBit(va[3],3) > 0)
            {
               if(_step == 4)
               {
                  KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                  {
                     update();
                  },[19,5]);
               }
            }
            if(_step == 0)
            {
               if(_itemNumArr[0] >= 3)
               {
                  _map.controlLevel["mc"].gotoAndStop(1);
                  _map.controlLevel["mc"].tipsMc.visible = false;
                  _map.controlLevel["mc"].difuteMc.gotoAndStop(2);
               }
               else
               {
                  NpcDialog.show(NPC.SEER,["多西石还不够！我们该怎么吸引更多的古夫曼来这里呢……对了，古夫曼喜欢吃彩晶石，我们就给它更多的彩晶石！"],["..."],[function():void
                  {
                     ModuleManager.showAppModule("ReSeeingThePartnersOfTheDayAlertPanel",5);
                  }],false,null,true);
               }
            }
            if(_step == 1)
            {
               _map.controlLevel["mc"].gotoAndStop(2);
               _map.controlLevel["mc"].tipsMc.gotoAndStop(1);
               _map.controlLevel["mc"].tipsMc.visible = true;
               _map.controlLevel["mc"].difuteMc.gotoAndStop(1);
               i5 = 0;
               while(i5 < 3)
               {
                  _map.controlLevel["mc"]["playMc"]["mc_" + i5].visible = false;
                  if(BitUtils.getBit(va[1],i5) > 0)
                  {
                     _map.controlLevel["mc"]["mc_" + i5].gotoAndStop(2);
                  }
                  i5++;
               }
               if(_caijinNum >= 3)
               {
                  Alarm2.show("彩晶石开始吸收墨鲁萨身上的石化气息了。",function():void
                  {
                     NpcDialog.show(3590,["墨鲁萨的身体会对彩晶石产生抗性，这一次的吸收过程大约要10个小时！你还是晚些再来看看效果吧！"],["那我晚些再来！"],[function():void
                     {
                     }],false,null,true);
                     KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                     {
                        update();
                     },[19,2]);
                  });
               }
            }
            if(_step == 2)
            {
               StatManager.sendStat2014("0831重见天日的伙伴","开始10小时倒计时","2018运营活动");
               _map.controlLevel["mc"].gotoAndStop(3);
               _map.controlLevel["mc"].tipsMc.gotoAndStop(2);
               _map.controlLevel["mc"].tipsMc.visible = true;
               _map.controlLevel["mc"].difuteMc.gotoAndStop(1);
               _map.controlLevel["mc"]["playMc"].visible = false;
               i6 = 0;
               while(i6 < 3)
               {
                  _map.controlLevel["mc"]["playMc"]["mc_" + i6].visible = false;
                  _map.controlLevel["mc"]["mc_" + i].gotoAndStop(2);
                  i6++;
               }
               passTime = SystemTimerManager.time - va[2];
               _surplusTime = 10 * 60 * 60 - passTime;
               if(_surplusTime > 0)
               {
                  SystemTimerManager.addTickFun(onTimer);
               }
               else
               {
                  SystemTimerManager.removeTickFun(onTimer);
                  if(va[0] > 0)
                  {
                     KTool.playSceneAnimation("map_reSeeingThePartnersOfTheDay",2,function():void
                     {
                        KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                        {
                           update();
                        },[19,3]);
                     },0);
                  }
               }
            }
            if(_step == 3)
            {
               _map.controlLevel["mc"].gotoAndStop(4);
               _map.controlLevel["mc"].tipsMc.gotoAndStop(3);
               _map.controlLevel["mc"].tipsMc.visible = false;
               CommonUI.setEnabled(_map.controlLevel["mc"],false,false);
               NpcDialog.show(3590,["古夫曼出现了！小赛尔，看你的了！"],["包在我身上！"],[function():void
               {
                  CommonUI.setEnabled(_map.controlLevel["mc"],true,false);
                  KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                  {
                     update();
                  },[19,4]);
               }],false,null,true);
            }
            if(_step == 4)
            {
               _map.controlLevel["mc"].gotoAndStop(4);
               _map.controlLevel["mc"].tipsMc.gotoAndStop(3);
               _map.controlLevel["mc"].tipsMc.visible = true;
               _map.controlLevel["mc"].gufumanMc.gotoAndStop(2);
            }
            if(_step == 5)
            {
               _map.controlLevel["mc"].gotoAndStop(5);
               _map.controlLevel["mc"].tipsMc.gotoAndStop(4);
               _map.controlLevel["mc"].tipsMc.visible = true;
               i7 = 0;
               while(i7 < 4)
               {
                  if(BitUtils.getBit(va[1],i7 + 3) > 0)
                  {
                     _map.controlLevel["mc"]["ballMc_" + i7].gotoAndStop(2);
                  }
                  i7++;
               }
               if(_itemNumArr[1] == 0)
               {
                  KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                  {
                     update();
                  },[19,6]);
               }
            }
            if(_step == 6)
            {
               _map.controlLevel["mc"].gotoAndStop(5);
               _map.controlLevel["mc"]["tipsMc"].gotoAndStop(5);
               _map.controlLevel["mc"]["tipsMc"].visible = true;
               _map.controlLevel["mc"].balljiantouMc.visible = false;
               i8 = 0;
               while(i8 < 4)
               {
                  if(BitUtils.getBit(va[1],i8 + 3) > 0)
                  {
                     _map.controlLevel["mc"]["ballMc_" + i8].gotoAndStop(2);
                  }
                  i8++;
               }
               if(_duoxiNum < 4)
               {
                  NpcDialog.show(NPC.SEER,["多西石还不够！我们该怎么吸引更多的古夫曼来这里呢……对了，古夫曼喜欢吃彩晶石，我们就给它更多的彩晶石！"],["..."],[function():void
                  {
                     Alarm2.show("你需要更多彩晶石！炫彩山，出发！",function():void
                     {
                        KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                        {
                           MapManager.changeMap(11716);
                        },[19,0]);
                     });
                  }],false,null,false);
               }
               else
               {
                  KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                  {
                     over();
                  },[19,7]);
               }
            }
            if(_step == 7)
            {
               _map.controlLevel["mc"].gotoAndStop(5);
               _map.controlLevel["mc"]["tipsMc"].gotoAndStop(5);
               _map.controlLevel["mc"]["tipsMc"].visible = false;
               _map.controlLevel["mc"].balljiantouMc.visible = false;
               _map.controlLevel["mc"].mulusaMc.gotoAndStop(3);
               _map.controlLevel["mc"].difuteMc.visible = false;
               i1 = 0;
               while(i1 < 4)
               {
                  if(BitUtils.getBit(va[1],i1 + 3) > 0)
                  {
                     _map.controlLevel["mc"]["ballMc_" + i1].gotoAndStop(2);
                     _map.controlLevel["mc"]["ballMc_" + i1].visible = false;
                  }
                  i1++;
               }
               NpcDialog.show(3721,["哈啊啊啊……好困……唔……咦？我……我恢复了！"],["恭喜恭喜！"],[function():void
               {
                  NpcDialog.show(3721,["哈哈哈，没有什么比呼吸空气更舒服的事情了！谢谢你，来自赛尔号的勇士！还有这位，来自炫彩山的山神！"],["不客气！"],[function():void
                  {
                     NpcDialog.show(3721,["陨星议会！哼，这些可恶的家伙一定还在墨杜萨星为非作歹！勇士，我能否加入你的队伍，与你一起，为正义战斗?"],["欢迎你！"],[function():void
                     {
                        NpcDialog.show(3721,["我要让这些家伙为他们的所作所为付出代价！"],["..."],[function():void
                        {
                           KTool.doExchange(11871,function():void
                           {
                              MapManager.changeMapWithCallback(1,function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("ReSeeingThePartnersOfTheDayMainPanel"),"正在打开....");
                              });
                           });
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
            }
         });
      }
      
      private function onTimer() : void
      {
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.update();
         }
         else
         {
            this.getTimeClockString(this._surplusTime);
         }
      }
      
      private function getTimeClockString(param1:int) : void
      {
         this._map.controlLevel["mc"].tipsMc.timeTx.text = SystemTimerManager.getTimeClockString(param1,true);
      }
      
      private function over() : void
      {
         StatManager.sendStat2014("0831重见天日的伙伴","进入结尾剧情","2018运营活动");
         NpcDialog.show(3590,["快看，多西石有反应了！"],["嗯？"],[function():void
         {
            KTool.playSceneAnimation("map_reSeeingThePartnersOfTheDay",3,function():void
            {
               update();
            },0);
         }],false,null,true);
      }
      
      override public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
