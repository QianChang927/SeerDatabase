package com.robot.app.mapProcess
{
   import com.robot.app.ac.ChangeBodyController;
   import com.robot.app.games.GameStorageManager;
   import com.robot.app.newspaper.ContributeAlert;
   import com.robot.app.newspaper.NewsPaperController;
   import com.robot.app.systems.HelpManager;
   import com.robot.app.task.taskscollection.Task1111;
   import com.robot.app.task.taskscollection.Task1281;
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.INpcModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_4 extends BaseMapProcess
   {
      
      private static const NEW_TASK_ID:int = 3017;
       
      
      private var _icon:InteractiveObject;
      
      private var mDate:Date = null;
      
      public function MapProcess_4()
      {
         super();
      }
      
      private function checkLoginInWeek() : void
      {
         this.mDate = new Date(2014,6,19,24);
         if(MainManager.actorInfo.lastLoginTime < this.mDate.getTime())
         {
         }
      }
      
      override protected function init() : void
      {
         var num:int;
         var i:int;
         var mc:MovieClip = null;
         conLevel["tv_1"].addEventListener(MouseEvent.CLICK,this.onTv_1);
         ToolTipManager.add(conLevel["tv_1"],"航行日志");
         conLevel["tv_2"].addEventListener(MouseEvent.CLICK,this.onTv_2);
         ToolTipManager.add(conLevel["tv_2"],"船员公约");
         conLevel["tv_3"].addEventListener(MouseEvent.CLICK,this.onTv_3);
         ToolTipManager.add(conLevel["tv_3"],"给船长写信");
         conLevel["task"].buttonMode = true;
         conLevel["task"].addEventListener(MouseEvent.CLICK,this.onTask);
         ToolTipManager.add(conLevel["task"],"赛尔任务档案");
         this._icon = btnLevel["seerIntro"] as InteractiveObject;
         this._icon.addEventListener(MouseEvent.CLICK,this.onSeerIntro);
         ToolTipManager.add(this._icon,"飞行手册");
         this.checkLoginInWeek();
         SocketConnection.send(1020,338);
         num = int(conLevel.numChildren);
         i = 0;
         while(i < num)
         {
            mc = conLevel.getChildAt(i) as MovieClip;
            if(mc)
            {
               if(mc.name.split("_")[0] == "channel")
               {
                  mc.addEventListener(MouseEvent.CLICK,this.onChannel);
               }
            }
            i++;
         }
         depthLevel["channel_102_light"].addEventListener(MouseEvent.CLICK,this.onChannel);
         Task1281.initForMap4(this);
         (conLevel["sayPaoPao"] as MovieClip).gotoAndPlay(1);
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").initMap(this);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            var _loc3_:SharedObject = SOManager.getUserSO("firstEnterMap4_version");
            if(!_loc3_.data || _loc3_.data["version"] != ClientConfig.newsVersion)
            {
               if(TasksManager.getTaskStatus(NEW_TASK_ID) == TasksManager.UN_ACCEPT)
               {
                  openNpcTaskPanel();
               }
               _loc3_.data["version"] = ClientConfig.newsVersion;
               SOManager.flush(_loc3_);
            }
         });
      }
      
      private function openNpcTaskPanel() : void
      {
         var _loc1_:* = getDefinitionByName("com.robot.app.npc.taskPanel.NpcTaskPanel");
         _loc1_.setFocusTask(NEW_TASK_ID);
         var _loc2_:INpcModel = NpcController.getNpc(NPC.SHIPER) as INpcModel;
         if(_loc2_)
         {
            _loc1_.show(_loc2_.tasks,_loc2_.npcInfo);
         }
      }
      
      private function onShuita(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86056312);
         ModuleManager.showModule(ClientConfig.getAppModule("RareDancerXiaoTaPanel"));
      }
      
      private function onClickChangeBody(param1:Event) : void
      {
         ChangeBodyController.checkOwnCard();
      }
      
      private function onClickExchange(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getFestivalModule("DoubleBombExchange"));
      }
      
      private function onClickDraw(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getFestivalModule("DoubleBombDraw"));
      }
      
      private function onTv_1(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,339);
         NewsPaperController.showNewsPanel(null);
      }
      
      private function onTv_2(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,343);
         ModuleManager.showModule(ClientConfig.getAppModule("SeerRulePanel"),"正在加载赛尔号船员公约....");
      }
      
      private function onTv_3(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,341);
         ContributeAlert.show(ContributeAlert.SHIPER_TYPE);
      }
      
      private function onTask(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,340);
         ModuleManager.showModule(ClientConfig.getAppModule("TasksRecordPanel"),"正在加载赛尔任务档案....");
      }
      
      private function onSeerIntro(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,342);
         ModuleManager.showModule(ClientConfig.getBookModule("SeerIntroBook"),"正在加载飞行手册....");
      }
      
      private function onChannel(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name.split("_")[1]);
         switch(_loc2_)
         {
            case "103":
               SocketConnection.send(1020,346);
               break;
            case "7":
               SocketConnection.send(1020,347);
               break;
            case "1":
               SocketConnection.send(1020,348);
               break;
            case "5":
               SocketConnection.send(1020,349);
               break;
            case "332":
               SocketConnection.send(1020,350);
               break;
            case "107":
               SocketConnection.send(1020,351);
               break;
            case "102":
               SocketConnection.send(1020,352);
         }
      }
      
      override public function destroy() : void
      {
         var _loc3_:MovieClip = null;
         conLevel["tv_1"].removeEventListener(MouseEvent.CLICK,this.onTv_1);
         ToolTipManager.remove(conLevel["tv_1"]);
         conLevel["tv_2"].removeEventListener(MouseEvent.CLICK,this.onTv_2);
         ToolTipManager.remove(conLevel["tv_2"]);
         conLevel["tv_3"].removeEventListener(MouseEvent.CLICK,this.onTv_3);
         ToolTipManager.remove(conLevel["tv_3"]);
         conLevel["task"].buttonMode = true;
         conLevel["task"].removeEventListener(MouseEvent.CLICK,this.onTask);
         ToolTipManager.remove(conLevel["task"]);
         btnLevel["seerIntro"].removeEventListener(MouseEvent.CLICK,this.onSeerIntro);
         ToolTipManager.remove(btnLevel["seerIntro"]);
         Task1111.destroy();
         var _loc1_:int = int(conLevel.numChildren);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = conLevel.getChildAt(_loc2_) as MovieClip;
            if(_loc3_)
            {
               if(_loc3_.name.split("_")[0] == "channel")
               {
                  _loc3_.removeEventListener(MouseEvent.CLICK,this.onChannel);
               }
            }
            _loc2_++;
         }
         depthLevel["channel_102_light"].removeEventListener(MouseEvent.CLICK,this.onChannel);
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").destroy();
      }
      
      public function onGame() : void
      {
         MapManager.removeAppArrow();
         SocketConnection.send(1020,345);
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,this.onJoinGame);
         SocketConnection.send(CommandID.JOIN_GAME,1);
         SocketConnection.send(1022,86053872);
      }
      
      private function onJoinGame(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,this.onJoinGame);
         GameStorageManager.freshLastGame(41001);
         MapManager.destroy();
         SoundManager.stopSound();
         var _loc2_:MCLoader = new MCLoader(ClientConfig.getResPath("Games/ShootGame.swf"),LevelManager.topLevel,1,"正在加载保护导航仪....");
         _loc2_.addEventListener(MCLoadEvent.SUCCESS,this.onLoadDLL);
         _loc2_.doLoad();
      }
      
      private function onLoadDLL(param1:MCLoadEvent) : void
      {
         param1.currentTarget.removeEventListener(MCLoadEvent.SUCCESS,this.onLoadDLL);
         param1.getContent().addEventListener("shootGameOver",this.onGameOver);
         LevelManager.topLevel.addChild(param1.getContent());
      }
      
      private function onGameOver(param1:Event) : void
      {
         param1.currentTarget.removeEventListener("shootGameOver",this.onGameOver);
         MapManager.refMap();
         SoundManager.playSound();
         var _loc2_:* = param1.target as Sprite;
         var _loc3_:Object = _loc2_.scoreObj;
         var _loc4_:uint = uint(_loc3_.per);
         var _loc5_:uint = uint(_loc3_.score);
         SocketConnection.send(CommandID.GAME_OVER,_loc4_,_loc5_);
      }
      
      public function onGuard() : void
      {
         SocketConnection.send(1020,353);
         HelpManager.show(0);
      }
   }
}
