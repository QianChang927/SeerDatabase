package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task850;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_24 extends BaseMapProcess
   {
       
      
      private var tips:Array;
      
      private var npcDialogs:Array;
      
      public function MapProcess_24()
      {
         this.tips = ["冰龙龙珠","火龙龙珠","飞龙龙珠","地龙龙珠"];
         this.npcDialogs = [NPC.FURUIZI,NPC.BOENNI,NPC.OUXISI,NPC.GULANGDE];
         super();
      }
      
      override protected function init() : void
      {
         var i:uint;
         var controller:*;
         SocketConnection.send(1022,86053888);
         conLevel["broadcastBoard"].addEventListener(MouseEvent.CLICK,this.onBroadcastBoardClick);
         ToolTipManager.add(conLevel["broadcastBoard"],"公告牌");
         i = 0;
         while(i < 4)
         {
            MapListenerManager.add(conLevel["dragon_" + i],function(param1:MouseEvent):void
            {
               var _loc2_:uint = uint(param1.currentTarget.name.slice(-1));
               NpcDialog.show(npcDialogs[_loc2_],["天幕四龙将已圆满完成任务，离开天幕宫殿，敬请期待他们的再次复出！"]);
            },this.tips[i]);
            i++;
         }
         controller = getDefinitionByName("com.robot.app2.control.MoonRabbitController");
         controller.inits();
         Task850.initTaskForMap24(this);
      }
      
      private function onBroadcastBoardClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053890);
         ModuleManager.showModule(ClientConfig.getAppModule("MonsterNian2014MainPanel"),"正在打开面板……");
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["broadcastBoard"]);
         conLevel["broadcastBoard"].removeEventListener(MouseEvent.CLICK,this.onBroadcastBoardClick);
         Task850.destory();
      }
   }
}
