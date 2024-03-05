package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class HalloweenRevelPartyTask2Plot extends PlotTask
   {
      
      public static var objId:int;
      
      public static var mainUI:MovieClip;
       
      
      private var curBoss:int = 1;
      
      public function HalloweenRevelPartyTask2Plot(param1:MovieClip)
      {
         super(param1);
         mainUI = ui;
         StatManager.sendStat2014("1101万圣节狂欢派对","进入派对场景","2019运营活动");
      }
      
      public static function check(param1:int) : void
      {
         var index:int = param1;
         if(index == objId)
         {
            mainUI["ani"].visible = true;
            mainUI["ani"].gotoAndStop(1);
            mainUI["ani"].x = mainUI["fight_" + index].x;
            mainUI["ani"].y = mainUI["fight_" + index].y;
            mainUI["fight_" + index].visible = false;
            AnimateManager.playMcAnimateWithPromis(mainUI,1,"ani").then(function():Promise
            {
               return new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[3009,"呜呜呜，我明明只是没写作业，怎么变成通缉犯了呀……"],[2985,"这是一种逃避责任的行为，是非常令人不齿的。希望你能认识到这么做的严重性，你的老师们真的已经失望透了。"],[20,"有些事情是不能通过逃避解决的——即使这可能会让你很痛苦。快回去找老师报到吧，雷小伊。","我明白了……"]]
               }).doAction();
            }).then(function():Promise
            {
               mainUI["ani"].visible = true;
               return new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[2985,"辛苦你了，小赛尔！这是一些奖励，快拿着吧。万圣节快乐！","万圣节快乐！"]]
               }).doAction();
            }).then(function():Promise
            {
               return SocketConnection.sendWithPromise(43304,[20,index]);
            }).then(function():void
            {
               var name:String = null;
               var mapId:int = 11750;
               name = "HalloweenRevelPartyMainPanel";
               MapManager.changeMapWithCallback(mapId,function():void
               {
                  ModuleManager.showAppModule(name);
               });
            });
         }
         else
         {
            new PlayTalksAction({
               "name":"talk",
               "type":"talks",
               "value":[[2986 + index - 1,"什么，我是通缉犯？你这是诬陷！刚才我们还切磋过，我的能量可以证明我是清白的！"],[20,"呃……可能是我记错了，我再想想。","哼！"]]
            }).doAction();
         }
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var ok:Function = null;
         var cancel:Function = null;
         var npcId:int = param1;
         ok = function():void
         {
            StatManager.sendStat2014("1102万圣节狂欢派对","打开选择面板","2019运营活动");
            ModuleManager.showAppModule("HalloweenRevelPartySub11Panel");
         };
         cancel = function():void
         {
         };
         switch(npcId)
         {
            case 1:
               NpcDialogNew_1.show(2985,["与这里的精灵们进行战斗，找到了使用电系技能的精灵，就来告诉我，那一定是雷小伊假扮的！"],["我找到雷小伊了！","我知道了！"],[ok,cancel]);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"您好，我正在寻找一只易容了精灵，他现在是通缉要犯！您方便与我小小地切磋一下，让我看一下您的技能属性吗？","没问题，愿意配合！"]]
               }).doAction().then(function():void
               {
                  FightManager.fightNoMapBoss("",14533 + curBoss - 1 + (objId == curBoss ? 8 : 0));
               });
         }
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var mapId:int = 0;
         var name:String = null;
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               mapId = 11750;
               name = "HalloweenRevelPartyMainPanel";
               MapManager.changeMapWithCallback(mapId,function():void
               {
                  ModuleManager.showAppModule(name);
               });
               break;
            case "fight_" + index:
               this.curBoss = index;
               this.onNpcClick(2);
               break;
            case "npc":
               this.onNpcClick(1);
         }
      }
      
      override protected function updateState() : void
      {
         ui["ani"].visible = false;
         KTool.getMultiValue([16999],function(param1:Array):void
         {
            var mapId:int = 0;
            var name:String = null;
            var arr:Array = param1;
            objId = arr[0] >> 8 & 15;
            if(objId == 0)
            {
               SocketConnection.sendWithPromise(43304,[20,9]).then(updateState);
               return;
            }
            if(KTool.getBit(arr[0],13))
            {
               mapId = 11750;
               name = "HalloweenRevelPartyMainPanel";
               MapManager.changeMapWithCallback(mapId,function():void
               {
                  ModuleManager.showAppModule(name);
               });
            }
         });
      }
   }
}
