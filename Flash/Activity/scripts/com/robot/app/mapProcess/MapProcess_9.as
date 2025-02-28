package com.robot.app.mapProcess
{
   import com.robot.app.ac.ChangeBodyController;
   import com.robot.app.control.PaintBookController;
   import com.robot.app.games.GameStorageManager;
   import com.robot.app.oldPaper.OldNewsPaperController;
   import com.robot.app.task.books.InstructorBook;
   import com.robot.app.task.books.MonsterBook;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskscollection.Task796;
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.book.BookId;
   import com.robot.core.manager.book.BookManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_9 extends BaseMapProcess
   {
       
      
      private var newsPaperBtn:SimpleButton;
      
      private var allBookPanel:MovieClip;
      
      private var cupBtn:SimpleButton;
      
      private var planBtn:SimpleButton;
      
      private var _stream_btn:SimpleButton;
      
      private var _cz_btn:SimpleButton;
      
      private var _btnLibAndPaper:SimpleButton;
      
      private var _safeBtn:SimpleButton;
      
      private var _boilerBtn:SimpleButton;
      
      private var _libMc:MovieClip;
      
      public function MapProcess_9()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._safeBtn = conLevel["safe_btn"];
         this._safeBtn.addEventListener(MouseEvent.CLICK,this.onSafeBtnClickHandler);
         this._stream_btn = conLevel["stream_btn"];
         ToolTipManager.add(this._stream_btn,"赛尔放映厅");
         this._stream_btn.addEventListener(MouseEvent.CLICK,this.clickStreamHandler);
         ToolTipManager.add(conLevel["newsPaperBtn"],"往期航行日志");
         ToolTipManager.add(conLevel["spaceVurvey_mc"],"帕诺星系测绘图");
         this.checkTask();
         this.newsPaperBtn = conLevel["newsPaperBtn"];
         this.newsPaperBtn.addEventListener(MouseEvent.CLICK,this.clickNewsPaper);
         this.planBtn = conLevel["planBtn"];
         this.planBtn.visible = true;
         this.planBtn.addEventListener(MouseEvent.CLICK,this.loadBook1);
         conLevel["bookBtn"].addEventListener(MouseEvent.CLICK,this.showAllBook);
         ToolTipManager.add(conLevel["bookBtn"],"赛尔资料库");
         this.cupBtn = conLevel["cupBtn"];
         this.cupBtn.addEventListener(MouseEvent.CLICK,this.loadBook);
         this._cz_btn = conLevel["cz_btn"];
         this._cz_btn.addEventListener(MouseEvent.CLICK,this.clickCZHandler);
         this._libMc = this.conLevel["libMc"];
         this._libMc.buttonMode = true;
         ToolTipManager.add(this._libMc,"在线图书馆");
         this._libMc.addEventListener(MouseEvent.CLICK,this.onLibClickHandler);
         conLevel["DianXing"].buttonMode = true;
         conLevel["DianXing"].addEventListener(MouseEvent.CLICK,this.onDianXingClick);
         ToolTipManager.add(conLevel["DianXing"],"神奇密码解析仪");
         this._btnLibAndPaper = btnLevel["btnLibAndPaper"];
         ToolTipManager.add(this._btnLibAndPaper,"周边兑换");
         this._btnLibAndPaper.addEventListener(MouseEvent.CLICK,this.onLibAndPaper);
         Task796.initTaskForMap9(this);
         MapListenerManager.add(depthLevel["changeBody"],function(param1:MouseEvent):void
         {
            ChangeBodyController.checkOwnCard();
         },"变身装置");
         MapListenerManager.add(conLevel["stone"],this.onStoneClick);
         topLevel["boxAnim"].visible = false;
         topLevel["boxAnim"].gotoAndStop(1);
         this.update();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([124338],function(param1:Array):void
         {
            if(Boolean(SystemTimerManager.getIsInActivity("20250117","2025012410")) && !BitUtils.getBit(param1[0],24))
            {
               conLevel["stone"].visible = true;
               btnLevel.mouseEnabled = btnLevel.mouseChildren = false;
            }
            else
            {
               conLevel["stone"].visible = false;
            }
         });
      }
      
      public function onStoneClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         topLevel["boxAnim"].visible = true;
         AnimateManager.playMcAnimate(topLevel["boxAnim"],1,"",function():void
         {
            topLevel["boxAnim"].visible = false;
            KTool.socketSendCallBack(41900,function():void
            {
               StatManager.sendStat2014("0117场景彩蛋","在地图9领取了资料室彩蛋奖励","2025运营活动");
               update();
            },[103,25]);
         },false,true);
      }
      
      private function onLibAndPaper(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LibraryIconPanel"));
      }
      
      private function onLibClickHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("OnlineLibrary"),"正在打开在线图书馆");
      }
      
      private function onDianXingClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExchangeCodeSystemMainPanel"),"正在打开兑换码");
      }
      
      private function clickPetPaperHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("PetPaperChangeBookPanel"),"正在打开精灵贴纸兑换手册");
      }
      
      private function clickCZHandler(param1:MouseEvent) : void
      {
         BookManager.show(BookId.BOOK_5);
      }
      
      private function clickStreamHandler(param1:MouseEvent) : void
      {
         this.openSeerMovies();
      }
      
      private function checkTask() : void
      {
         conLevel["spaceVurvey_mc"].addEventListener(MouseEvent.CLICK,this.onSpaceVurveyMCClick);
      }
      
      private function onSpaceVurveyMCOver(param1:MouseEvent) : void
      {
         conLevel["spaceVurvey_mc"].gotoAndStop(2);
      }
      
      private function onSpaceVurveyMCOut(param1:MouseEvent) : void
      {
         conLevel["spaceVurvey_mc"].gotoAndStop(1);
      }
      
      private function onSafeBtnClickHandler(param1:MouseEvent) : void
      {
      }
      
      private function onSpaceVurveyMCClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getTaskModule("SpaceSurveyView"),"正在打开测绘帕诺星系图");
      }
      
      private function loadBook1(param1:MouseEvent) : void
      {
         var _loc2_:MCLoader = new MCLoader(ClientConfig.getResPath("module/greadPlan/greadPlan.swf"),LevelManager.appLevel,1,"正在打开书本");
         _loc2_.addEventListener(MCLoadEvent.SUCCESS,this.onLoadSuccess1);
         _loc2_.doLoad();
      }
      
      private function onLoadSuccess1(param1:MCLoadEvent) : void
      {
         var _loc2_:ApplicationDomain = param1.getApplicationDomain();
         var _loc3_:* = _loc2_.getDefinition("GreadPlanPanel");
         var _loc4_:MovieClip = new _loc3_() as MovieClip;
         LevelManager.appLevel.addChild(_loc4_);
         DisplayUtil.align(_loc4_,null,AlignType.MIDDLE_CENTER);
      }
      
      private function loadBook(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SeerBookEnterPanel"),"正在打图鉴面板");
      }
      
      private function onLoadSuccess(param1:MCLoadEvent) : void
      {
         var _loc2_:ApplicationDomain = param1.getApplicationDomain();
         var _loc3_:* = _loc2_.getDefinition("Book");
         var _loc4_:MovieClip = new _loc3_() as MovieClip;
         LevelManager.appLevel.addChild(_loc4_);
         DisplayUtil.align(_loc4_,null,AlignType.MIDDLE_CENTER);
      }
      
      private function showAllBook(param1:MouseEvent) : void
      {
         if(!this.allBookPanel)
         {
            this.allBookPanel = MapManager.currentMap.libManager.getMovieClip("AllBookPanel");
            this.allBookPanel["petBtn"].addEventListener(MouseEvent.CLICK,this.showPetBook);
            this.allBookPanel["jgBtn"].addEventListener(MouseEvent.CLICK,this.showJgBook);
            this.allBookPanel["shipBtn"].addEventListener(MouseEvent.CLICK,this.showShipBook);
            this.allBookPanel["nonoBookBtn"].addEventListener(MouseEvent.CLICK,this.onNoNoBookHandler);
            this.allBookPanel["paintBtn"].addEventListener(MouseEvent.CLICK,this.onPaintBook);
         }
         DisplayUtil.align(this.allBookPanel,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this.allBookPanel);
      }
      
      private function onPaintBook(param1:MouseEvent) : void
      {
         PaintBookController.show();
      }
      
      private function onNoNoBookHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("NoNoBook"),"正在打开NoNo手册....");
      }
      
      private function showPetBook(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this.allBookPanel);
         MonsterBook.loadPanel();
      }
      
      private function showJgBook(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this.allBookPanel);
         InstructorBook.loadPanel();
      }
      
      private function showShipBook(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this.allBookPanel);
         ModuleManager.showModule(ClientConfig.getBookModule("SeerIntroBook"),"正在加载飞行手册....");
      }
      
      override public function destroy() : void
      {
         ModuleManager.destroy(ClientConfig.getTaskModule("SpaceSurveyView"));
         ModuleManager.destroy(ClientConfig.getBookModule("SeerMoviesPanel"));
         ModuleManager.destroy(ClientConfig.getBookModule("PetPaperChangeBookPanel"));
         ToolTipManager.remove(this._libMc);
         this._libMc.removeEventListener(MouseEvent.CLICK,this.onLibClickHandler);
         this._libMc = null;
         ModuleManager.hideModule(ClientConfig.getAppModule("OnlineLibrary"));
         ModuleManager.destroy(ClientConfig.getAppModule("TimePasswordMachine"));
         ToolTipManager.remove(this._btnLibAndPaper);
         this._btnLibAndPaper.removeEventListener(MouseEvent.CLICK,this.onLibAndPaper);
         this._btnLibAndPaper = null;
         this._cz_btn.removeEventListener(MouseEvent.CLICK,this.clickCZHandler);
         this._cz_btn = null;
         this.planBtn.removeEventListener(MouseEvent.CLICK,this.loadBook1);
         this.planBtn = null;
         this.allBookPanel = null;
         conLevel["bookBtn"].removeEventListener(MouseEvent.CLICK,this.showAllBook);
         ToolTipManager.remove(conLevel["change_btn"]);
         ToolTipManager.remove(conLevel["newsPaperBtn"]);
         this.newsPaperBtn.removeEventListener(MouseEvent.CLICK,this.clickNewsPaper);
         this.newsPaperBtn = null;
         conLevel["spaceVurvey_mc"].removeEventListener(MouseEvent.CLICK,this.onSpaceVurveyMCClick);
         conLevel["DianXing"].removeEventListener(MouseEvent.CLICK,this.onDianXingClick);
         ToolTipManager.remove(conLevel["DianXing"]);
         Task796.destroy();
      }
      
      public function passExChangeHandler() : void
      {
      }
      
      private function clickNewsPaper(param1:MouseEvent) : void
      {
         OldNewsPaperController.show();
      }
      
      public function starGame() : void
      {
      }
      
      private function onJoin(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,this.onJoin);
         GameStorageManager.freshLastGame(41002);
         var _loc2_:MCLoader = new MCLoader(ClientConfig.getResPath("Games/theStarGame.swf"),LevelManager.appLevel,1,"正在加载游戏");
         _loc2_.addEventListener(MCLoadEvent.SUCCESS,this.onSuccess);
         _loc2_.doLoad();
      }
      
      private function onSuccess(param1:MCLoadEvent) : void
      {
         param1.currentTarget.removeEventListener(MCLoadEvent.SUCCESS,this.onSuccess);
         LevelManager.gameLevel.addChild(param1.getContent());
         SoundManager.stopSound();
      }
      
      public function openSeerMovies() : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("SeerMoviesPanel"),"正在打开赛尔放映厅");
      }
      
      public function timeMachine() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TimePasswordMachine"),"正在打开时空密码机");
      }
   }
}
