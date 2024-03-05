package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11820 extends BaseMapProcess
   {
      
      private static var ogres:Array = [];
      
      private static var _petId:int = 280;
      
      private static var _isClickBoss:Boolean = false;
       
      
      protected var _map:MapModel;
      
      private var _itemNumArr:Array;
      
      private var _winNum:int;
      
      private var _isAdd:Boolean;
      
      public function MapProcess_11820()
      {
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
         if(!_isClickBoss)
         {
            _isClickBoss = true;
            FightManager.fightWithBoss("沙罗希瓦",0);
            StatManager.sendStat2014("0215恐怖的虚空能量","挑战沙罗希瓦","2019运营活动");
         }
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         _isClickBoss = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this._map.topLevel.mouseChildren = false;
         this._map.topLevel.mouseEnabled = false;
         OgreModel.isShow = true;
         this.addBoss();
         if(MainManager.isFighting)
         {
            if(FightManager.isWin)
            {
               KTool.getMultiValue([103362],function(param1:Array):void
               {
                  var va:Array = param1;
                  if(_winNum == va[0])
                  {
                     KTool.getPlayerInfo([964],function(param1:Array):void
                     {
                        if(param1[0] == 0)
                        {
                           Alarm2.show("啊…这只沙罗希瓦怎么突然消失了！");
                        }
                     });
                     update();
                  }
                  else
                  {
                     if(va[0] < 5)
                     {
                     }
                     update();
                  }
               });
            }
            else
            {
               this.update();
            }
         }
         else
         {
            this.update();
         }
         if(!BufferRecordManager.getMyState(1479))
         {
            BufferRecordManager.setMyState(1479,true,function():void
            {
               _map.topLevel["playMc"].visible = true;
               AnimateManager.playMcAnimate(_map.topLevel["playMc"],1,"mc",function():void
               {
                  _map.topLevel["playMc"].visible = false;
               },false,true);
            });
         }
         else
         {
            this._map.topLevel["playMc"].visible = false;
         }
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         index = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HorribleVoidEnergyMainPanel"),"正在打开....");
               });
               break;
            case "addBtn_" + index:
               KTool.buyProductByCallback(255440 + index,1,function():void
               {
                  KTool.doExchange(12378 + index,function():void
                  {
                     update();
                  });
               });
               break;
            case "addPowerBtn":
               if(this._itemNumArr[0] >= 2 && this._itemNumArr[1] >= 2)
               {
                  KTool.doExchange(12380,function():void
                  {
                     update();
                  });
               }
               else
               {
                  Alarm2.show("很抱歉，你的道具不足，快去挑战场景中的沙罗希瓦吧！");
               }
               break;
            case "bossBtn":
               StatManager.sendStat2014("0215恐怖的虚空能量","挑战无治奇","2019运营活动");
               FightManager.fightNoMapBoss("",!this._isAdd ? 15487 : 15488,false,true,function():void
               {
                  KTool.getMultiValue([103362],function(param1:Array):void
                  {
                     var va:Array = param1;
                     if(_winNum == va[0])
                     {
                        Alarm2.show("狂躁的妖兽实力太强了，试试增强虚空能量吧！");
                     }
                     else if(va[0] < 5)
                     {
                        Alarm2.show("虚空能量寄存在无治奇的身体中，无治奇似乎发生了一些变化！",function():void
                        {
                           _map = MapManager.currentMap;
                           AnimateManager.playMcAnimate(_map.controlLevel["bossMc"],2,"mc2",function():void
                           {
                              _map.controlLevel["bossMc"].gotoAndStop(1);
                           },false,true);
                        });
                     }
                     else
                     {
                        Alarm2.show("恭喜你完成活动！",function():void
                        {
                           _map = MapManager.currentMap;
                           AnimateManager.playMcAnimate(_map.controlLevel["bossMc"],3,"mc3",function():void
                           {
                              MapManager.changeMapWithCallback(1,function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("HorribleVoidEnergyMainPanel"),"正在打开....");
                              });
                           },false,true);
                        });
                     }
                  });
               });
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
      
      public function update(param1:Function = null) : void
      {
         var arr:Array = null;
         var fun:Function = param1;
         arr = [1719306,1719307];
         ItemManager.updateItems(arr,function():void
         {
            _itemNumArr = new Array();
            var _loc1_:int = 0;
            while(_loc1_ < arr.length)
            {
               _itemNumArr[_loc1_] = ItemManager.getNumByID(arr[_loc1_]);
               _map.controlLevel["itemNumTx_" + _loc1_].text = String(_itemNumArr[_loc1_]);
               _loc1_++;
            }
            if(fun != null)
            {
               fun();
            }
         });
         KTool.getMultiValue([103362],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            _winNum = param1[0];
            _map.controlLevel["numTx"].text = String(param1[0]);
         });
         KTool.getBitSet([15327],function(param1:Array):void
         {
            _isAdd = param1[0] > 0 ? true : false;
            _map.controlLevel["btnMc"].gotoAndStop(_isAdd ? 2 : 1);
         });
      }
      
      public function addBoss() : void
      {
         var _loc4_:OgreModel = null;
         removeBoss();
         ogres = [];
         var _loc1_:Array = [new Point(443,345),new Point(436,430),new Point(663,370),new Point(762,440),new Point(600,333),new Point(650,450)];
         var _loc2_:int = int(Math.random() * 3);
         var _loc3_:int = 0;
         while(_loc3_ < 3)
         {
            _loc4_ = new OgreModel(_loc3_);
            ogres.push(_loc4_);
            _loc4_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
            _loc4_.show(_petId,_loc1_[_loc2_ + _loc3_]);
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
