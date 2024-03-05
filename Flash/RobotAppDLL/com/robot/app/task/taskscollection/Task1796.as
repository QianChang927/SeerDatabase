package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1796
   {
      
      public static const TASK_ID:uint = 1796;
      
      public static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function Task1796()
      {
         super();
      }
      
      public static function initTaskForMap702(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_702_task1796"),function(param1:MovieClip):void
         {
            var state:int;
            var mc:MovieClip = param1;
            taskMC = mc;
            _map.conLevel.addChild(mc);
            state = int(TasksManager.getTaskStatus(TASK_ID));
            if(state != TasksManager.COMPLETE)
            {
               _map.topLevel["starName_mc"].visible = false;
               if(state == TasksManager.UN_ACCEPT)
               {
                  TasksManager.accept(TASK_ID,function():void
                  {
                     playPreStory();
                  });
               }
               else
               {
                  playPreStory();
               }
            }
            else
            {
               DisplayUtil.removeForParent(taskMC);
               showIcon();
            }
         });
      }
      
      private static function playPreStory() : void
      {
         SocketConnection.send(1022,86063339);
         if(quipment)
         {
            quipment.visible = false;
         }
         _map.depthLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            MainManager.isFighting = true;
            TasksManager.complete(TASK_ID,0,function():void
            {
               var setFightState:Function = null;
               setFightState = function():void
               {
                  MainManager.isFighting = false;
               };
               SocketConnection.send(1022,86063340);
               _map.depthLevel.visible = true;
               showIcon();
               ModuleManager.showModule(ClientConfig.getAppModule("JiLaKeEvolutionPanel"),"正在打开...");
               setTimeout(setFightState,1000);
               KTool.showMapAllPlayerAndMonster();
            });
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["好久不见了，巨石星的朋友们！"],["我们也想你呢尤尼卡……哦不，尤尼萨！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JI_LA_KE,["不愧是魔圣，超进化之后一定变得更强了吧！"],["哪里哪里……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNIKA,["你们最近有修炼吗？这么久不见应该也进步了不少吧！"],["我们还是老样子……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["哎，你们可是有保卫巨石星的任务，必须变得更强力才行！"],["我们也想变强啊……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JI_LA_KE,["尤尼萨，你来帮助我们特训吧！有你的力量一定可以帮助我们成长！"],["这个本来是没有问题的……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["不过最近恐怕没有时间啊，我想想办法……"],["帮帮我们吧尤尼萨！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["兰斯特，巨石岛在你的守护下安宁平静，不愧是巨石岛的守护者！"],["谢谢你的夸奖。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LANSITE,["不过我只想领教一下你的力量，不知道你超进化之后力量增进了多少。"],["兰斯特你接待客人的方式真特别……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["我可不是这个意思，不过我今天只是回来看看，并不想和你交手。"],["那可真遗憾了……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LANSITE,["魔圣尤尼卡超进化的消息可是震动了整个巨石星，今天既然遇上了不切磋一下多么遗憾！"],["没有关系，还有别的办法嘛。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["保卫巨石星光靠你兰斯特恐怕不够，吉拉克是勇敢的战士，他可以做你的对手！"],["你说吉拉克？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,5,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["兰斯特，如果你是真正的强者，就帮助吉拉克特训吧，他会成为你最好的战友！"],["特训吉拉克吗？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LANSITE,["听起来有点意思，不过尤尼萨，你得答应我，特训之后你必须与我一战！"],["这个没有问题。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["等我有空的时候我自然会回巨石岛找你！"],["那就一言为定了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,6,"mc"]));
         return _loc1_;
      }
      
      private static function showIcon() : void
      {
         DisplayUtil.removeForParent(taskMC);
         quipment.visible = true;
         if(quipment)
         {
            quipment.addEventListener(MouseEvent.CLICK,onClickOpenEvolutionPanel);
         }
      }
      
      private static function onClickOpenEvolutionPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("JiLaKeEvolutionPanel"),"正在打开...");
      }
      
      private static function get quipment() : DisplayObject
      {
         return _map.depthLevel["quipmentMC1796"];
      }
      
      public static function destory() : void
      {
         taskMC = null;
         _map = null;
      }
   }
}
