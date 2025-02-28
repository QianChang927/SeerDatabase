package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.freshFightLevel.FightLevelModel;
   import com.robot.app.task.books.InstructorBook;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.team.TeamController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.battleRoyale.BattleRoyaleManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_101 extends BaseMapProcess
   {
       
      
      private var bookBtn:MovieClip;
      
      private var _btnStronghold:SimpleButton;
      
      private var _so:SharedObject;
      
      private var blueBtn:SimpleButton;
      
      private var redBtn:SimpleButton;
      
      private var teamPanel:MovieClip;
      
      private var _royaleMC:MovieClip;
      
      private var _royaleApp:AppModel;
      
      private var _armExgApp:AppModel;
      
      private var _armExSo:SharedObject;
      
      private var _pkPanel:AppModel;
      
      private var _armBookPanel:AppModel;
      
      private var panel:AppModel;
      
      public function MapProcess_101()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86053263);
         this._so = SOManager.getUserSO(SOManager.ARMBOOK_READED);
         if(!this._so.data.hasOwnProperty("isShow"))
         {
            this._so.data["isShow"] = false;
            SOManager.flush(this._so);
         }
         this._armExSo = SOManager.getUserSO(SOManager.ARM_EXCHANGEBOOK_READED);
         if(!this._armExSo.data.hasOwnProperty("isShow"))
         {
            this._armExSo.data["isShow"] = false;
            SOManager.flush(this._armExSo);
         }
         MapListenerManager.add(conLevel["stone"],this.onStoneClick);
         topLevel["boxAnim"].visible = false;
         topLevel["boxAnim"].gotoAndStop(1);
         this.update();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([124338],function(param1:Array):void
         {
            if(Boolean(SystemTimerManager.getIsInActivity("20250103","2025011010")) && !BitUtils.getBit(param1[0],17))
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
               StatManager.sendStat2014("0103场景彩蛋","在地图101领取了精灵广场彩蛋奖励","2025运营活动");
               update();
            },[103,18]);
         },false,true);
      }
      
      private function onStronghold(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("StrongholdProtectionBookPanel"));
      }
      
      public function initRoyaleBtn() : void
      {
         BattleRoyaleManager.stutas = "";
         this._royaleMC = conLevel["royaleMC"];
         this._royaleMC.buttonMode = true;
         this._royaleMC.addEventListener(MouseEvent.CLICK,this.onRoyaleClick);
         this._royaleMC.addEventListener(MouseEvent.ROLL_OVER,this.onRoyaleOver);
         this._royaleMC.addEventListener(MouseEvent.ROLL_OUT,this.onRoyaleOut);
         ToolTipManager.add(this._royaleMC,"决战雪峰之巅");
      }
      
      private function onRoyaleClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053266);
         ModuleManager.showModule(ClientConfig.getAppModule("SnowballWarsMainPanel"),"正在打开赛尔竞技场资源....");
      }
      
      private function check() : Boolean
      {
         var _loc1_:Date = new Date();
         _loc1_.setTime(MainManager.actorInfo.sysTime * 1000);
         var _loc2_:Number = _loc1_.getUTCHours() + 8;
         if(_loc2_ >= 13 && _loc2_ <= 16 || _loc2_ >= 19 && _loc2_ <= 22)
         {
            return true;
         }
         return false;
      }
      
      private function onRoyaleOver(param1:MouseEvent) : void
      {
         this._royaleMC.gotoAndPlay(1);
      }
      
      private function onRoyaleOut(param1:MouseEvent) : void
      {
         this._royaleMC.gotoAndStop(1);
      }
      
      private function destroyRoyale() : void
      {
         if(this._royaleMC)
         {
            this._royaleMC.removeEventListener(MouseEvent.CLICK,this.onRoyaleClick);
            this._royaleMC.removeEventListener(MouseEvent.ROLL_OVER,this.onRoyaleOver);
            this._royaleMC.removeEventListener(MouseEvent.ROLL_OUT,this.onRoyaleOut);
         }
         ToolTipManager.remove(this._royaleMC);
         if(this._royaleApp)
         {
            this._royaleApp.destroy();
         }
      }
      
      public function hitNpc() : void
      {
         var closeBtn:SimpleButton = null;
         var joinTeam:SimpleButton = null;
         var createTeam:SimpleButton = null;
         if(!this.teamPanel)
         {
            this.teamPanel = MapManager.currentMap.libManager.getMovieClip("ui_createTeam");
            closeBtn = this.teamPanel["closeBtn"];
            joinTeam = this.teamPanel["joinTeam"];
            createTeam = this.teamPanel["createTeam"];
            closeBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               DisplayUtil.removeForParent(teamPanel);
            });
            joinTeam.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               if(MainManager.actorInfo.teamInfo.id == 0)
               {
                  TeamController.searchTeam();
               }
               else
               {
                  Alarm.show("你已经加入了一个战队，如果想要创建一个战队的话，要先退出之前的战队哦！");
               }
               DisplayUtil.removeForParent(teamPanel);
            });
            createTeam.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               TeamController.create();
               DisplayUtil.removeForParent(teamPanel);
            });
         }
         DisplayUtil.align(this.teamPanel,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this.teamPanel);
      }
      
      private function onOverHnalder(param1:MouseEvent) : void
      {
         conLevel["clothMc"].gotoAndStop(2);
      }
      
      private function onOutHnalder(param1:MouseEvent) : void
      {
         conLevel["clothMc"].gotoAndStop(1);
      }
      
      private function onArmExcBookHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053265);
         this._armExSo.data["isShow"] = true;
         SOManager.flush(this._armExSo);
         if(this._armExgApp == null)
         {
            this._armExgApp = new AppModel(ClientConfig.getBookModule("TeamBadgeExchangePanel"),"正在打开");
            this._armExgApp.setup();
         }
         this._armExgApp.show();
      }
      
      private function clickBlueBtn(param1:MouseEvent) : void
      {
      }
      
      private function clickRedBtn(param1:MouseEvent) : void
      {
         if(MainManager.actorInfo.vip)
         {
            ItemAction.buyMultiItem(4,"红宝石套装",100747,100748,100749,100750);
         }
         else
         {
            Alarm.show("你还没有开通超能NoNo，不能领取红宝石套装");
         }
      }
      
      override public function destroy() : void
      {
         if(this._pkPanel)
         {
            this._pkPanel.destroy();
            this._pkPanel = null;
         }
         if(this.panel)
         {
            this.panel.destroy();
            this.panel = null;
         }
         ToolTipManager.remove(this.bookBtn);
         if(this.bookBtn)
         {
            this.bookBtn.removeEventListener(MouseEvent.CLICK,this.showBook);
         }
         this.bookBtn = null;
         if(this._armBookPanel)
         {
            this._armBookPanel.destroy();
            this._armBookPanel = null;
         }
         this._so = null;
         if(this._btnStronghold)
         {
            this._btnStronghold.removeEventListener(MouseEvent.CLICK,this.onStronghold);
         }
         ToolTipManager.remove(this._btnStronghold);
         this._btnStronghold = null;
         if(this._armExgApp)
         {
            this._armExgApp.destroy();
            this._armExgApp = null;
         }
         this._armExSo = null;
         ToolTipManager.remove(this.blueBtn);
         ToolTipManager.remove(this.redBtn);
         if(this.blueBtn)
         {
            this.blueBtn.removeEventListener(MouseEvent.CLICK,this.clickBlueBtn);
            this.blueBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.onOverHnalder);
            this.blueBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.onOutHnalder);
         }
         if(this.redBtn)
         {
            this.redBtn.removeEventListener(MouseEvent.CLICK,this.clickRedBtn);
            this.redBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.onOverHnalder);
            this.redBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.onOutHnalder);
         }
         conLevel["clothMc"].removeEventListener(MouseEvent.MOUSE_OVER,this.onOverHnalder);
         conLevel["clothMc"].removeEventListener(MouseEvent.MOUSE_OUT,this.onOutHnalder);
         this.redBtn = null;
         this.blueBtn = null;
         this.destroyRoyale();
      }
      
      public function pkSign() : void
      {
         if(!this._pkPanel)
         {
            this._pkPanel = new AppModel(ClientConfig.getAppModule("PKPanel"),"正在打开....");
            this._pkPanel.setup();
         }
         this._pkPanel.show();
         SocketConnection.send(1022,86053862);
      }
      
      public function trialsFunc() : void
      {
         FightLevelModel.setUp();
      }
      
      private function showBook(param1:MouseEvent) : void
      {
         InstructorBook.loadPanel();
      }
      
      private function onArmBookHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053264);
         this._so.data["isShow"] = true;
         SOManager.flush(this._so);
         if(!this._armBookPanel)
         {
            this._armBookPanel = new AppModel(ClientConfig.getBookModule("ArmWarBookPanel"),"正在打开");
            this._armBookPanel.setup();
         }
         this._armBookPanel.show();
      }
      
      public function showChartsList() : void
      {
         if(this.panel == null)
         {
            this.panel = ModuleManager.getModule(ClientConfig.getAppModule("TeamChartsPanel"),"正在打开战队排行榜");
         }
         this.panel.show();
      }
   }
}
