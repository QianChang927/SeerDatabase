package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class EclipseSptController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function EclipseSptController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var mc:MovieClip = null;
         var map:BaseMapProcess = param1;
         _map = map;
         mc = _map.conLevel["eclipseMc"] as MovieClip;
         if(BitBuffSetClass.getState(22659) == 0)
         {
            BitBuffSetClass.setState(22659,1);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            NpcController.npcVisible = false;
            LevelManager.iconLevel.visible = false;
            ToolBarController.panel.hide();
            ModuleManager.hideAllModule();
            mc.gotoAndPlay(1);
            mc.addFrameScript(mc.totalFrames - 1,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               mc.addFrameScript(mc.totalFrames - 1,null);
               mc.gotoAndStop(mc.totalFrames - 1);
               initTask();
            });
         }
         else
         {
            mc.gotoAndStop(mc.totalFrames - 1);
            initTask();
         }
      }
      
      private static function initTask() : void
      {
         _map.conLevel["eclipseMc"]["eclipse"].addEventListener(MouseEvent.CLICK,onClickEclipse);
         _map.conLevel["eclipseMc"]["eclipse"].buttonMode = true;
         _map.conLevel["eclipseMc"]["sunGod"].addEventListener(MouseEvent.CLICK,onClickSunGod);
         _map.conLevel["eclipseMc"]["sunGod"].buttonMode = true;
      }
      
      private static function onClickEclipse(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SHI_RI,["吞噬光芒！我要战胜神炎！"],["就凭你？让我来教训你！","我好怕，还是算了！"],[function():void
         {
            SocketConnection.sendWithCallback(3405,function(param1:SocketEvent):void
            {
               FightManager.fightWithBoss("蚀日",0);
            },110);
         }]);
      }
      
      private static function onClickSunGod(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SHEN_YAN,["我就让他吃个饱，看看蚀日它到底有多厉害！！！"],["呵呵。。"]);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map.conLevel["eclipseMc"]["eclipse"].removeEventListener(MouseEvent.CLICK,onClickEclipse);
            _map.conLevel["eclipseMc"]["sunGod"].removeEventListener(MouseEvent.CLICK,onClickSunGod);
            _map = null;
         }
      }
   }
}
