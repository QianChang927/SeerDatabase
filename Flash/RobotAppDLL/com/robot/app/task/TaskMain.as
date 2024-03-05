package com.robot.app.task
{
   import com.robot.app.ac.OldSeerSecondController;
   import com.robot.app.ac.StudyUpManager;
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.automaticFight.ShowFightHpManager;
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.control.BatsFamilyController;
   import com.robot.app.control.BonusController;
   import com.robot.app.control.DragonExchangeController;
   import com.robot.app.control.DynamicClipController;
   import com.robot.app.control.EnterKylinSpace;
   import com.robot.app.control.FearBoxController;
   import com.robot.app.control.GedengExchangeController;
   import com.robot.app.control.JueShaTaskController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.control.LoginPayChecker;
   import com.robot.app.control.LoginSignUpController;
   import com.robot.app.control.ResistanceSysController;
   import com.robot.app.control.ServiceSurveyController;
   import com.robot.app.control.ShopXmlController;
   import com.robot.app.control.StarMapController;
   import com.robot.app.control.WebAlertController;
   import com.robot.app.control.clothEffect.ClothEffectController;
   import com.robot.app.control.localBroadcast.LocalBroadcastController;
   import com.robot.app.control.petCollection.PetCollectionController;
   import com.robot.app.control.quickStart.QuickStartController;
   import com.robot.app.mapProcess.MapProcess_102;
   import com.robot.app.mapProcess.control.ColorfulPrivilegeMsgController;
   import com.robot.app.mapProcess.control.ColorfulPrivilegeWishController;
   import com.robot.app.mapProcess.control.MarsHarborController;
   import com.robot.app.mapProcess.control.NinjaSpNoNoController;
   import com.robot.app.mapProcess.control.PetPracticeController;
   import com.robot.app.mapProcess.control.RescueZuoMeiSiController;
   import com.robot.app.mapProcess.control.SearchZhugeliangJinnangPanelControl;
   import com.robot.app.mapProcess.control.StarGuardController;
   import com.robot.app.mapProcess.control.SuperNoSeekJewelryController;
   import com.robot.app.mapProcess.control.UltraEvolutionCurseController;
   import com.robot.app.mapProcess.control.VipTrialController2;
   import com.robot.app.picturebook.PetPicBookManager;
   import com.robot.app.sptGalaxy.BaiHuController;
   import com.robot.app.sptGalaxy.QingLongController;
   import com.robot.app.sptGalaxy.XuanWuController;
   import com.robot.app.sptStar.KaxiusiController;
   import com.robot.app.sptStar.LeiyiController;
   import com.robot.app.systems.GetSession;
   import com.robot.app.task.SeerInstructor.NewInstructorController;
   import com.robot.app.task.control.TasksController;
   import com.robot.app.task.petstory.control.TrainDoorController;
   import com.robot.app.task.taskscollection.Task988;
   import com.robot.app.team.TeamNoticeController;
   import com.robot.core.CommandID;
   import com.robot.core.info.skillEffectInfo.EffectInfoManager;
   import com.robot.core.manager.AllGameScoreManager;
   import com.robot.core.manager.HatchTaskMapManager;
   import com.robot.core.manager.HolyPetManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.AcrossNpcController;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcController;
   import com.robot.core.pet.PetIdTransform;
   import com.robot.core.teamPK.TeamPKManager;
   import com.robot.core.ui.alert.SaierdouChangeAltert;
   import com.robot.core.userHoldParty.PartyMapManager;
   import flash.utils.getDefinitionByName;
   import org.taomee.bean.BaseBean;
   
   public class TaskMain extends BaseBean
   {
       
      
      public function TaskMain()
      {
         super();
      }
      
      override public function start() : void
      {
         getDefinitionByName("com.robot.app2.control.VipAnnualSignController").setup();
         getDefinitionByName("com.robot.app2.control.SpecialBroadcastController").setup();
         getDefinitionByName("com.robot.app2.control.VipController201408").setup();
         getDefinitionByName("com.robot.app2.control.PetBookController2014").setupArray();
         getDefinitionByName("com.robot.app2.control.XTeamController").checkActive();
         getDefinitionByName("com.robot.app2.control.PetBookController2014").loadXML();
         getDefinitionByName("com.robot.app2.control.JoannaController").setup();
         getDefinitionByName("com.robot.app2.control.SorryController").setup();
         TasksController.setUp();
         getDefinitionByName("com.robot.app2.systems.AntiAddictionController").setup();
         getDefinitionByName("com.robot.app2.control.VipCancerClothRewardController").setup();
         getDefinitionByName("com.robot.app.control.LoadSmallTVController").setup();
         WebAlertController.setup();
         GetSession.getSession(false);
         if(MainManager.actorInfo.hasNono)
         {
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
         }
         TeamNoticeController.setup();
         SaierdouChangeAltert.addListener();
         BonusController.setup();
         DynamicClipController.setup();
         QuickStartController.setup();
         NewInstructorController.setup();
         SpecialCheck.initCheck();
         LocalMsgController.setup();
         LocalBroadcastController.setup();
         StudyUpManager.setup();
         NpcController.start();
         StarMapController.setup();
         ClothEffectController.setup();
         getDefinitionByName("com.robot.app2.control.nonoAlarm.NoNoAlarmControl").setUp();
         if(MainManager.actorInfo.teamPKInfo.homeTeamID > 50000)
         {
            TeamPKManager.showIcon();
         }
         AllGameScoreManager.setup();
         AutomaticFightManager.setup();
         ShowFightHpManager.setup();
         HatchTaskMapManager.setup();
         LeiyiController.setup();
         KaxiusiController.setup();
         XuanWuController.setup();
         QingLongController.setup();
         BaiHuController.setup();
         NinjaSpNoNoController.instance.init();
         PetIdTransform.setup();
         TrainDoorController.getInstance().addPetUpListener();
         LoginPayChecker.setup();
         PetPicBookManager.startGetListInfo();
         VipTrialController2.start();
         AcrossNpcController.npcState();
         MarsHarborController.init();
         PartyMapManager.addInviteListner();
         PetPracticeController.start(false);
         StarGuardController.setup();
         Task988.start();
         BatsFamilyController.setup();
         SuperNoSeekJewelryController.setup();
         GedengExchangeController.setup();
         PetCollectionController.show();
         DragonExchangeController.setup();
         ShopXmlController.setup();
         EffectInfoManager.setup();
         getDefinitionByName("com.robot.app2.control.UsersBagItemsRemoveController").setup();
         getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.DoomTicketsPart2Activity").setUp();
         getDefinitionByName("com.robot.app2.control.TheBattleForTerritoryControl").setUp();
         getDefinitionByName("com.robot.app2.control.DragonEvoController").start();
         getDefinitionByName("com.robot.core.config.xml.WeeklyTasksController").setup();
         getDefinitionByName("com.robot.app2.control.LastestActsController").setup();
         ServiceSurveyController.setup();
         ProductAction.getPaymentStatus();
         LoginSignUpController.setup();
         OldSeerSecondController.getInstance().setup();
         getDefinitionByName("com.robot.app2.control.RightMenuController").setup();
         HolyPetManager.setup();
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController_hell").addMsgAndIcon();
         RescueZuoMeiSiController.setup();
         getDefinitionByName("com.robot.app2.control.BossReductionController").setup();
         getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.LigthAndDarkDuelController").setup();
         EnterKylinSpace.setup();
         ColorfulPrivilegeWishController.setup();
         ColorfulPrivilegeMsgController.init();
         getDefinitionByName("com.robot.app2.control.FamousController").setup();
         getDefinitionByName("com.robot.app2.mapProcess.control.HuoCheXiaController").setup();
         MapProcess_102.showKingwarFightScore();
         getDefinitionByName("com.robot.app2.control.WeaponMasterCinkidController").setup();
         getDefinitionByName("com.robot.app2.control.FourthSeerController").setup();
         getDefinitionByName("com.robot.app2.mapProcess.control.KingTreasuryController").showBroadCast();
         getDefinitionByName("com.robot.app.control.ChaoNoSpriteTeamController").setup();
         getDefinitionByName("com.robot.app2.control.QuestionNaireController").setup();
         getDefinitionByName("com.robot.app2.control.ChristmasWinterGamesController").setup();
         getDefinitionByName("com.robot.app2.control.BeforeEnterGamePanelController").setup();
         getDefinitionByName("com.robot.app2.control.ThunderGodAblityLevelUpController").setup();
         getDefinitionByName("com.robot.app2.control.game.GameBokaTe").startUp();
         UltraEvolutionCurseController.addMsgAndIcon();
         SearchZhugeliangJinnangPanelControl.setup();
         getDefinitionByName("com.robot.app2.control.RobinMailController").check();
         getDefinitionByName("com.robot.app2.control.HappyNewYearToYouController").setup();
         getDefinitionByName("com.robot.app2.control.SupremeDragonProphecyController").setUp();
         FearBoxController.instance;
         JueShaTaskController.instance;
         ResistanceSysController.instance;
         getDefinitionByName("com.robot.app2.control.BlackKingWelfareAController").initMapListener();
         getDefinitionByName("com.robot.app2.control.TheWholeCarnivalController").alertTaoleStar();
         getDefinitionByName("com.robot.app2.control.EatCandyMsgCotroller").start();
         getDefinitionByName("com.robot.app2.control.OpenSchoolSendGiftController").setup();
         getDefinitionByName("com.robot.app2.control.SeerReturnNewController").setup();
         getDefinitionByName("com.robot.app2.systems.PetSkinController").instance.setUp();
         getDefinitionByName("com.robot.app2.control.OpenSchoole1809Controller").setup();
         getDefinitionByName("com.robot.app2.control.starTreasure.note.StarTreasureNoteCmdListener").start();
         ItemManager.getCollection();
         finish();
      }
   }
}
