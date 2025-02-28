package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_11695 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var hasSetDefalut:Boolean;
      
      private var hp:int = 5;
      
      public function MapProcess_11695()
      {
         super();
         MapObjectControl.hideOrShowAllObjects(false);
         MainManager.actorInfo.mapID = 11695;
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11695;
         KTool.hideMapPlayerAndMonster();
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         conLevel["mc_3"].visible = false;
         conLevel["ani_1"].visible = false;
         this.showHp();
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var talks1:PlayTalksAction = null;
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "btn":
               talks1 = new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[2922,"宇宙中突然出现了一个凶狠的怪物，我们正在封印它，但是看样子他还在挣扎！" + MainManager.actorInfo.nick + "，你能帮帮我们吗？","包在我身上！（使用头部射击击向湖中的葬生之莲）"]]
               });
               talks1.doAction().then(function():void
               {
                  conLevel["mc_3"].visible = true;
                  AimatController.addEventListener(AimatEvent.PLAY_END,onShootEndHander);
               });
               break;
            case "close":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("BlackLotusSecretMainPanel");
               });
         }
      }
      
      private function onShootEndHander(param1:AimatEvent) : void
      {
         if(param1.info.userID != MainManager.actorID)
         {
            return;
         }
         var _loc2_:Point = new Point(param1.info.endPos.x,param1.info.endPos.y);
         var _loc3_:MovieClip = conLevel["mc"];
         if(_loc3_.hitTestPoint(_loc2_.x,_loc2_.y))
         {
            StatManager.sendStat2014("0817黑莲的秘密","使用头部射击葬生之莲","2018运营活动");
            --this.hp;
            this.showHp();
            if(this.hp <= 0)
            {
               this.playStory();
            }
         }
      }
      
      public function showHp() : void
      {
         conLevel["scrollMc"].gotoAndStop(this.hp * 20);
      }
      
      public function playStory() : void
      {
         var talks2:PlayTalksAction = null;
         CommonUI.setEnabled(conLevel,false,false);
         talks2 = new PlayTalksAction({
            "name":"talk2",
            "type":"talks",
            "value":[[2923,"终于…终于把它封印了！","…"],[2923,"这个怪物的力量简直惊人，很少碰到如此强劲的对手了！","…"],[2922,"白虎，我隐隐有点不安。","…"],[2922,"最近，宇宙不是很太平。","…"],[2922,"我担心的是…会有更多这样的怪物出现！","…"],[2922,"这个怪物被我的火焰灼烧之后居然没有灰飞烟灭，而是凭借着那朵黑莲起死回生…","…"],[2922,"我们甚至没办法彻底毁灭它！","…"],[2923,"确实如此，看来我们几个星系守护神有必要讨论一下应对措施了！","…"],[2923,"我能感觉到，这宇宙中一股硝烟在逐渐扩散…","…"],[2923,"或许很快，我们就要面临一场大战了！","…"],[2922,"但愿我们的感觉是错误的！","…"]]
         });
         conLevel["ani_1"].visible = true;
         conLevel["mc_3"].visible = false;
         conLevel["scrollMc"].visible = false;
         conLevel.mouseEnabled = conLevel.mouseChildren = false;
         AnimateManager.playMcAnimateWithPromis(conLevel as MovieClip,1,"ani_1").then(function():Promise
         {
            conLevel.mouseEnabled = conLevel.mouseChildren = true;
            conLevel["ani_1"].visible = false;
            conLevel["mc"].visible = false;
            return talks2.doAction();
         }).then(function():void
         {
            KTool.getMultiValue([103099],function(param1:Array):void
            {
               var arr:Array = param1;
               if(!KTool.getBit(arr[0],3))
               {
                  SocketConnection.sendWithPromise(43760,[22,0]).then(function():void
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showAppModule("BlackLotusSecretMainPanel");
                     });
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("BlackLotusSecretMainPanel");
                  });
               }
            });
         });
      }
      
      override public function destroy() : void
      {
         if(AimatController.hasEventListener(AimatEvent.PLAY_END))
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,this.onShootEndHander);
         }
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         if(conLevel != null)
         {
            conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         }
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
