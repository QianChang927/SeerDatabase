package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DaysEvilDragonSuperEvolutionController2
   {
      
      private static var _isTaskPlaying:Boolean = false;
      
      public static const BUFFER_ID:uint = 1330;
      
      private static var _map:BaseMapProcess;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function DaysEvilDragonSuperEvolutionController2()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         start();
      }
      
      public static function start() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_DaysEvilDragonSuperEvolution2"),function(param1:MovieClip):void
         {
            var _loc3_:int = 0;
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            taskMc["tianxieMc"].buttonMode = true;
            taskMc.addEventListener(MouseEvent.CLICK,onClick);
            _map.btnLevel["closeBtn"].addEventListener(MouseEvent.CLICK,onCloseClick);
            taskMc.gotoAndStop(1);
            var _loc2_:int = 0;
            while(_loc2_ < 6)
            {
               taskMc["boss1Mc_" + _loc2_].visible = false;
               taskMc["boss1Mc_" + _loc2_].btnMc.visible = false;
               _loc2_++;
            }
            if(!isTaskDone)
            {
               if(!_isTaskPlaying)
               {
                  startPreTask(1);
               }
            }
            else
            {
               taskMc.gotoAndStop(1);
               if(taskMc.mc1 != null)
               {
                  taskMc.mc1.gotoAndStop(757);
               }
               update();
               _loc3_ = 0;
               while(_loc3_ < 6)
               {
                  taskMc["boss1Mc_" + _loc3_].addEventListener(MouseEvent.ROLL_OVER,onRollOver);
                  taskMc["boss1Mc_" + _loc3_].addEventListener(MouseEvent.ROLL_OUT,onRollOut);
                  taskMc["boss1Mc_" + _loc3_].addEventListener(MouseEvent.CLICK,onboss1McClick);
                  _loc3_++;
               }
            }
         });
      }
      
      private static function onCloseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         MapManager.changeMapWithCallback(1,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DaysEvilDragonSuperEvolutionMainPanel"));
         });
      }
      
      private static function onRollOver(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         taskMc["boss1Mc_" + _loc2_].btnMc.visible = true;
      }
      
      private static function onRollOut(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         if(taskMc != null)
         {
            if(taskMc["boss1Mc_" + _loc2_].btnMc != null)
            {
               taskMc["boss1Mc_" + _loc2_].btnMc.visible = false;
            }
         }
      }
      
      private static function onboss1McClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         var arr:Array = ["罗修","格尔顿","莫迪西斯","格勒尔","萨拉姆","罗恩斯"];
         index = int(event.currentTarget.name.split("_")[1]);
         switch(event.target.name)
         {
            case "startFightBtn":
               StatManager.sendStat2014("0701天邪龙王超进化","点击" + arr[index] + "进行挑战","2016运营活动");
               FightManager.fightNoMapBoss("",7326 + index,false,true,function():void
               {
                  update();
               });
               break;
            case "aKeyFightBtn":
               KTool.buyProductByCallback(247877 + index,1,function():void
               {
                  SocketConnection.addCmdListener(45662,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(45662,arguments.callee);
                     update();
                  });
                  SocketConnection.send(45662,5,index + 1);
               });
         }
      }
      
      public static function onClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         switch(event.target.name)
         {
            case "tianxieMc":
               NpcDialog.show(NPC.TIAN_XIE_LONG_WANG,["哦？你想做什么？"],["我想一键通过本关！","我想暂时想离开这里。","龙王息怒，我点错了。"],[function():void
               {
                  KTool.buyProductByCallback(247869,1,function():void
                  {
                     SocketConnection.addCmdListener(45662,function(param1:SocketEvent):void
                     {
                        SocketConnection.removeCmdListener(45662,arguments.callee);
                        update();
                     });
                     SocketConnection.send(45662,3,2);
                  });
               },function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DaysEvilDragonSuperEvolutionMainPanel"));
                  });
               },function():void
               {
               }],true);
         }
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(index == 1)
            {
               BufferRecordManager.setMyState(BUFFER_ID,true,function():void
               {
                  start();
               });
            }
            else
            {
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("DaysEvilDragonSuperEvolutionLvPanel"));
               });
            }
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([102003],function(param1:Array):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < 6)
            {
               if(BitUtils.getBit(param1[0],_loc2_) > 0)
               {
                  if(taskMc["boss1Mc_" + _loc2_] != null)
                  {
                     taskMc["boss1Mc_" + _loc2_].visible = false;
                  }
               }
               else if(taskMc["boss1Mc_" + _loc2_] != null)
               {
                  taskMc["boss1Mc_" + _loc2_].visible = true;
               }
               _loc2_++;
            }
         });
         KTool.getMultiValue([102001],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            if(_loc2_ > 1)
            {
               Alarm2.show("恭喜你完成了万邪重聚关卡！现在可以开启死翼之夜关卡！一键至尊获得天邪龙皇价格降为718钻（原价798钻）");
               if(!_isTaskPlaying)
               {
                  startPreTask(2);
               }
            }
         });
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DaysEvilDragonSuperEvolutionLvPanel"));
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            if(taskMc["boss1Mc_" + _loc1_] != null)
            {
               taskMc["boss1Mc_" + _loc1_].removeEventListener(MouseEvent.ROLL_OVER,onRollOver);
               taskMc["boss1Mc_" + _loc1_].removeEventListener(MouseEvent.ROLL_OUT,onRollOut);
               taskMc["boss1Mc_" + _loc1_].removeEventListener(MouseEvent.CLICK,onboss1McClick);
            }
            _loc1_++;
         }
         taskMc.removeEventListener(MouseEvent.CLICK,onClick);
         CommonUI.removeYellowArrow(_map.topLevel);
         DisplayUtil.removeForParent(taskMc);
         _taskMc = null;
         _map = null;
      }
   }
}
