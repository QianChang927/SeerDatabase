package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SaveLifeTreeController
   {
      
      private static var _taskMc:MovieClip;
      
      private static const _mapAnimate:String = "map_saveLifeTree";
       
      
      public function SaveLifeTreeController()
      {
         super();
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
      
      public static function playAnmiate(param1:int, param2:Function = null, param3:Boolean = true) : Promise
      {
         var _promise:Promise = null;
         var index:int = param1;
         var fun:Function = param2;
         var needLoadMc:Boolean = param3;
         if(needLoadMc)
         {
            _promise = loadTaskMc().then(function():Promise
            {
               return playStory(index);
            });
         }
         else
         {
            _promise = playStory(index);
         }
         _promise = _promise.then(function():void
         {
            if(fun != null)
            {
               fun();
            }
         });
         return _promise;
      }
      
      private static function playStory(param1:int, param2:Boolean = true) : Promise
      {
         var _deferred:Deferred = null;
         var index:int = param1;
         var showIcon:Boolean = param2;
         _deferred = new Deferred();
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc != null && _taskMc.parent == null)
         {
            MapManager.currentMap.topLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         TaskDiaLogManager.single.playStory(getStroy(index),function():void
         {
            MapObjectControl.hideOrShowAllObjects(true);
            if(_taskMc != null)
            {
               DisplayUtil.removeForParent(_taskMc);
            }
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
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["看来大家反映的破坏狂就是你了！生命之树危在旦夕，你却过来搞破坏，为什么宇宙中总会有你这样的混蛋出现！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["啊，你闻闻这焦木熏香的味道，看看这些锯好的整齐的木材……天呐，这些简直都是工艺品！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["可惜，为什么宇宙中总会有你这样自命不凡，扰人雅兴的混蛋出现！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["破坏环境，还能说出一番大道理来。就冲你这理直气壮的样子，我也要把你带回赛尔号好好教育教育什么叫“公德”！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["就凭你还想教训我？怕是连我的护甲都打不破哦！来来，我现在就教育教育你什么叫“强大”！"],["接招吧！"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["就你这个样子，还想多管闲事？还是趁早回去找块豆腐撞死吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你……你别得意！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我得想个办法击败他才行……有了，它是机器人，肯定很怕水。唔……还必须要是特殊的水！"],["看来要去找下鱼龙王了。"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["鱼龙王！鱼龙王！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哦不对，现在要喊你鱼龙帝王啦！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FISHKING,["哦，小赛尔呀，找我有什么事情吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我遇到了一只很强的机械精灵。唔……是个坏蛋！我想往他身上泼水，要很厉害的那种水！这样我就能击败他了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FISHKING,["哈哈哈，也亏你能想出这种办法。没错，机器人进了水，可就没法精密运转了，这一点你显然也很清楚。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FISHKING,["好，我这里有一桶水，你拿去吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["谢谢鱼龙帝王！……哎？你为啥不给我呀？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FISHKING,["哈哈，我可没说，你可以直接拿走这桶水哦！好久不见了，陪我切磋一下！"],["哎哟，以大欺小啦！"]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["嗨呀，果然有效，鱼龙王给的水简直是神水！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["（警告音）电路故障……电路故障……系统无法正常工作……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["臭小子，你对我的宝贝机器做了什么！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["（警告音）检测到水元素渗透……机器即将中止行动……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["还好我早早装了防水系统，哈哈，你还真把我当傻子呀？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.WOLTIWOW,["（警告音）部分功能已关闭……防水通道已打开……临时系统启动中……启动完毕……"],["糟了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
         }
         return _loc2_;
      }
   }
}
