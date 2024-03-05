package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MantisPetModel;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MantisController
   {
      
      private static var _icon:MovieClip;
      
      private static var petMC:MantisPetModel;
       
      
      public function MantisController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip = null) : void
      {
         _icon = param1;
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         if(BitBuffSetClass.getState(22509) == 1)
         {
            followPet(false);
         }
      }
      
      public static function onClickIcon(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MantisPanel"));
      }
      
      public static function followPet(param1:Boolean = true) : void
      {
         if(petMC == null)
         {
            BitBuffSetClass.setState(22509,1);
            petMC = new MantisPetModel();
            updatePetState();
            if(param1)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MantisFindPanel"));
            }
         }
      }
      
      public static function updatePetState() : void
      {
         if(petMC == null)
         {
            return;
         }
         petMC.setDialogVisible(false);
         KTool.getMultiValue([14170,14171],function(param1:Array):void
         {
            var countTime:int = 0;
            var a:Array = param1;
            if(petMC == null)
            {
               return;
            }
            petMC.setDialogVisible(true);
            if(a[1] != 4)
            {
               countTime = 60 * 10 - SystemTimerManager.time + a[0];
               if(countTime > 0)
               {
                  petMC.setDialogVisible(false);
                  setTimeout(function():void
                  {
                     updatePetState();
                  },countTime * 1000);
               }
            }
            else
            {
               petMC.setDialogVisible(false);
            }
         });
      }
      
      public static function destroyPet(param1:Boolean = true) : void
      {
         BitBuffSetClass.setState(22509,0);
         if(petMC)
         {
            petMC.destroy();
            petMC = null;
            if(param1)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MantisFindPanel"));
            }
         }
      }
      
      public static function goStep(param1:int) : void
      {
         var index:int = param1;
         switch(index)
         {
            case 1:
               if(MapManager.currentMap.id == 1022)
               {
                  if(petMC)
                  {
                     petMC.visible = false;
                  }
                  DeathBlueSkyPlutoYaibaController.startPlay(function():void
                  {
                     if(petMC)
                     {
                        petMC.visible = true;
                     }
                     showComplete(index);
                  });
               }
               else
               {
                  MapManager.changeMap(1022);
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
                  {
                     MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     if(petMC)
                     {
                        petMC.visible = false;
                     }
                     DeathBlueSkyPlutoYaibaController.startPlay1(function():void
                     {
                        if(petMC)
                        {
                           petMC.visible = true;
                        }
                        showComplete(index);
                     });
                  });
               }
               break;
            case 2:
               if(MapManager.currentMap.id == 1020)
               {
                  getQuestion();
               }
               else
               {
                  MapManager.changeMap(1020);
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
                  {
                     MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     getQuestion();
                  });
               }
               break;
            case 3:
               if(MapManager.currentMap.id == 1021)
               {
                  startFight();
               }
               else
               {
                  MapManager.changeMap(1021);
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
                  {
                     MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     startFight();
                  });
               }
               break;
            case 4:
               if(MapManager.currentMap.id == 1022)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_3040_2"),function():void
                  {
                     showComplete(4);
                  });
               }
               else
               {
                  MapManager.changeMap(1022);
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
                  {
                     MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_3040_2"),function():void
                     {
                        showComplete(4);
                     });
                  });
               }
         }
      }
      
      public static function getQuestion() : void
      {
         if(petMC)
         {
            petMC.visible = false;
         }
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         ResourceManager.getResource(ClientConfig.getMapAnimate("petMantisMC1"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               if(petMC)
               {
                  petMC.visible = true;
               }
               DisplayUtil.removeForParent(mc);
               ModuleManager.showModule(ClientConfig.getAppModule("MantisQuesPanel"));
            });
         },"mc");
      }
      
      public static function startFight() : void
      {
         if(petMC)
         {
            petMC.visible = false;
         }
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         ResourceManager.getResource(ClientConfig.getMapAnimate("petMantisMC2"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               if(petMC)
               {
                  petMC.visible = true;
               }
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               DisplayUtil.removeForParent(mc);
               ModuleManager.showModule(ClientConfig.getAppModule("MantisFightPanel"));
            });
         },"mc");
      }
      
      public static function showComplete(param1:int, param2:Boolean = false) : void
      {
         var index:int = param1;
         var userItem:Boolean = param2;
         var showMC:Function = function():void
         {
            MantisController.updatePetState();
            ResourceManager.getResource(ClientConfig.getMapAnimate("mantisTaskComplete"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               mc.scaleX = 1.6;
               mc.scaleY = 1.6;
               mc["mc"]["numMC"].gotoAndStop(index);
               LevelManager.appLevel.addChild(mc);
               mc.x = 240;
               mc.y = 200;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc);
                  ModuleManager.showModule(ClientConfig.getAppModule("MantisFindPanel"));
               });
            });
         };
         if(userItem)
         {
            showMC();
         }
         else
         {
            SocketConnection.sendWithCallback(46184,function():void
            {
               showMC();
            },index);
         }
      }
      
      public static function get isActiveTime() : Boolean
      {
         var _loc1_:Boolean = false;
         if(SystemTimerManager.sysDate.fullYear == 2014 && SystemTimerManager.sysDate.month == 8)
         {
            if(SystemTimerManager.sysDate.date >= 5 && SystemTimerManager.sysDate.date <= 8)
            {
               _loc1_ = true;
            }
         }
         if(_loc1_)
         {
            _loc1_ = false;
            if(SystemTimerManager.sysDate.hours == 12 && SystemTimerManager.sysDate.minutes >= 30)
            {
               _loc1_ = true;
            }
            else if(SystemTimerManager.sysDate.hours == 13 && SystemTimerManager.sysDate.minutes >= 30)
            {
               _loc1_ = true;
            }
            else if(SystemTimerManager.sysDate.hours == 14 && SystemTimerManager.sysDate.minutes >= 30)
            {
               _loc1_ = true;
            }
            else if(SystemTimerManager.sysDate.hours == 15 && SystemTimerManager.sysDate.minutes >= 30)
            {
               _loc1_ = true;
            }
            else if(SystemTimerManager.sysDate.hours == 16 && SystemTimerManager.sysDate.minutes >= 30)
            {
               _loc1_ = true;
            }
            else if(SystemTimerManager.sysDate.hours == 17 && SystemTimerManager.sysDate.minutes >= 30)
            {
               _loc1_ = true;
            }
         }
         return _loc1_;
      }
   }
}
