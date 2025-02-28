package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11880 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      private var _surplusNum:int;
      
      private var _itemNum:int;
      
      private var _curIndex:int;
      
      private var _pointArr:Array;
      
      private var _curClickIndex:int;
      
      private var _curBossIndex:int;
      
      private var _duihuaIndex:int;
      
      private var _arr:Array;
      
      public function MapProcess_11880()
      {
         this._pointArr = [new Point(219,310),new Point(286.9,429.35),new Point(486.1,410.5),new Point(471.95,299),new Point(619,274)];
         this._arr = ["真是个自不量力的小家伙，感受这十重空间的恐怖吧！（击败有几率掉落异次元能量）","居然这么轻易就找到我了？可你是无法战胜我的！哈哈哈哈哈哈！（击败他击败通过此关卡）"];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.topLevel.mouseChildren = false;
         this._map.topLevel.mouseEnabled = false;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      protected function onBossClick(param1:MouseEvent) : void
      {
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               if(MainManager.actorInfo.mapID == 1)
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     MapManager.changeMapWithCallback(2,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("GammaStarSpiritMainPanel"),"正在打开....");
                     });
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("GammaStarSpiritMainPanel"),"正在打开....");
                  });
               }
               break;
            case "guizheBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("GammaStarSpiritShuoMingPanel"),"正在打开....");
               break;
            case "dapoBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("GammaStarSpiritStep2Panel"),"正在打开....");
               break;
            case "buyBtn":
               EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,this.onBuySpHandler);
               ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
                  "productID":256175,
                  "iconID":1720291,
                  "exchangeID":12752
               });
               break;
            case "addBtn":
               KTool.buyProductByCallback(256176,1,function():void
               {
                  KTool.doExchange(12753,function():void
                  {
                     update();
                  });
               });
               break;
            case "btn_" + index:
               this._curClickIndex = index;
               MainManager.actorModel.walkAction(this._pointArr[index]);
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
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
      
      private function onEnter0(param1:RobotEvent) : void
      {
         var arr:Array = null;
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,this._pointArr[this._curClickIndex]) < 40)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
            if(this._curClickIndex == 0)
            {
               if(this._duihuaIndex > 0)
               {
                  this.duihua(this._duihuaIndex);
               }
               else
               {
                  KTool.socketSendCallBack(43310,function():void
                  {
                     KTool.getMultiValue([104851],function(param1:Array):void
                     {
                        var _loc2_:uint = uint(KTool.subByte(param1[0],20,4));
                        duihua(_loc2_);
                     });
                  },[37,0]);
               }
            }
            else if(this._curClickIndex == 1)
            {
               KTool.socketSendCallBack(43310,function():void
               {
                  Alarm2.show("恭喜你，获得了3个异次元能量！");
                  update();
               },[37,3]);
            }
            else if(this._curClickIndex == 2)
            {
               NpcDialog.show(NPC.SEER,["你是谁？为什么和我长得一模一样？你知道我的身份吗？"],["冒充别人是要付出代价的！","你恐怕不知道钻石的力量！","我还没准备好！"],[function():void
               {
                  FightManager.fightNoMapBoss("",16532,false,true,function():void
                  {
                     MapManager.changeMap(11880);
                     if(FightManager.isWin)
                     {
                        Alarm2.show("次元中的幻象越来越强大了，要赶紧找到伽玛星魂！");
                     }
                  });
               },function():void
               {
                  KTool.buyProductByCallback(256177,1,function():void
                  {
                     KTool.socketSendCallBack(43310,function():void
                     {
                        update();
                        Alarm2.show("次元中的幻象越来越强大了，要赶紧找到伽玛星魂！");
                     },[37,4]);
                  });
               }],false,null,false);
            }
            else if(this._curClickIndex == 3)
            {
               arr = [3423,3751,3185,3238,3896];
               NpcDialog.show(arr[this._curBossIndex - 1],[this._arr[this._curBossIndex < 5 ? 0 : 1]],["哼！我一定会击败你！（进入战斗）","你恐怕不知道钻石的力量！","我还没准备好！"],[function():void
               {
                  fight();
               },function():void
               {
                  KTool.buyProductByCallback(256178 + (_curBossIndex < 5 ? 0 : 1),1,function():void
                  {
                     KTool.socketSendCallBack(43310,function():void
                     {
                        if(_curBossIndex < 5)
                        {
                           Alarm2.show("恭喜你击败了异次元中的看守者，继续前行吧！");
                        }
                        update();
                     },[37,_curBossIndex < 5 ? 5 : 6]);
                  });
               }],false,null,true);
            }
            else if(this._curClickIndex == 4)
            {
               if(this._surplusNum <= 0)
               {
                  Alarm2.show("剩余寻找次数不足！");
                  return;
               }
               KTool.socketSendCallBack(43310,function():void
               {
                  MapManager.changeMapWithCallback(11881,function():void
                  {
                     MapManager.changeMapWithCallback(11880,function():void
                     {
                     });
                  });
               },[36,0]);
            }
         }
      }
      
      private function fight() : void
      {
         FightManager.fightNoMapBoss("",16533 + this._curBossIndex - 1,false,true,function():void
         {
            MapManager.changeMap(11880);
            if(FightManager.isWin)
            {
               if(_curBossIndex < 5)
               {
                  Alarm2.show("恭喜你击败了异次元中的看守者，继续前行吧！");
               }
            }
         });
      }
      
      private function onBuySpHandler(param1:*) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,this.onBuySpHandler);
         this.update();
      }
      
      private function duihua(param1:int) : void
      {
         var num:int = param1;
         if(num == 1)
         {
            NpcDialog.show(77,["伽玛星魂的多重次元简直太恐怖了！这是我收集的异次元能量！赛尔，我们要抓紧时间击破各个次元，只有缩小多重次元的范围，才能有更多机会找到伽玛星魂！"],["好的，我明白了！"],[function():void
            {
               KTool.socketSendCallBack(43310,function():void
               {
                  Alarm2.show("恭喜你，获得了3个异次元能量，继续前行吧！ ");
                  update();
               },[37,1]);
            }],false,null,true);
         }
         else
         {
            NpcDialog.show(416,["哈哈哈哈，上当了吧，这3个异次元能量我偷走了哦！"],["可恶，原来是次元中产生的幻象！"],[function():void
            {
               KTool.socketSendCallBack(43310,function():void
               {
                  Alarm2.show("可恶，损失了3个异次能量元，继续前行吧！");
                  update();
               },[37,2]);
            }],false,null,true);
         }
      }
      
      protected function update() : void
      {
         KTool.getMultiValue([104852,10742],function(param1:Array):void
         {
            _itemNum = param1[0];
            _map.controlLevel["itemNumTx"].text = String(_itemNum);
            _surplusNum = 8 - param1[1];
            _map.controlLevel["surplusNumTx"].text = String(_surplusNum);
            if(_surplusNum > 0)
            {
               CommonUI.setEnabled(_map.controlLevel["addBtn"],false,true);
            }
            else
            {
               CommonUI.setEnabled(_map.controlLevel["addBtn"],true,false);
            }
         });
         KTool.getMultiValue([104851,104847],function(param1:Array):void
         {
            var index2:uint;
            var i:int;
            var index3:uint;
            var num:uint;
            var va:Array = param1;
            var index:uint = uint(KTool.subByte(va[0],12,4));
            _map.controlLevel["titleMc"].gotoAndStop(index);
            index2 = uint(KTool.subByte(va[0],16,4));
            i = 0;
            while(i < 4)
            {
               _map.controlLevel["btn_" + i].visible = false;
               i++;
            }
            if(BitUtils.getBit(va[0],10) > 0)
            {
               _map.controlLevel["btn_4"].visible = true;
            }
            else
            {
               _map.controlLevel["btn_4"].visible = false;
               if(index2 > 0)
               {
                  _map.controlLevel["btn_" + (index2 - 1)].visible = true;
               }
            }
            _duihuaIndex = KTool.subByte(va[0],20,4);
            index3 = uint(KTool.subByte(va[0],24,4));
            _curBossIndex = index3;
            _map.controlLevel["btn_3"].gotoAndStop(index3);
            num = uint(KTool.subByte(va[1],4,4));
            if(num > 2)
            {
               Alarm2.show("恭喜你，完成了本关卡！",function():void
               {
                  if(MainManager.actorInfo.mapID == 1)
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        MapManager.changeMapWithCallback(2,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("GammaStarSpiritMainPanel"),"正在打开....");
                        });
                     });
                  }
                  else
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("GammaStarSpiritMainPanel"),"正在打开....");
                     });
                  }
               });
            }
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
         super.destroy();
      }
   }
}
