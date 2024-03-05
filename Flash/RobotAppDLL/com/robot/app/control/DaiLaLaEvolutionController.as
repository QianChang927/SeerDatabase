package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import org.taomee.manager.ToolTipManager;
   
   public class DaiLaLaEvolutionController
   {
      
      private static const BUF_ID:uint = 710;
      
      private static var _instance:com.robot.app.control.DaiLaLaEvolutionController;
       
      
      private var _curMap:BaseMapProcess;
      
      public function DaiLaLaEvolutionController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.DaiLaLaEvolutionController
      {
         return _instance = _instance || new com.robot.app.control.DaiLaLaEvolutionController();
      }
      
      public function setup(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         this._curMap = map;
         if(BufferRecordManager.getMyState(BUF_ID))
         {
            KTool.showMapAllPlayerAndMonster();
            (this._curMap.depthLevel["dailalaBtn"] as SimpleButton).visible = true;
            this.animamtionMC.visible = false;
         }
         else
         {
            KTool.hideMapAllPlayerAndMonster();
            this.animamtionMC.visible = true;
            (this._curMap.depthLevel["dailalaBtn"] as SimpleButton).visible = false;
            TaskDiaLogManager.single.playStory(this.prevStroy,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               BufferRecordManager.setMyState(BUF_ID,true);
               SocketConnection.send(1022,86059973);
               animamtionMC.visible = false;
               (_curMap.depthLevel["dailalaBtn"] as SimpleButton).visible = true;
               ModuleManager.showModule(ClientConfig.getAppModule("DailalaEvolutionPanel"),"正在打开...");
            });
         }
         this.addEvents();
      }
      
      private function get prevStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAIDAI,["还记得我吗？知道是谁么？"],["你是？"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAIDAI,["还记得那年夏天的暑假！"],["那年夏天的暑假？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAIDAI,["恩，那年夏天的暑假，我曾在这里目睹里许多赛尔的英勇的对战！"],["难道是精灵王争霸赛？"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAIDAI,["不错，我就是“裂空杯”的吉祥物精灵！我与赛尔们一样，我在不断地的磨练中，我也在不断的变强！"],["好厉害！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["daiLaLaFullAnimation",true]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAIDAI,["我要在此进行不断的历练，突破我的极限！"],["真的可以吗？"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animamtionMC,1,"mc1"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAIDAI,["不行，我还是太弱了。。。我要变得更强！你能帮我吗！"],["好的，我可以帮你！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_];
      }
      
      private function get animamtionMC() : MovieClip
      {
         return this._curMap.animatorLevel as MovieClip;
      }
      
      private function addEvents() : void
      {
         ToolTipManager.add(this._curMap.depthLevel["dailalaBtn"],"袋拉拉超进化");
         MapListenerManager.add(this._curMap.depthLevel["dailalaBtn"],function():void
         {
            SocketConnection.send(1022,86059974);
            ModuleManager.showModule(ClientConfig.getAppModule("DailalaEvolutionPanel"),"正在打开...");
         });
      }
      
      private function removeEvents() : void
      {
      }
      
      public function depose() : void
      {
         this.removeEvents();
         _instance = null;
      }
   }
}
