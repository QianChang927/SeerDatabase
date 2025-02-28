package com.robot.app.mapProcess
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_355 extends BaseMapProcess
   {
       
      
      private var _samiyaMv:MovieClip;
      
      public function MapProcess_355()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86052733);
         this.initSaimiyaQianzhi();
         SocketConnection.send(1022,86062110);
         if(MainManager.actorInfo.isVip)
         {
            SocketConnection.send(1022,86062111);
         }
         else
         {
            SocketConnection.send(1022,86062112);
         }
         if(!MainManager.actorInfo.isVip)
         {
            LevelManager.closeMouseEvent();
            Alert.show("你还没有权限进入！只有" + TextFormatUtil.getRedTxt("超能NoNo用户") + "才能进入，是否立即开通超能NoNo？",function():void
            {
               LevelManager.openMouseEvent();
               MapManager.changeMap(MapManager.prevMapID);
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
            },function():void
            {
               LevelManager.openMouseEvent();
               MapManager.changeMap(MapManager.prevMapID);
            });
         }
      }
      
      private function initSaimiyaQianzhi() : void
      {
         var mcloader:MCLoader = null;
         if(TasksManager.getTaskStatus(1735) == TasksManager.COMPLETE)
         {
            return;
         }
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         mcloader = new MCLoader(ClientConfig.getFullMovie("samiyaMapMovie"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            _samiyaMv = mcloader.loader.content["mv"];
            conLevel.addChild(_samiyaMv);
            mcloader.clear();
            MapListenerManager.add(_samiyaMv,playSamiyaTask);
         });
         mcloader.doLoad(ClientConfig.getFullMovie("samiyaMapMovie"));
      }
      
      private function playSamiyaTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var taskQuePro:TaskQuneProcessor = new TaskQuneProcessor();
         taskQuePro.addMapMv(this.samiyaMv,2,"mc");
         taskQuePro.addFullMv(ClientConfig.getFullMovie("active_20130906_3"));
         taskQuePro.addMapMv(this.samiyaMv,3,"mc");
         taskQuePro.procesEndFun = function():void
         {
            DisplayUtil.removeForParent(_samiyaMv);
            TasksManager.accept(1735,function():void
            {
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               TasksManager.complete(1735,0);
            });
            ModuleManager.showModule(ClientConfig.getAppModule("SamiyaUpPanel"));
            SocketConnection.send(1022,86062113);
         };
         taskQuePro.start();
      }
      
      private function onClickBook(param1:Event) : void
      {
         SocketConnection.send(1022,86052978);
         ModuleManager.showModule(ClientConfig.getAppModule("NonoPartyIntro"));
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").destroy();
         if(this._samiyaMv)
         {
            DisplayUtil.removeForParent(this._samiyaMv);
            this._samiyaMv = null;
         }
      }
      
      private function get samiyaMv() : MovieClip
      {
         return this._samiyaMv;
      }
   }
}
