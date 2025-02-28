package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.BitUtils;
   
   public class GuaizhangtangControl
   {
      
      private static const targetNums:Array = [20,5,5,5];
      
      private static const mapIds:Array = [500,963,108,102];
      
      private static var _lastStatu:Array = [];
      
      private static const taskNames:Array = ["挑战雪团团","钻石任务","勇者之塔","精灵王之战"];
       
      
      public function GuaizhangtangControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         KTool.getMultiValue([3035,14079,3037,3038],function(param1:Array):void
         {
            var _loc3_:int = 0;
            var _loc4_:Array = null;
            var _loc5_:int = 0;
            var _loc2_:int = 0;
            while(_loc2_ < param1.length)
            {
               _loc3_ = 0;
               if(_loc2_ == 1)
               {
                  _loc4_ = BitUtils.bitToList(param1[_loc2_]);
                  _loc5_ = 0;
                  while(_loc5_ < 10)
                  {
                     _loc3_ += int(_loc4_[_loc5_]);
                     if(_loc3_ >= 5)
                     {
                        break;
                     }
                     _loc5_++;
                  }
                  _lastStatu[_loc2_] = _loc3_;
               }
               else
               {
                  _lastStatu[_loc2_] = param1[_loc2_];
               }
               _loc2_++;
            }
         });
         SocketConnection.addCmdListener(CommandID.LEAVE_GAME,function(param1:*):void
         {
            checkStatu();
         });
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         if(mapIds.indexOf(MapManager.currentMap.id) != -1)
         {
            checkStatu();
         }
      }
      
      private static function checkStatu() : void
      {
         KTool.getMultiValue([3035,14079,3037,3038],function(param1:Array):void
         {
            var _loc4_:int = 0;
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            var _loc7_:Array = null;
            var _loc8_:int = 0;
            var _loc9_:String = null;
            var _loc2_:Array = param1;
            var _loc3_:int = 0;
            while(_loc3_ < _loc2_.length)
            {
               _loc4_ = 0;
               if(_loc3_ == 1)
               {
                  _loc7_ = BitUtils.bitToList(_loc2_[_loc3_]);
                  _loc8_ = 0;
                  while(_loc8_ < 10)
                  {
                     if((_loc4_ += int(_loc7_[_loc8_])) >= 5)
                     {
                        break;
                     }
                     _loc8_++;
                  }
                  _loc2_[_loc3_] = _loc4_;
               }
               _loc5_ = 943 + _loc3_;
               _loc6_ = int(targetNums[_loc3_]);
               if(_loc2_[_loc3_] != _lastStatu[_loc3_] && _loc2_[_loc3_] >= _loc6_ && !BufferRecordManager.getMyState(_loc5_))
               {
                  _loc9_ = String(taskNames[_loc3_]);
                  ModuleManager.showModule(ClientConfig.getAppModule("GuaizhangtangTaskFinishPanel"),"正在打开...",_loc9_);
                  BufferRecordManager.setMyState(_loc5_,true);
                  break;
               }
               _loc3_++;
            }
            _lastStatu = _loc2_;
         });
      }
   }
}
