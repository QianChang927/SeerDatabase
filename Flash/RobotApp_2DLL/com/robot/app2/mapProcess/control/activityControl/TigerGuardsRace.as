package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class TigerGuardsRace
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _ret:uint;
      
      private static var _taskIds:Array = [1442,1443];
       
      
      public function TigerGuardsRace()
      {
         super();
      }
      
      private static function get isJoin() : Boolean
      {
         return BufferRecordManager.getMyState(597);
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 74
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function onGetCloth(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86056567);
         if(BufferRecordManager.getMyState(597))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ExclusiveCloth"));
         }
         else
         {
            Alarm.show("你还没有加入白虎战场，赶快去报名吧！",function():void
            {
            });
         }
      }
      
      private static function onJoinComplete(param1:DynamicEvent) : void
      {
         onGetCloth(null);
      }
      
      private static function onGetClothComplete(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         if(TasksManager.getTaskStatus(_taskIds[_ret - 1]) == TasksManager.COMPLETE)
         {
            NpcDialog.show(NPC.JILIGUALA,[MainManager.actorInfo.formatNick + "，看来你已经成功参与到了白虎守卫争夺战的战役中，无论你是守卫队还是先锋队，希望这次你能大赛中发挥自己最强的实力，为各自的队伍争分夺秒！"],["恩恩，放心吧！我一定会的！"],[function():void
            {
               NpcDialog.show(NPC.JILIGUALA,["好样的！" + MainManager.actorInfo.formatNick + "接下来快去中央的白虎魂魄挑战白虎吧！4月2日白虎守卫争夺赛就要全面开启了，好好把握机会训练一下吧！"],null,null,false,function():void
               {
                  CommonUI.addYellowArrow(_map.topLevel,550,200,45);
               });
            }]);
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(_map.conLevel["taskmc"]);
            _map = null;
         }
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(595);
      }
      
      private static function get isSimbaTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(607);
      }
      
      private static function get isClosingCeremonyOver() : Boolean
      {
         return BufferRecordManager.getMyState(631);
      }
      
      private static function set isClosingCeremonyOver(param1:Boolean) : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,631,param1);
      }
   }
}
