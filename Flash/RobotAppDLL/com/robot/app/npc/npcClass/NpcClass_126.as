package com.robot.app.npc.npcClass
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   
   public class NpcClass_126
   {
       
      
      public function NpcClass_126()
      {
         super();
      }
      
      public static function start() : void
      {
         if(!BitBuffSetClass.getState(22594))
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("sptBossWeaken"),function(param1:MovieClip):void
            {
               var taskMC:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(taskMC);
               KTool.showMapAllPlayerAndMonster(false);
               NpcController.hideNpc(126);
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
               AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
               {
                  KTool.showMapAllPlayerAndMonster(true);
                  NpcController.showNpc(126);
                  MapManager.currentMap.controlLevel.removeChild(taskMC);
                  getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               });
            });
            BitBuffSetClass.setState(22594,1);
         }
         else
         {
            NpcDialog.show(NPC.AN_HEI_QIU_QIU,["你想来挑战我吗？不要以为你那三脚猫的精灵可以伤害到我！"],["哼！我要打败你！","你好像好厉害，我还是走了。。。"],[function():void
            {
               SocketConnection.send(CommandID.SPT_CHALLENGE_FIGHT,2106,1);
            }]);
         }
      }
   }
}
