package com.robot.app2.control
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MysteryCurseController
   {
      
      private static var _mc:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function MysteryCurseController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         getMC();
      }
      
      private static function getMC(param1:Function = null) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("mystery_curse_mc"),function(param1:MovieClip):void
         {
            _mc = param1 as MovieClip;
            _map.conLevel.addChild(_mc);
            _mc.addEventListener(MouseEvent.CLICK,onClick);
            _mc.buttonMode = true;
            _mc.mouseChildren = false;
         },"item");
      }
      
      private static function onClick(param1:Event) : void
      {
         if(BitBuffSetClass.getState(22464))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MysteryCurseMainPanel"));
         }
         else
         {
            StatManager.sendStat2014("神秘者的诅咒！被缚的先知之子！","参与前置任务",StatManager.RUN_ACT);
            startStory();
         }
      }
      
      private static function startStory() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUDE,[MainManager.actorInfo.formatNick + "，我是天蛇先知里弗斯的儿子！我中了那个该死的神秘者的诅咒！你快来救救我吧！"],["到底发生了什么事情？","哎呦！今天天气不错哦！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,2,"mc2"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["如果你想拥有这些能量，我可以赐予你！但…可能你做出一点付出。"],["我该怎么办？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["掌握宇宙中最强大的魔能！像我一样，成为魔界的王者！"],["入魔？"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,3,"mc3"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["我当时谁，没想到是那个老家伙的儿子！怎么，你的龟老爸还缩在壳子里？"],["可恶！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUDE,["父亲早就预料到你已经按耐不住了，特派我过来揭穿你的阴谋！"],["阴谋？"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["哈哈哈！我如今手握魔界之能，还要什么阴谋！让里弗斯出现，正大光明的与我对决！"],["你还不配！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,4,"mc4"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["伊洛维奇，看到我的实力了吧！跟我一起走，重振暗夜城的荣耀！"],["不要呀！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOGUDE,["伊洛维奇！你千万不可以入魔！不然天蛇星危在旦夕！你是天蛇星的希望！"],["一派胡言！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["我早已经和天蛇星恩断义绝！他们的死活跟我没有任何关系！为了重返暗夜城，我什么都可以做！"],["哈哈哈！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,5,"mc5"]);
         var story:Array = [mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13];
         TaskDiaLogManager.single.playStory(story,function():void
         {
            StatManager.sendStat2014("神秘者的诅咒！被缚的先知之子！","完成前置任务",StatManager.RUN_ACT);
            SocketConnection.send(46106,8);
            BitBuffSetClass.setState(22464,1);
            ModuleManager.showModule(ClientConfig.getAppModule("MysteryCurseMainPanel"));
            _mc.gotoAndStop(1);
         });
      }
      
      public static function destroy() : void
      {
         if(_mc != null)
         {
            _mc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_mc);
         }
         _map = null;
      }
   }
}
