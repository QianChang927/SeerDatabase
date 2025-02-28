package com.robot.app.mapProcess.control.mysteryHole
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   
   public class mapBoss extends EventDispatcher
   {
      
      private static var instance:mapBoss;
      
      private static var canotNew:Boolean = true;
      
      public static const BOSSOVER:String = "BossOver";
      
      public static const MONSTEROVER630:String = "monsterOver630";
      
      public static const ISHAVEITEM:String = "ishaveitem";
       
      
      private var mapId:int;
      
      private var npcShow:int;
      
      private var pirateServerType:int;
      
      private var pirateType:int;
      
      public var ishaveitem:Boolean;
      
      public function mapBoss()
      {
         super();
         if(canotNew)
         {
            throw new Error("mapBoss不能直接new , 用静态方法 getInstance()!");
         }
      }
      
      public static function getInstance() : mapBoss
      {
         if(!instance)
         {
            canotNew = false;
            instance = new mapBoss();
            canotNew = true;
         }
         return instance;
      }
      
      public function PKBOSS(param1:int, param2:int, param3:int) : void
      {
         this.mapId = param1;
         this.pirateType = param2;
         this.pirateServerType = param3;
         if(this.mapId == 10001)
         {
            if(this.pirateType == 1)
            {
               this.PKBOSS630();
            }
            else if(this.pirateType == 2)
            {
               this.PKBOSS630Monster();
            }
         }
         else if(this.mapId == 10002)
         {
            if(this.pirateType != 1)
            {
               if(this.pirateType == 2)
               {
                  this.PKBOSS10002Monster();
               }
            }
         }
         else if(this.mapId == 10003)
         {
            if(this.pirateType != 1)
            {
               if(this.pirateType == 2)
               {
                  this.PKBOSS10003Monster();
               }
            }
         }
         else if(this.mapId == 10004)
         {
            if(this.pirateType != 1)
            {
               if(this.pirateType == 2)
               {
                  this.PKBOSS10004Monster();
               }
            }
         }
      }
      
      public function PKBOSSOver() : void
      {
         if(this.mapId == 10001)
         {
            if(this.pirateType == 1)
            {
               this.PKBOSS630Pver();
            }
            else if(this.pirateType == 2)
            {
               this.PKBOSS630MonsterOver();
            }
         }
         else if(this.mapId == 10002)
         {
            if(this.pirateType != 1)
            {
               if(this.pirateType == 2)
               {
                  this.PKBOSS10002MonsterOver();
               }
            }
         }
         else if(this.mapId == 10003)
         {
            if(this.pirateType != 1)
            {
               if(this.pirateType == 2)
               {
                  this.PKBOSS10003MonsterOver();
               }
            }
         }
         else if(this.mapId == 10004)
         {
            if(this.pirateType != 1)
            {
               if(this.pirateType == 2)
               {
                  this.PKBOSS10004MonsterOver();
               }
            }
         }
      }
      
      private function PKBOSS630() : void
      {
         NpcDialog.show(NPC.HAIDAOTOU,["哼哼，不错嘛，能来到这里说明你还是有点实力的，不过，遇到我你就没那么好运了！"],["我可不会怕你！！"],[this.joinPk]);
      }
      
      private function PKBOSS630Pver() : void
      {
         NpcDialog.show(NPC.HAIDAOTOU,["可恶的赛尔，你破坏了我们的计划！哼哼，你想救它么？它已经不是原来的它了，想要救它，就要看看你的实力了！"],["可恶的海盗！"],[this.bossOver]);
      }
      
      private function bossOver() : void
      {
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         this.dispatchEvent(new Event(BOSSOVER));
      }
      
      private function PKBOSS630Monster() : void
      {
         NpcDialog.show(NPC.DUOGEYA,["离开这里！我控制不住我自己了！快离开！"],["放心！我一定会救你的！"],[this.joinPk]);
      }
      
      public function PKBOSS630MonsterOver() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onItemList);
         ItemManager.getCollection();
      }
      
      private function onItemList(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onItemList);
         var _loc2_:SingleItemInfo = ItemManager.getCollectionInfo(400806);
         if(_loc2_)
         {
            this.ishaveitem = true;
         }
         else
         {
            this.ishaveitem = false;
         }
         this.dispatchEvent(new Event(ISHAVEITEM));
      }
      
      private function PKBOSS10002Monster() : void
      {
         NpcDialog.show(NPC.YALANLUO,["哼哼，小子不错嘛！竟然被你闯进来了，看你能在这里坚持多久！"],["我一定会坚持到最后的！"],[this.joinPk]);
      }
      
      public function PKBOSS10002MonsterOver() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onItemList10002);
         ItemManager.getCollection();
      }
      
      private function onItemList10002(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onItemList10002);
         var _loc2_:SingleItemInfo = ItemManager.getCollectionInfo(400809);
         if(_loc2_)
         {
            this.ishaveitem = true;
         }
         else
         {
            this.ishaveitem = false;
         }
         this.dispatchEvent(new Event(ISHAVEITEM));
      }
      
      private function PKBOSS10003Monster() : void
      {
         NpcDialog.show(NPC.KAXILU,["你们竟然敢闯入我的领地，无论是谁都别想全身而退！哼哼，接招吧！"],["可恶！估计又是被海盗控制了，就让我来领教一下吧！"],[this.joinPk]);
      }
      
      public function PKBOSS10003MonsterOver() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onItemList10003);
         ItemManager.getCollection();
      }
      
      private function onItemList10003(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onItemList10003);
         var _loc2_:SingleItemInfo = ItemManager.getCollectionInfo(400812);
         if(_loc2_)
         {
            this.ishaveitem = true;
         }
         else
         {
            this.ishaveitem = false;
         }
         this.dispatchEvent(new Event(ISHAVEITEM));
      }
      
      private function PKBOSS10004Monster() : void
      {
         NpcDialog.show(NPC.DUNILU,["你竟敢挑战我的领地，想活命的话就赶紧离开这里，否则就让你知道我的厉害!"],["我是来解救你的！"],[this.joinPk]);
      }
      
      public function PKBOSS10004MonsterOver() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onItemList10004);
         ItemManager.getCollection();
      }
      
      private function onItemList10004(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onItemList10004);
         var _loc2_:SingleItemInfo = ItemManager.getCollectionInfo(400816);
         if(_loc2_)
         {
            this.ishaveitem = true;
         }
         else
         {
            this.ishaveitem = false;
         }
         this.dispatchEvent(new Event(ISHAVEITEM));
      }
      
      public function monsterSayOver() : void
      {
         if(this.mapId == 10001)
         {
            NpcDialog.show(NPC.DUOGEYA,["谢谢你，赛尔，是你救了我，不过除了我之外，每一层的领主都被海盗控制住了，海盗的力量不是我们所能对抗的，只能靠你了！"],["恩，我一定会把他们都救出来的！"],[this.monsterOver630]);
         }
         else if(this.mapId == 10002)
         {
            NpcDialog.show(NPC.YALANLUO,["啊……英雄饶命！我以后再也不敢与海盗勾结了，你就饶了我吧！我发誓以后会好好的守护这里！"],["哼！知道就好！别忘记你现在所说的话！一定要信守承诺！"],[this.monsterOver630]);
         }
         else if(this.mapId == 10003)
         {
            NpcDialog.show(NPC.KAXILU,["额…发生什么事情了，我究竟怎么了，头好疼啊！海盗…海盗还在吗？就是它们控制了我！谢谢你，小个子，是你救了我！"],["没事啦！我的目的就是解救你们！"],[this.monsterOver630]);
         }
         else if(this.mapId == 10004)
         {
            NpcDialog.show(NPC.DUNILU,["额…刚刚我好像无法控制自己，就像着了魔似的！对不起，没伤到你吧！"],["没事啦！我这次来炫彩山的目的就是解救你们！"],[this.monsterOver630]);
         }
      }
      
      private function monsterOver630() : void
      {
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         this.dispatchEvent(new Event(MONSTEROVER630));
      }
      
      private function joinPk() : void
      {
         SocketConnection.send(CommandID.MYSTERYHOLE_PK,this.pirateServerType);
      }
   }
}
