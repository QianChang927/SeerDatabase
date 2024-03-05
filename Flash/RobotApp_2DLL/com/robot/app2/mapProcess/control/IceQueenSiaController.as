package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class IceQueenSiaController
   {
      
      public static var isErro:Boolean;
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      public static var curStep:uint;
      
      private static const _mapAnimate:String = "IceQueenSia_Animate";
      
      private static const fullScreen:String = "IceQueenSia_FulMovie";
      
      public static var killNum:int;
      
      public static const MapID:int = 1220;
      
      private static const _ActiveArr:Array = [new CronTimeVo("*","*","23-31","12","*","2016"),new CronTimeVo("*","*","1-5","1","*","2017")];
       
      
      public function IceQueenSiaController()
      {
         super();
      }
      
      public static function fightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOver);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            _map["checkStatus"]();
         }
         else if(MapManager.currentMap.id == 11426)
         {
            _map["failToFight"]();
         }
         else if(MapManager.currentMap.id == 11425)
         {
            _map["checkStatus"]();
         }
      }
      
      public static function initForMap(param1:BaseMapProcess, param2:Function = null) : void
      {
         var index:int = 0;
         var map:BaseMapProcess = param1;
         var func:Function = param2;
         _map = map;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOver);
         ToolBarController.panel.hide();
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = false;
         index = MapManager.currentMap.id - 11422;
         if(BitBuffSetClass.getState(23353 + index) == 0)
         {
            loadTaskMc(13).then(function():Promise
            {
               return playStory(index);
            }).then(function():void
            {
               BitBuffSetClass.setState(23353 + index,1);
               if(func != null)
               {
                  func();
               }
            });
         }
      }
      
      private static function loadTaskMc(param1:uint = 1) : Promise
      {
         var _deferred:Deferred = null;
         var frame:uint = param1;
         _deferred = new Deferred();
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.x = 233.4;
               _taskMc.y = 52.9;
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _deferred.resolve(true);
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            _deferred.resolve(true);
         }
         return _deferred.promise;
      }
      
      public static function getMonsterSia() : void
      {
         loadTaskMc(3).then(function():Promise
         {
            return playStory(6);
         }).then(function():Promise
         {
            return SocketConnection.sendWithPromise(46295,[1,0]);
         }).then(function():void
         {
            MapManager.changeMapWithCallback(MapID,function():void
            {
               ModuleManager.showAppModule("IceQueenSiaEnhancePanel");
            });
         });
      }
      
      public static function playOtherAnmiate(param1:int, param2:Function = null) : void
      {
         var index:int = param1;
         var fun:Function = param2;
         loadTaskMc(13).then(function():Promise
         {
            return playStory(index);
         }).then(function():void
         {
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function playStory(param1:int, param2:Boolean = false) : Promise
      {
         var _deferred:Deferred = null;
         var index:int = param1;
         var showIcon:Boolean = param2;
         _deferred = new Deferred();
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc.parent == null)
         {
            MapManager.currentMap.topLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         TaskDiaLogManager.single.playStory(getStroy(index),function():void
         {
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(_taskMc);
            MapNamePanel.show();
            ToolBarController.panel.hide();
            if(showIcon)
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
            }
            _deferred.resolve(true);
         });
         return _deferred.promise;
      }
      
      private static function getStroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["这里是哪里？我……我怎么会在这里？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["我刚才在做什么……哦，对了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[fullScreen]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["我想起来了，我明明正处于蜕变的沉睡之中，这是发生了什么？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,5,"mc"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,6,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["看来我今天是在劫难逃了……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["不！为了我的王国，为了我的朋友，为了我自己……我一定要逃离这里！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["就让我看看，你们有多强大吧！"]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,8,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAKA,["你一定要阻止这个魔头，女皇大人！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAKA,["它正在凝聚毁灭的力量……当这股力量汇聚完成，并被它所吸收时，它将无可匹敌！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAKA,["所有人都会被杀死，那时，就彻底完蛋了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HE_JINLING,["闭嘴！你们这些渣滓，自己都性命难保了，还想阻止大人的计划？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HE_JINLING,["阿克希亚，你听好了！你若是敢动大人一根毫毛，我们马上就让这些小东西去见死神！你可是掌握着他们的性命啊，桀桀桀。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAKA,["不要管我们，女皇大人！"]));
               break;
            case 4:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,11,"mc"]));
               break;
            case 5:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,12,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["柯尔德大人！你在做什么？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLT,["哦，阿克希亚，这只愚蠢的小精灵居然敢顶撞我，我想小小地教训它一下。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["救命！救命！阿克希亚大人！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["呃，刚才发生了什么？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["我……我刚才在冰风中玩耍，没想到风突然停了下来，我就往下落……然后我就掉在了精灵王大人头上，大人非常震怒……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLT,["你闭嘴！小东西，我不管你有什么理由，但你居然敢弄乱我的发型！这就是自寻死路！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["柯尔德大人，宾塞克它显然不是故意的。这只是一次无心之失，你就放过它吧。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINSAIKE,["我真的不是故意的，呜呜呜呜……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLT,["我叫你闭嘴，你难道没有听到吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["住手！柯尔德大人，它是我的子民，我想我有权对它进行审判。而它显然罪不至此……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COLT,["我是精灵王，我说有罪，就是有罪！敢弄乱我的发型，就是大罪！阿克希亚，你难道也想反抗我的意志？"],["我……"]));
               break;
            case 6:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["我自己的路？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["刚才前辈说，让我回想一下刚才的选择……刚才我，做了什么？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["我跟我自己的幻象大战了一番；遭遇到大暗黑天的围攻，九死一生才逃了出来；牺牲了无辜的子民，来换取击败魔王的机会……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["我百般尝试，才杀死了坏蛋；我……我居然还向精灵王大人出手……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["前辈说，我已经通过这些选择，领悟了真谛。那么，真谛又是什么？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["真谛……选择……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["我……我懂了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["击败自己，是自我超越；九死一生却不放弃，是勇气和坚持；舍小求大，是学会了取舍……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["百般尝试，是智慧和耐心；谴责精灵王大人，是因为我需要无愧于心，公正严明！"],["前辈，我想我已经懂了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
               break;
            case 7:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,7,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["我感觉好累……我已经尽力了，我现在……只想躺在这里，安静地睡过去。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["真的好累……好累……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["阿克希亚，你就这样放弃了吗？那些你爱着的、爱着你的人们都在等着你的归来，你就将你的命运，交给眼前这些混蛋了吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["还有那些诺言呢？你的子民在等待着，你的挚友在等待着。你，怎么能倒在这里？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["不！我就是力竭而死，也绝不能，引颈就戮！"]));
               break;
            case 8:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAKA,["呃啊！……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HE_JINLING,["你真以为我的威胁是在开玩笑吗，阿克希亚？你这是在亲自葬送你的子民！"],["不！你……可恶！"]));
               break;
            case 9:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,10,"mc"]));
               break;
            case 10:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGER,["不！我是不可阻挡的！这，不可能！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AKXY,["差一点，便是一场可怕的灾难……"],["女王大人万岁！"]));
         }
         return _loc2_;
      }
      
      public static function get isWelfareTime() : Boolean
      {
         return SystemTimerManager.isActive(_ActiveArr);
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOver);
         _taskMc = null;
         _map = null;
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         KTool.showMapAllPlayerAndMonster();
         MapNamePanel.show();
      }
   }
}
