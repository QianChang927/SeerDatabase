package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class MorraSweet
   {
      
      private static var _numItem:int;
      
      private static var _isBoss:Boolean;
      
      private static var _hasTalk:Boolean;
      
      private static var _hasPass:Boolean;
      
      private static var _instance:MorraSweet;
       
      
      private var _map:BaseMapProcess;
      
      public function MorraSweet()
      {
         super();
      }
      
      public static function getInstance() : MorraSweet
      {
         if(!_instance)
         {
            _instance = new MorraSweet();
         }
         return _instance;
      }
      
      public function start(param1:BaseMapProcess) : void
      {
         this._map = param1;
         ToolTipManager.add(this._map.conLevel["benzhu"],"本竺");
         this._map.conLevel["benzhu"].buttonMode = true;
         this._map.conLevel["benzhu"].addEventListener(MouseEvent.CLICK,this.onBenzhuClick);
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onFightError);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.onCatchPet);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
      }
      
      public function onBenzhuClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_hasPass)
         {
            FightManager.fightWithBoss("本竺",2);
            return;
         }
         if(_hasTalk)
         {
            if(_numItem < 3)
            {
               NpcDialog.show(NPC.BENZHU,["活力能量收集好了吗？是不是不敢和我这个猜拳达人比试啊？"]);
            }
            else
            {
               NpcDialog.show(NPC.BENZHU,["活力能量果然让人精神，来吧，我们猜拳吧，等不急了！"],["我会让你输的心服口服的！开始吧！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MorraSweetGame"),"正在加载游戏",false);
               }]);
            }
            return;
         }
         NpcDialog.show(NPC.BENZHU,["来猜拳吗？和我猜拳可以让你变得更加聪明哦！不过我可从来没输过，你得有输的心理准备，哈哈！"],["没输过？你吹牛吧！怎么个猜法？","我还有事，下次再玩。"],[function():void
         {
            NpcDialog.show(NPC.BENZHU,["规则很简单，我出剪刀，那么你会选择出什么？"],["当然是石头了（传说中的猜拳达人也就这点本事……）。"],[function():void
            {
               NpcDialog.show(NPC.BENZHU,["哎呀，看来你也是高手啊！不过猜拳很费脑力，我得补充0xff0000三瓶活力能量0xffffff，你那里有吗？"],["活力能量？怎么才能得到这种能量呢？"],[function():void
               {
                  NpcDialog.show(NPC.BENZHU,["听说附近的0xff0000哈喽和哈德萨0xffffff身上有这种能量哦！快点吧，我等不急要跟你切磋一下了！"],["好的，等着，我马上去收集活力能量！"],[function():void
                  {
                     _hasTalk = true;
                  }]);
               }]);
            }]);
         }]);
      }
      
      public function onGameClose() : void
      {
         _numItem = 0;
         _hasPass = false;
         _isBoss = false;
      }
      
      public function onGameWin() : void
      {
         _numItem = 0;
         _hasPass = true;
         NpcDialog.show(NPC.BENZHU,["不会的，我怎么可能输呢！可恶，我要和你对战！"],null,null,false,function():void
         {
            _isBoss = true;
            FightManager.fightWithBoss("本竺",2);
         });
      }
      
      public function onGameLose() : void
      {
         _numItem = 0;
         _hasPass = false;
         _isBoss = false;
         NpcDialog.show(NPC.BENZHU,["我就说我不会输啦，哈哈哈！猜拳达人非我莫属！"],["别高兴太早，我还会回来的！"]);
      }
      
      public function onFightError(param1:RobotEvent) : void
      {
         if(_isBoss)
         {
            _isBoss = false;
         }
      }
      
      public function onCatchPet(param1:PetFightEvent) : void
      {
         if(_isBoss)
         {
            _hasPass = false;
            _isBoss = false;
         }
      }
      
      public function onFightComplete(param1:PetFightEvent) : void
      {
         if(_isBoss)
         {
            _hasPass = false;
            _isBoss = false;
            return;
         }
         if(_numItem == 3)
         {
            return;
         }
         if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            if(Math.random() < 0.5)
            {
               ++_numItem;
               if(_numItem < 3)
               {
                  SimpleAlarm.show("你获得一个活力能量！");
               }
               else
               {
                  SimpleAlarm.show("你获得一个活力能量！（已收集满3个活力能量）");
               }
            }
         }
      }
      
      public function destory() : void
      {
         ToolTipManager.remove(this._map.conLevel["benzhu"]);
         this._map.conLevel["benzhu"].removeEventListener(MouseEvent.CLICK,this.onBenzhuClick);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
         this._map = null;
         _instance = null;
      }
   }
}
