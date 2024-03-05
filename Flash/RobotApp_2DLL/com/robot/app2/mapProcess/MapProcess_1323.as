package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.ResonanceOfTheSourceOfLifeController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_1323 extends BaseMapProcess
   {
      
      private static var ogres:Array = [];
      
      private static var _bossId:int = 1022;
       
      
      protected var _bossIndexArr:Array;
      
      protected var _fightNum:int;
      
      protected var _petIdArr:Array;
      
      protected var _numArr:Array;
      
      protected var _curIndex:int;
      
      protected var _isWin:Boolean;
      
      protected var isNpcClick:Boolean;
      
      protected var _map:MapModel;
      
      protected var _step:int;
      
      private var _itemNum:int;
      
      private var _arr:Array;
      
      private var _nameArr:Array;
      
      public function MapProcess_1323()
      {
         this._petIdArr = [1148,1170,620,230,476,833];
         this._numArr = [6,7,8,8];
         this._arr = [3330,3335];
         this._nameArr = ["玄天神武","菲格利亚"];
         super();
      }
      
      private static function removeBoss() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres.length)
            {
               _loc2_ = ogres[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres.splice(0);
         }
      }
      
      protected static function onClickBossHandler(param1:RobotEvent) : void
      {
         FightManager.fightWithBoss("黑格",int(Math.random() * 3));
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         OgreModel.isShow = true;
         if(MainManager.isFighting)
         {
            KTool.getMultiValue([104571],function(param1:Array):void
            {
               if(param1[0] > ResonanceOfTheSourceOfLifeController.lingqi)
               {
                  Alarm2.show("灵气浓度增加了" + (param1[0] - ResonanceOfTheSourceOfLifeController.lingqi) + "点！");
                  ResonanceOfTheSourceOfLifeController.lingqi = param1[0];
               }
            });
         }
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
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         index1 = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("ResonanceOfTheSourceOfLifeMainPanel"),"正在打开....");
               });
               break;
            case "itemBtn":
               AnimateManager.playMcAnimate(this._map.controlLevel["itemMc_" + index1],3,"mc",function():void
               {
                  KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                  {
                     update();
                  },[19,1 + index1]);
               },false,true);
               break;
            case "bossBtn":
               if(this._step == 2)
               {
                  KTool.getMultiValue([104574,104575],function(param1:Array):void
                  {
                     var va:Array = param1;
                     if(va[index1] >= 100)
                     {
                        Alarm2.show("这只精灵的恢复进度已经达到100了！");
                     }
                     else
                     {
                        NpcDialog.show(_arr[index1],["是谁来吸收这3颗水晶簇对我们来说并没有什么区别，只要它不落在混沌教派手里就行了！就由你来决定谁先谁后吧！"],["就由你先吸收吧！","我需要再考虑一下。"],[function():void
                        {
                           Alert.show("你确定要让" + _nameArr[index1] + "吸收吗？这将令你更快地获得" + _nameArr[index1] + "!",function():void
                           {
                              KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                              {
                                 update();
                              },[20,1 + index1]);
                           });
                        }],false,null,true);
                     }
                  });
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("ResonanceOfTheSourceOfLifeFightPanel"),"正在打开....");
               }
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
         }
      }
      
      protected function update() : void
      {
         var i:int;
         var i1:int;
         this._map.controlLevel["tipsMc"].visible = false;
         i = 0;
         while(i < 3)
         {
            this._map.controlLevel["itemMc_" + i].visible = false;
            i++;
         }
         this._map.controlLevel["itemIcon"].visible = false;
         this._map.controlLevel["itemNumTx"].visible = false;
         this._map.controlLevel["progressBarMc"].visible = false;
         i1 = 0;
         while(i1 < 2)
         {
            this._map.controlLevel["hurtMc_" + i1].visible = false;
            i1++;
         }
         KTool.getMultiValue([104570,104571,104572,104573,16979],function(param1:Array):void
         {
            var i:int = 0;
            var j:int = 0;
            var k:int = 0;
            var num:uint = 0;
            var num1:uint = 0;
            var va:Array = param1;
            _step = KTool.subByte(va[0],4,4);
            ResonanceOfTheSourceOfLifeController.lingqi = va[1];
            if(_step >= 1)
            {
               ItemManager.updateItems([1718235],function():void
               {
                  var _loc1_:Array = new Array();
                  _loc1_[0] = ItemManager.getNumByID(1718235);
                  _itemNum = _loc1_[0];
                  _map.controlLevel["itemNumTx"].text = "x" + String(_itemNum);
               });
            }
            if(BitUtils.getBit(va[0],0) <= 0)
            {
               frontPlot();
            }
            else if(_step == 0)
            {
               _map.controlLevel["tipsMc"].mc.gotoAndStop(1);
               _map.controlLevel["tipsMc"].visible = true;
               _map.controlLevel["progressBarMc"].mc.gotoAndStop(va[1] + 1);
               _map.controlLevel["progressBarMc"].numTx.text = String(va[1] + "/100");
               _map.controlLevel["progressBarMc"].visible = true;
               if(va[1] >= 100)
               {
                  i = 0;
                  while(i < 3)
                  {
                     _map.controlLevel["itemMc_" + i].visible = true;
                     i++;
                  }
                  NpcDialog.show(3330,["快看！又出现了！就是这些生命水晶簇，引发的共鸣！吸收它们的气息，对我们的成长大有裨益！"],["..."],[function():void
                  {
                     NpcDialog.show(3335,["可惜，只剩3颗了，看来今天的灵气已经被消耗了太多，得等到明天才能获得更多的水晶簇了！"],["..."],[function():void
                     {
                        KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                        {
                           update();
                        },[18,1]);
                     }],false,null,true);
                  }],false,null,true);
               }
               else
               {
                  addBoss();
               }
            }
            else if(_step == 1)
            {
               _map.controlLevel["tipsMc"].mc.gotoAndStop(2);
               _map.controlLevel["tipsMc"].visible = true;
               _map.controlLevel["itemIcon"].visible = true;
               _map.controlLevel["itemNumTx"].visible = true;
               j = 0;
               while(j < 3)
               {
                  _map.controlLevel["itemMc_" + j].gotoAndStop(2);
                  if(BitUtils.getBit(va[2],j) > 0)
                  {
                     _map.controlLevel["itemMc_" + j].visible = false;
                  }
                  else
                  {
                     _map.controlLevel["itemMc_" + j].visible = true;
                  }
                  j++;
               }
               if(va[2] == 7)
               {
                  NpcDialog.show(3335,["这最后的水晶簇，由我们谁来吸收呢？"],["..."],[function():void
                  {
                     NpcDialog.show(3330,["公平起见，就让" + MainManager.actorInfo.nick + "来决定吧！"],["什么？我？"],[function():void
                     {
                        KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                        {
                           update();
                        },[18,2]);
                     }],false,null,true);
                  }],false,null,true);
               }
            }
            else if(_step == 2)
            {
               _map.controlLevel["tipsMc"].mc.gotoAndStop(3);
               _map.controlLevel["tipsMc"].visible = true;
               _map.controlLevel["itemIcon"].visible = true;
               _map.controlLevel["itemNumTx"].visible = true;
               k = 0;
               while(k < 2)
               {
                  _map.controlLevel["bossMc_" + k].gotoAndStop(2);
                  k++;
               }
               num = uint(KTool.subByte(va[2],4,4));
               if(num > 0)
               {
                  _map.controlLevel["bossMc_" + (2 - num)].gotoAndStop(1);
                  AnimateManager.playMcAnimate(_map.controlLevel["bossMc_" + (num - 1)],4,"mc",function():void
                  {
                     NpcDialog.show(_arr[num - 1],["好神奇的力量，我能感觉到自己的身体正在慢慢改变……我需要通过战斗来巩固这种力量！" + MainManager.actorInfo.nick + "你能帮帮忙吗？"],["非常乐意！"],[function():void
                     {
                        KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                        {
                           update();
                        },[18,3]);
                     }],false,null,true);
                  },false,true);
               }
            }
            else if(_step == 3)
            {
               _map.controlLevel["tipsMc"].mc.gotoAndStop(4);
               _map.controlLevel["tipsMc"].visible = true;
               num1 = uint(KTool.subByte(va[2],4,4));
               _map.controlLevel["bossMc_" + (num1 - 1)].gotoAndStop(3);
               _map.controlLevel["hurtMc_" + (num1 - 1)].numTx.text = String(va[3] + "/6000");
               _map.controlLevel["hurtMc_" + (num1 - 1)].visible = true;
               if(va[3] >= 6000)
               {
                  ModuleManager.hideAllModule();
                  Alarm2.show(_nameArr[num1 - 1] + "的吸收进度增加了50%！");
                  NpcDialog.show(_arr[num1 - 1],["谢谢你，我觉得今天已经吸收的差不多了！不过，混沌教派显然已经盯上了这里，恐怕明天他们还会派手下来窃取生命气息。"],["这可不行，我们必须阻止他们！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["不用担心，明天我还会回来这里帮助你们的，直到混沌教派被彻底从此处驱赶出去为止！"],["谢谢你！"],[function():void
                     {
                        KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                        {
                           update();
                        },[18,4]);
                     }],false,null,false);
                  }],false,null,true);
               }
            }
            if(va[4] > 0)
            {
               Alarm2.show("这里的生命气息已经被吸收的差不多了，可能要等明天才能恢复。明天再来吧！",function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("ResonanceOfTheSourceOfLifeMainPanel"),"正在打开....");
                  });
               });
            }
         });
      }
      
      protected function frontPlot() : void
      {
         NpcDialog.show(NPC.SEER,["咦，朱雀之子，玄武之子，你们怎么会在这里？"],["..."],[function():void
         {
            NpcDialog.show(3335,["我们是被这里的生命气息吸引来的，它与我们体内的气息产生了共鸣！神兽的血脉在指引我们，在这里，我们可以获得巨大成长！"],["..."],[function():void
            {
               NpcDialog.show(3330,["不过，我们遇到了一些小问题……"],["怎么了？"],[function():void
               {
                  NpcDialog.show(3330,["就在刚才，一群黑格们突然出现，疯狂地吸收这里的生命灵气。我们俩人虽然已经尽力驱赶了，但是还是没能挡住他们所有人。"],["怎么了？"],[function():void
                  {
                     NpcDialog.show(3335,["现在的这里，已经没有多少生命灵气了！虽然作为泰坦星域的命脉，这里会逐渐地恢复过来，但我害怕，黑格们这样的行动，是背后是有人在指使……"],["我想答案已经呼之欲出了……混沌教派！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["绝对不能让这里的生命气息为混沌教派所用！我这就来帮你驱赶他们！"],["辛苦你了！"],[function():void
                        {
                           KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                           {
                              update();
                           },[18,0]);
                        }],false,null,false);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }],false,null,false);
      }
      
      public function addBoss() : void
      {
         var _loc4_:OgreModel = null;
         removeBoss();
         ogres = [];
         var _loc1_:Array = [new Point(114,463),new Point(225,365),new Point(370,273),new Point(282,378),new Point(635,481),new Point(630,265)];
         var _loc2_:int = int(Math.random() * 3);
         var _loc3_:int = 0;
         while(_loc3_ < 3)
         {
            _loc4_ = new OgreModel(_loc3_);
            ogres.push(_loc4_);
            _loc4_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
            _loc4_.show(_bossId,_loc1_[_loc2_ + _loc3_]);
            _loc3_++;
         }
      }
      
      override public function destroy() : void
      {
         removeBoss();
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
