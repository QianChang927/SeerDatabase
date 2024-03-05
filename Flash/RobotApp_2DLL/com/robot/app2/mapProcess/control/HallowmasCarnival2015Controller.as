package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class HallowmasCarnival2015Controller
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mc:MovieClip;
      
      private static var _currId:int;
      
      private static var _timestamp:int;
      
      private static var _isRunning:Boolean;
      
      private static var _hasSent:Boolean;
      
      private static const CD:int = 5;
      
      private static const MAX:int = 70;
      
      private static const CMD_ID:int = 47244;
      
      private static const FOREVER_TIMESTAMP:int = 2605;
      
      private static const FOREVER_LIGHT_STATE:int = 2606;
      
      private static const DAILY_GOT_NUM:int = 12349;
      
      private static const BIT_BUF_GET_PUMPKIN:int = 19363;
      
      private static const MAP_IDS:Array = [1,4,103,107,1039,1133];
      
      private static const STATS:Array = ["点击传送舱南瓜1","点击传送舱南瓜2","点击船长室南瓜1","点击船长室南瓜2","点击瞭望露台南瓜1","点击瞭望露台南瓜2","点击VIP殿堂南瓜1","点击VIP殿堂南瓜2","点击万圣之夜南瓜1","点击万圣之夜南瓜2","点击风语之森南瓜1","点击风语之森南瓜2"];
       
      
      public function HallowmasCarnival2015Controller()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _hasSent = false;
         _currId = MAP_IDS.indexOf(MapManager.currentMap.id);
         ResourceManager.getResource(ClientConfig.getActiveUrl("hallowmas_carnival_pumpkins"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _mc = mc;
            _mc.gotoAndStop(_currId + 1);
            _map.btnLevel.addChild(_mc);
            refresh(function():void
            {
               SystemTimerManager.addTickFun(onTime);
               var _loc1_:int = _currId * 2;
               while(_loc1_ <= _currId * 2 + 1)
               {
                  _mc["pumpkin" + _loc1_].addEventListener(MouseEvent.CLICK,onClick);
                  _loc1_++;
               }
            });
         });
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(onTime);
         var _loc1_:int = _currId * 2;
         while(_loc1_ <= _currId * 2 + 1)
         {
            _mc["pumpkin" + _loc1_].removeEventListener(MouseEvent.CLICK,onClick);
            _loc1_++;
         }
         _mc = null;
         _map = null;
      }
      
      private static function refresh(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([FOREVER_TIMESTAMP,FOREVER_LIGHT_STATE,DAILY_GOT_NUM],function(param1:Array):void
         {
            var _loc3_:int = 0;
            _timestamp = param1[0];
            _isRunning = _timestamp + CD * 60 > SystemTimerManager.time;
            if(!_isRunning && !_hasSent)
            {
               sendCommand(3,0);
               _hasSent = true;
            }
            else if(_isRunning)
            {
               _hasSent = false;
            }
            var _loc2_:int = _currId * 2;
            while(_loc2_ <= _currId * 2 + 1)
            {
               _loc3_ = KTool.getBit(param1[1],_loc2_ + 1) + 1;
               _mc["pumpkin" + _loc2_].gotoAndStop(_loc3_);
               _loc2_++;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function onTime() : void
      {
         if(!_isRunning)
         {
            return;
         }
         var _loc1_:int = SystemTimerManager.time - _timestamp;
         if(_loc1_ >= CD * 60)
         {
            sendCommand(3,0);
         }
      }
      
      private static function sendCommand(param1:int, param2:int, param3:Function = null) : void
      {
         var type:int = param1;
         var index:int = param2;
         var fun:Function = param3;
         KTool.enableMC([_mc],false);
         SocketConnection.sendByQueue(CMD_ID,[type,index],function(param1:SocketEvent):void
         {
            refresh(fun);
            KTool.enableMC([_mc],true);
         },function(param1:SocketErrorEvent):void
         {
            KTool.enableMC([_mc],true);
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         var target:MovieClip = e.currentTarget as MovieClip;
         index = int(target.name.replace("pumpkin",""));
         StatManager.sendStat2014("1030万圣节大狂欢",STATS[index],StatManager.RUN_ACT_2015);
         if(target.currentFrame == 1)
         {
            ModuleManager.showAppModule("HallowmasCarnivalExplainPanel");
         }
         else
         {
            playStory(index,function():void
            {
               sendCommand(2,index + 1,function():void
               {
                  KTool.getBitSet([BIT_BUF_GET_PUMPKIN],function(param1:Array):void
                  {
                     if(param1[0] > 0)
                     {
                        ModuleManager.showAppModule("HallowmasCarnivalTipsPanel");
                     }
                  });
               });
            });
         }
      }
      
      private static function playStory(param1:uint, param2:Function) : void
      {
         var index:uint = param1;
         var fun:Function = param2;
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         ResourceManager.getResource(ClientConfig.getActiveUrl("hallowmas_carnival_map_movie"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mc:MovieClip = param1;
            _map.conLevel.addChild(mc);
            mc["mc1"].x = _mc["pumpkin" + index].x;
            mc["mc1"].y = _mc["pumpkin" + index].y;
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PIAO_PIAO,["哟哟哟，亲爱的小赛尔，万圣节快乐哟！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PIAO_PIAO,["飘飘给你准备了一些小礼物，可千万要收下哟！"],["谢谢你！万圣节快乐！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3],function():void
            {
               _map.conLevel.removeChild(mc);
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               fun();
            });
         });
      }
   }
}
