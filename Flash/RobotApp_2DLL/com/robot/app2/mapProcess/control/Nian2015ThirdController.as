package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class Nian2015ThirdController
   {
      
      private static const npcs:Array = [{
         "map":4,
         "npc":NPC.SHIPER
      },{
         "map":102,
         "npc":NPC.JUSTIN
      },{
         "map":5,
         "npc":NPC.DOCTOR
      },{
         "map":7,
         "npc":NPC.JILIGUALA
      },{
         "map":332,
         "npc":NPC.CROW
      },{
         "map":1,
         "npc":NPC.NEWS_MAN
      },{
         "map":107,
         "npc":NPC.SHAWN
      }];
       
      
      public function Nian2015ThirdController()
      {
         super();
      }
      
      public static function giveCouplet(param1:int = -1) : void
      {
         var npc:Object = null;
         var NpcId:int = param1;
         var showDialog:Function = function():void
         {
            NpcDialog.show(npc.npc,["哇！好漂亮的春联！谢谢你，这点小心意还请收下，祝你新春大吉！"],["新春快乐！"],[function():void
            {
               BonusController.addDelay(1075);
               SocketConnection.sendByQueue(43575,[7],function(param1:*):void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("Nian2015ThirdCoupletPanel"));
               });
            }]);
         };
         var index:int = NpcId;
         if(index == -1)
         {
            index = int(Math.random() * 100) % npcs.length;
         }
         npc = npcs[index];
         if(MapManager.currentMap.id == npc.map)
         {
            showDialog();
         }
         else
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               showDialog();
            });
            MapManager.changeMap(npc.map);
         }
      }
      
      private static function getNpcIndex(param1:int) : Object
      {
         var npc:int = param1;
         return npcs.filter(function(param1:Object, param2:int, param3:Array):Boolean
         {
            return npc == param1.npc;
         })[0];
      }
   }
}
