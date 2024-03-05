package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   
   public class TaskController_1699
   {
      
      public static const TASK_ID:uint = 1699;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      public static const MAP_LOCAL_ID1:int = 10337;
      
      public static const MAP_LOCAL_ID2:int = 10338;
      
      public static const MAP_LOCAL_ID3:int = 10339;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1699()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "战神联盟的献祭之日迫近，波斯蒂加和迈迪文已经重返逆界之门，不知道能不能找到解决办法……"],["船长，我们快去看看吧！","不关我们的事吧……"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               SocketConnection.send(1022,84350408);
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TaskDiaLogManager.single.playStory(getTaskList(1),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            });
         });
      }
      
      public static function startState2(param1:BaseMapProcess = null) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TaskDiaLogManager.single.playStory(getTaskList(2),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               MapManager.changeLocalMap(MAP_LOCAL_ID2);
            });
         });
      }
      
      public static function startState3(param1:BaseMapProcess = null) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TaskDiaLogManager.single.playStory(getTaskList(3),function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
               MapManager.changeLocalMap(MAP_LOCAL_ID3);
            });
         });
      }
      
      public static function startState4(param1:BaseMapProcess = null) : void
      {
         _map = param1;
         TaskDiaLogManager.single.playStory(getTaskList(4),endTask);
      }
      
      private static function endTask() : void
      {
         KTool.showMapAllPlayerAndMonster();
         SocketConnection.send(1022,84499587);
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               TasksManager.complete(TASK_ID,TASK_STAGE_4);
            });
         });
         MapManager.changeMap(939);
      }
      
      private static function getTaskList(param1:int = 1) : Array
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
         var _loc14_:TaskMod = null;
         var _loc15_:TaskMod = null;
         var _loc16_:TaskMod = null;
         var _loc17_:TaskMod = null;
         var _loc18_:TaskMod = null;
         var _loc19_:TaskMod = null;
         var _loc20_:TaskMod = null;
         var _loc21_:TaskMod = null;
         var _loc22_:TaskMod = null;
         var _loc23_:TaskMod = null;
         var _loc24_:TaskMod = null;
         var _loc25_:TaskMod = null;
         var _loc26_:TaskMod = null;
         var _loc27_:TaskMod = null;
         var _loc28_:TaskMod = null;
         var _loc29_:TaskMod = null;
         var _loc30_:TaskMod = null;
         var _loc31_:TaskMod = null;
         var _loc32_:TaskMod = null;
         var _loc33_:TaskMod = null;
         var _loc34_:TaskMod = null;
         var _loc35_:TaskMod = null;
         var _loc36_:TaskMod = null;
         var _loc37_:TaskMod = null;
         var _loc38_:TaskMod = null;
         var _loc39_:TaskMod = null;
         var _loc40_:TaskMod = null;
         var _loc41_:TaskMod = null;
         var _loc42_:TaskMod = null;
         var _loc43_:TaskMod = null;
         var _loc44_:TaskMod = null;
         var _loc45_:TaskMod = null;
         var _loc46_:TaskMod = null;
         var _loc47_:TaskMod = null;
         var _loc48_:TaskMod = null;
         var _loc49_:TaskMod = null;
         var _loc50_:TaskMod = null;
         var _loc51_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["一切都是源于那个蹊跷的逆界之门，如果能够找到逆界之门的创造者，说不定可以扭转乾坤！"],["恩，一定是这样！"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["去拯救宇宙吧，勇敢的赛尔们！"],["交给我吧船长！"]);
               _loc2_ = [_loc3_,_loc4_];
               break;
            case 2:
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["又回到了熟悉的逆界之门，我在这里守护了近万年，却始终无法想起最开始的事情……"],["真的什么都想不起来？"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["是谁让你们在这里守护逆界之门的？你们记忆最开始的地方有印象吗？"],["完全没有印象。"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["我和博拉纳都不记得了，脑子中只是残留着守护者的使命，至于我们来自哪里，为什么要守护逆界之门，从来都不知道……"],["这样可就麻烦了。"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["那是谁？为什么感觉那么熟悉？"],["也许他就是逆界之门的创造者。"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["看来秘密马上就要揭晓了，现在只是回到数万年前的影像，我们静静地看吧……"],["真是神奇，居然穿越了时空。"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["你是谁？为什么散发着不属于这个世界的邪恶气息？"],["我是暗黑魔君索伦森。"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["真是没想到凡域还有这样的强者，要不是你，我恐怕永远发现不了魔域和凡域的入口。"],["魔域？那是什么地方？"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["难道这就是我感应到强大力量的来源？这股力量现在似乎不可控制了……"],["能够感应到我真是不简单。"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["你也许不知道你犯下了多大的错误，但是这却是我称霸凡域的开始，谢谢你了，现在，我要降临了！"],["降临？不许过来！"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["放弃吧，你既然打开了这扇门，就无法阻止我，凡域之门已经打开，魔域之君就要降临！"],["我一定会阻止你！"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["如果我知道这扇门会给世界带来这样大的危险，我绝不会打开，不过现在，我一定要阻止你，即使赔上性命！"],["没有用的，放弃吧！"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["天真！凡域的力量怎么能和我们魔域抗衡，即使你是最强者，也不能阻止魔域的降临，今天就让你明白！"],["那我就让你看看我的实力！"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc21_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["玛法里奥！他后来怎么了？"],["不要着急，继续看。"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["索伦森看来暂时不会出来了，我想接下来你就会看到你自己和博拉纳了。"],["会看到我们自己？"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["看来是玛法里奥给你们灌输了力量和记忆，让你们帮助他继续守护逆界之门，而玛法里奥恐怕已经逝去了……"],["原来我和博拉纳竟是兄弟。"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["现在当务之急需要找到博拉纳，没有他，我们的力量是不完整的。"],["可是他已经堕落了……"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["你们两个本是一起长大的兄弟，今天竟然要成为敌人，不过我相信你一定有办法让他觉悟。"],["放心，我一定会让他回头！"]);
               _loc2_ = [_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_];
               break;
            case 3:
               _loc27_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["竟然是这样，原来我们会成为逆界守护者都是因为那时意外遇见了玛法里奥……"],["就是这样……"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["是玛法里奥重新灌输了我们的记忆，我们本是一起长大的兄弟啊，快点回头吧，不要为虎作伥了！"],["可是，我已经难以脱身了。"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["看来主人猜得不错，你果然不可靠，难道你想背叛主人吗？"],["我……我没有这个意思。"]);
               _loc32_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["来得正好，博拉纳是我的弟弟，我不会让他继续跟着你们为非作歹了！"],["口气不小啊！"]);
               _loc33_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["博拉纳，还不快过来，难道你真准备背叛主人吗？"],["我……马上就过来。"]);
               _loc34_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc35_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["迈迪文……为什么……为什么你还要救我？"],["我们是一起长大的兄弟啊！"]);
               _loc36_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["我相信你的本性，就算一时被误导，终有一天会觉悟，保护你，帮助你回到正轨是我做哥哥的责任。"],["迈迪文……哥哥……"]);
               _loc37_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc38_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["波斯蒂加，你又来了，今天我就替主人清理掉你！"],["你们不过是索伦森的走狗而已。"]);
               _loc39_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["索伦森的邪恶歹毒不是你们可以想象的，我奉劝你们还是早点离开他吧。"],["不用你多管闲事。"]);
               _loc40_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["先担心你自己吧，你一个就想对抗我们四个吗？"],["哈哈，难道不可以吗？"]);
               _loc41_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc2_ = [_loc27_,_loc28_,_loc29_,_loc30_,_loc31_,_loc32_,_loc33_,_loc34_,_loc35_,_loc36_,_loc37_,_loc38_,_loc39_,_loc40_,_loc41_];
               break;
            case 4:
               _loc42_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc43_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["哥哥……你还好吧？"],["不太好……格莱奥下手太狠了……"]);
               _loc44_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SALIAO,["放心，我一定会治好你们的。"],["不要管我们，快来不及了。"]);
               _loc45_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["波斯蒂加，玛法里奥把能力传给了我们兄弟，那么我们兄弟一定也可以重生出玛法里奥对吧？"],["话是这样，不过……"]);
               _loc46_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["重生了玛法里奥之后，恐怕你们……不会再存在了……"],["这样啊……那也在所不惜！"]);
               _loc47_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc48_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["只是……你们真的决意要牺牲了吗？"],["恩，现在已经没有时间犹豫了！"]);
               _loc49_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["索伦森一旦降临，这个世界都会被他搅得混乱不安，只有玛法里奥可以阻止他！"],["说得对哥哥！"]);
               _loc50_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOLANA,["以前我做了很多错事，就给我一个赎罪的机会吧！"],["我的好弟弟，博拉纳！"]);
               _loc51_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1699_1",true]);
               _loc2_ = [_loc42_,_loc43_,_loc44_,_loc45_,_loc46_,_loc47_,_loc48_,_loc49_,_loc50_,_loc51_];
         }
         return _loc2_;
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         TaskDiaLogManager.single.destroy();
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.conLevel["taskMc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TASK_ID);
      }
   }
}
