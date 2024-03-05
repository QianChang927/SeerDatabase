package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.app2.utilClass.ActivityXMLInfo;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.OgreModel;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.manager.ResourceManager;
   
   public class WentToDOUMOLandController
   {
      
      public static const MAPID_ARR:Array = [11154,1012,11156,11157,11158];
      
      public static const BOSSID:Array = [6575,6576];
      
      public static const BOSSNAME:Array = ["圣甲•狂战","圣甲·雷鸣"];
      
      public static const GOODID:Array = [1708417];
      
      private static var _activity:ActivityXMLInfo;
      
      private static var _mapAnimate:String = "WentToDOUMOMc";
      
      private static var _taskMc:MovieClip;
      
      private static var _icon:MovieClip;
      
      private static var _curStep:int;
      
      private static var _map:MapModel;
      
      private static var _Npc:MovieClip;
      
      public static var StoryId:int = 19;
      
      private static var ogres:Array = [];
       
      
      public function WentToDOUMOLandController()
      {
         super();
      }
      
      public static function start(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _icon = icon;
               _activity = new ActivityXMLInfo("2016/0226/WentToDOUMO",param1,init);
            },"animation");
         }
         else
         {
            init();
         }
      }
      
      public static function init() : void
      {
         BonusController.addDelay(1801);
         _taskMc.addEventListener(MouseEvent.CLICK,onMouseClick);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         KTool.getMultiValue([8559],function(param1:Array):void
         {
            var a:Array = param1;
            KTool.changeMapWithCallBack(MAPID_ARR[a[0]],function():void
            {
               _map = MapManager.currentMap;
               _taskMc.x = 480;
               _taskMc.y = 280;
               _map.controlLevel.addChild(_taskMc);
               _map.depthLevel.visible = false;
               _taskMc.buttonMode = true;
               playStory(a[0] * 4 + 1);
            });
         });
      }
      
      public static function onMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.currentTarget.currentFrame);
         MainManager.actorModel.moveAndAction(new Point(e.stageX + 100,e.stageY + 100),function():void
         {
            switch(index)
            {
               case 2:
                  _activity.playStory(3,function():void
                  {
                     _activity.playStory(4,function():void
                     {
                        FightManager.fightNoMapBoss(BOSSNAME[0],BOSSID[0]);
                     },function():void
                     {
                        playStory(3);
                     });
                  });
                  break;
               case 3:
                  _activity.playStory(4,function():void
                  {
                     FightManager.fightNoMapBoss(BOSSNAME[0],BOSSID[0]);
                  },function():void
                  {
                     playStory(3);
                  });
                  break;
               case 6:
                  _activity.playStory(9);
                  break;
               case 7:
                  _activity.playStory(11,function():void
                  {
                     MapObjectControl.hideOrShowAllObjects(false);
                  });
                  break;
               case 8:
                  _activity.playStory(13,function():void
                  {
                     _map.controlLevel.removeChild(_taskMc);
                     _map.depthLevel.visible = true;
                     KTool.doExchange(8373,function():void
                     {
                        BonusController.showDelayBonus(1801);
                        ModuleManager.showAppModule("WentToDouMoLandPanel");
                     });
                  });
                  break;
               case 11:
                  _activity.playStory(16,function():void
                  {
                     addMapGood();
                  });
                  break;
               case 12:
                  _activity.playStory(18);
                  break;
               case 13:
                  _activity.playStory(25,function():void
                  {
                     _map.controlLevel.removeChild(_taskMc);
                     KTool.doExchange(8375,function():void
                     {
                        BonusController.showDelayBonus(1801);
                        ModuleManager.showAppModule("WentToDouMoLandPanel");
                     });
                  });
                  break;
               case 16:
                  _activity.playStory(28,function():void
                  {
                     _activity.playStory(29,function():void
                     {
                        FightManager.fightNoMapBoss(BOSSNAME[1],BOSSID[1]);
                     },function():void
                     {
                        playStory(15);
                     });
                  });
                  break;
               case 17:
                  _activity.playStory(29,function():void
                  {
                     FightManager.fightNoMapBoss(BOSSNAME[1],BOSSID[1]);
                  },function():void
                  {
                     playStory(15);
                  });
                  break;
               case 20:
                  _activity.playStory(34,function():void
                  {
                     _map.controlLevel.removeChild(_taskMc);
                     KTool.doExchange(8376,function():void
                     {
                        BonusController.showDelayBonus(1801);
                        ModuleManager.showAppModule("WentToDouMoLandPanel");
                     });
                  });
            }
         });
      }
      
      public static function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo = null;
         var e:PetFightEvent = param1;
         info = e.dataObj as FightOverInfo;
         if(FightManager.currentBossRegion == BOSSID[0])
         {
            KTool.changeMapWithCallBack(MAPID_ARR[0],function():void
            {
               _map = MapManager.currentMap;
               _taskMc.x = 480;
               _taskMc.y = 280;
               _map.controlLevel.addChild(_taskMc);
               _taskMc.buttonMode = true;
               if(info.winnerID == MainManager.actorID)
               {
                  playStory(4);
               }
               else
               {
                  playStory(3);
               }
            });
         }
         if(FightManager.currentBossRegion == BOSSID[1])
         {
            KTool.changeMapWithCallBack(MAPID_ARR[3],function():void
            {
               _map = MapManager.currentMap;
               _taskMc.x = 480;
               _taskMc.y = 280;
               _map.controlLevel.addChild(_taskMc);
               _taskMc.buttonMode = true;
               if(info.winnerID == MainManager.actorID)
               {
                  playStory(16);
               }
               else
               {
                  playStory(15);
               }
            });
         }
         if(FightManager.currentBossRegion == 0)
         {
            ItemManager.updateItems(GOODID,function():void
            {
               var _itemCnt:int = 0;
               _itemCnt = int(ItemManager.getNumByID(GOODID[0]));
               _activity.assignArr([_itemCnt]);
               KTool.changeMapWithCallBack(MAPID_ARR[1],function():void
               {
                  _map = MapManager.currentMap;
                  _taskMc.x = 480;
                  _taskMc.y = 280;
                  _map.controlLevel.addChild(_taskMc);
                  MapObjectControl.hideOrShowAllObjects(false);
                  _taskMc.buttonMode = true;
                  _map.depthLevel.visible = false;
                  if(_itemCnt >= 3)
                  {
                     playStory(8);
                  }
                  else
                  {
                     playStory(7);
                  }
               });
            });
         }
      }
      
      public static function playStory(param1:int) : void
      {
         var index:int = param1;
         switch(index)
         {
            case 1:
               _activity.playStory(1);
               break;
            case 2:
               _activity.playStory(2,function():void
               {
               });
               break;
            case 3:
               _activity.playStory(5);
               break;
            case 4:
               _activity.playStory(6,function():void
               {
                  _map.controlLevel.removeChild(_taskMc);
                  BonusController.showDelayBonus(1801);
                  ModuleManager.showAppModule("WentToDouMoLandPanel");
               });
               break;
            case 5:
               _activity.assignArr([0]);
               _activity.playStory(7,function():void
               {
                  MapObjectControl.hideOrShowAllObjects(false);
                  OgreController.isShow = false;
               });
               break;
            case 6:
               _activity.playStory(8);
               break;
            case 7:
               _activity.playStory(10);
               break;
            case 8:
               _activity.playStory(12);
               break;
            case 9:
               _activity.playStory(14);
               break;
            case 10:
               _activity.playStory(15);
               break;
            case 11:
               break;
            case 12:
               _activity.playStory(24);
               break;
            case 13:
               _activity.playStory(26);
               break;
            case 14:
               _activity.playStory(27);
               break;
            case 15:
               _activity.playStory(30);
               break;
            case 16:
               _activity.playStory(31,function():void
               {
                  _map.controlLevel.removeChild(_taskMc);
                  BonusController.showDelayBonus(1801);
                  ModuleManager.showAppModule("WentToDouMoLandPanel");
               });
               break;
            case 17:
               _activity.playStory(32);
               break;
            case 18:
               _activity.playStory(33);
               break;
            case 19:
         }
      }
      
      public static function addMapGood() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate + "item"),function(param1:MovieClip):void
         {
            var _loc2_:int = 1;
            while(_loc2_ <= 5)
            {
               _map.controlLevel.addChild(param1);
               param1["item_" + _loc2_].addEventListener(MouseEvent.CLICK,onGoodClick);
               _loc2_++;
            }
         },"item");
      }
      
      private static function clone(param1:Object) : *
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeObject(param1);
         _loc2_.position = 0;
         return _loc2_.readObject();
      }
      
      public static function onGoodClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var mc:MovieClip = e.currentTarget as MovieClip;
         mc.removeEventListener(MouseEvent.CLICK,onGoodClick);
         e.currentTarget.parent.removeChild(mc);
         mc = null;
         KTool.doExchange(8374,function():void
         {
            _activity.playStory(StoryId);
            ++StoryId;
         });
      }
      
      public static function addBoss() : void
      {
         var _loc3_:OgreModel = null;
         removeBoss();
         KTool.showMapAllPlayerAndMonster();
         _activity.assignArr([0]);
         ogres = [];
         OgreController.isShow = true;
         var _loc1_:Array = [new Point(350,221),new Point(611,221),new Point(350,353),new Point(611,353)];
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            _loc3_ = new OgreModel(_loc2_);
            ogres.push(_loc3_);
            _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler,false,9999);
            _loc3_.show(1624,_loc1_[_loc2_]);
            _loc2_++;
         }
      }
      
      public static function onClickBossHandler(param1:RobotEvent) : void
      {
         param1.stopImmediatePropagation();
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         FightManager.fightOgre(1624);
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
      
      public static function destroy() : void
      {
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onMouseClick);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            BonusController.removeDelay(1801);
            _taskMc = null;
            _icon = null;
            _map = null;
            _activity = null;
         }
      }
   }
}
