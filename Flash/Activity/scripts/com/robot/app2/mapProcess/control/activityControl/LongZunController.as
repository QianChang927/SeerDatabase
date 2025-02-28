package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   
   public class LongZunController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function LongZunController()
      {
         super();
      }
      
      public static function initMap970(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function clickBtnHandler() : void
      {
         if(!BufferRecordManager.getMyState(1030))
         {
            MapObjectControl.hideOrShowAllObjects(false);
            KTool.hideMapAllPlayerAndMonster();
            TaskDiaLogManager.single.playStory(getTaskArr(),function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               KTool.showMapAllPlayerAndMonster();
               ModuleManager.showModule(ClientConfig.getAppModule("LongZunAddPanel"),"正在打开面板……");
               BufferRecordManager.setMyState(1030,true);
               SocketConnection.send(1022,86068433);
            },"longzun970_map_ani",true);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LongZunAddPanel"),"正在打开面板……");
         }
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:TaskMod = null;
         var _loc9_:TaskMod = null;
         var _loc10_:TaskMod = null;
         var _loc11_:TaskMod = null;
         var _loc12_:TaskMod = null;
         var _loc13_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SIKAIER,["我听说，最近有几只自不量力的精灵，成立了一个什么“逆天者联盟”，说是要阻止“逆天神宠”出现，难道是真的？"],["此处的能量如此强大，看来此言不虚啊！"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XINGLINGWANG_SITAKE,["最近宇宙中不安分的势力越来越多，罗杰船长让我筹备成立“紫金神宠联盟”，以备赛尔号飞船在遇到致命灾难时出手相助！"],["哼，斯塔克，你什么时候变得这么听话呀！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEIYING,["哼，我才不愿意成立什么破联盟，听候赛尔号的差遣！没有任何人，可以命令我！"],["赛尔号也是为了宇宙的安宁嘛！"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LONGZUNNEW,["哈哈，年轻人，你可知道有多少人是死于“不自量力”！"],["哇，好强的气场！"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20140129_5",true]);
               _loc10_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SIKAIER,["天！幕！主！神!果然是好可怕的存在！希望它不会成为我的对手！"],["嗯，好可怕的技能！"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LONGZUNNEW,["哈哈，我当然不会成为你们的对手，因为我已经答应罗杰船长，和你们一起组成“紫金神宠联盟”！"],["实力在你之下，我们好像也没有别的选择！"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LONGZUNNEW,[" “紫金神宠联盟”，从此就会成为宇宙中让人闻风丧胆的存在，谁的势力若敢与我们相悖，我们必将诛之！"],["紫金神宠联盟，必将响彻宇宙！"]);
               _loc2_ = new Array(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_);
         }
         return _loc2_;
      }
      
      private static function get taskMc() : MovieClip
      {
         return null;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
