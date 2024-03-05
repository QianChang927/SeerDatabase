package com.robot.app.mapProcess.control
{
   import com.robot.app.mapProcess.RoomMap;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.FitmentManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.FitmentModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.RectangleMask;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.geom.Rectangle;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class GarageTask
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:uint = 1259;
      
      public static const TASK_ID2:uint = 1262;
       
      
      public function GarageTask()
      {
         super();
      }
      
      public static function initTask(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.COMPLETE)
         {
            SocketConnection.send(CommandID.GARAGE_GET_NUM_INFO,MainManager.actorID);
            SocketConnection.addCmdListener(CommandID.GARAGE_GET_NUM_INFO,onGetNum);
         }
      }
      
      private static function onGetNum(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var carNum:uint;
         var j:int = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.GARAGE_GET_NUM_INFO,onGetNum);
         data = e.data as ByteArray;
         carNum = data.readUnsignedInt();
         if(carNum > 0)
         {
            NpcDialog.show(NPC.NONO,["全新星际车库隆重上线啦！每一个小赛尔都能免费获得一款普通的星际车库,抓紧时间布置自己的专属车库吧！"],["好耶我们开始吧"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                  {
                     FitmentManager.getStorageInfo();
                  });
               });
            }]);
         }
      }
      
      public static function startGuide() : void
      {
         RectangleMask.mask(new Rectangle(896,251,62,57),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
         RectangleMask.addEventListener(RectangleMask.GOTO_NEXT,function(param1:Event):void
         {
            var e:Event = param1;
            RectangleMask.removeEventListener(RectangleMask.GOTO_NEXT,arguments.callee);
            RectangleMask.mask(new Rectangle(298,445,80,30),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
            RectangleMask.addEventListener(RectangleMask.GOTO_NEXT,function(param1:Event):void
            {
               var e:Event = param1;
               RectangleMask.removeEventListener(RectangleMask.GOTO_NEXT,arguments.callee);
               RectangleMask.mask(new Rectangle(140,482,60,60),"",11,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
               RectangleMask.addEventListener(RectangleMask.GOTO_NEXT,function(param1:Event):void
               {
                  var e:Event = param1;
                  RectangleMask.removeEventListener(RectangleMask.GOTO_NEXT,arguments.callee);
                  RectangleMask.mask(new Rectangle(896,311,62,51),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
                  RectangleMask.addEventListener(RectangleMask.GOTO_NEXT,function(param1:Event):void
                  {
                     var e:Event = param1;
                     RectangleMask.removeEventListener(RectangleMask.GOTO_NEXT,arguments.callee);
                     RectangleMask.destroy();
                     NpcDialog.show(NPC.NONO,["你可能需要按照自己的喜好摆放你的车库哦！一会儿慢慢琢磨吧！现在点击车库，进去一探究竟吧！"],["嗯嗯，我立刻就去！"],[function():void
                     {
                        TasksManager.complete(TASK_ID2,4,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                           }
                        });
                     }]);
                  });
               });
            });
         });
      }
      
      public static function showMyCar(param1:String) : void
      {
         var fitment:FitmentModel = null;
         var i:FitmentModel = null;
         var frame:String = param1;
         var useFitList:Array = (_map as RoomMap).roomFitment.useList;
         for each(i in useFitList)
         {
            if(i.info.id == 500746)
            {
               fitment = i;
               break;
            }
         }
         AnimateManager.playMcAnimate(fitment.content as MovieClip,frame,"mc",function():void
         {
            (fitment.content as MovieClip).gotoAndStop(1);
         });
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
