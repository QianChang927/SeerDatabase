package com.robot.core.event
{
   import flash.events.Event;
   
   public class RobotEvent extends Event
   {
      
      public static const EXIT_FRAME:String = "exitFrame";
      
      public static const FRAME_CONSTRUCTED:String = "frameConstructed";
      
      public static const LOGIN_SUCCESS:String = "loginSuccess";
      
      public static const CLOSE_LOADING:String = "closeLoading";
      
      public static const LOADING_START:String = "loadingStart";
      
      public static const LOADING_END:String = "loadingEnd";
      
      public static const CREATED_ACTOR:String = "createdActor";
      
      public static const FILTER_SUPER_TEAM:String = "filterSuperTeam";
      
      public static const CREATED_MAP_USER:String = "createdMapUser";
      
      public static const LEAVE_ROOM:String = "leaveRoom";
      
      public static const ENTER_ROOM:String = "enterRoom";
      
      public static const GET_ROOM_ADDRES:String = "getRoomAddres";
      
      public static const OGRE_CLICK:String = "ogreClick";
      
      public static const CHANGE_DIRECTION:String = "changeDirection";
      
      public static const WALK_START:String = "walkStart";
      
      public static const WALK_END:String = "walkEnd";
      
      public static const WALK_ENTER_FRAME:String = "walkEnterFrame";
      
      public static const STORAGE_OPEN:String = "storageOpen";
      
      public static const STORAGE_CLOSE:String = "storageClose";
      
      public static const NO_PET_CAN_FIGHT:String = "noPetCanFight";
      
      public static const MESSAGE:String = "message";
      
      public static const ADD_FRIEND_MSG:String = "add_friend_msg";
      
      public static const ANSWER_FRIEND_MSG:String = "answer_friend_msg";
      
      public static const REMOVE_FRIEND_MSG:String = "remove_friend_msg";
      
      public static const FRIENDS_NOTICE:String = "friends_notice";
      
      public static const INVITE_TEAM_MSG:String = "invite_team_msg";
      
      public static const ADD_TEAM_MSG:String = "add_team_msg";
      
      public static const CLOSE_FIGHT_WAIT:String = "closeFightWait";
      
      public static const ANTI_PLUG_IN_ERROR:String = "anti_plug_in_error";
      
      public static const INVITE_JOIN_GROUP:String = "invite_join_group";
      
      public static const ANSWER_JOIN_GROUP:String = "answer_join_group";
      
      public static const CANCEL_INVITE_GROUP:String = "cancel_invite_group";
      
      public static const QUIT_GROUP:String = "quit_group";
      
      public static const NEW_LEADER_GROUP:String = "new_leader_group";
      
      public static const NEW_GROUP_NAME:String = "new_group_name";
      
      public static const CUT_BMP:String = "cutBmp";
      
      public static const DAILY_TASK_COMPLETE:String = "dailyTaskComplete";
      
      public static const NONO_SHORTCUT_HIDE:String = "nonoShortcutHide";
      
      public static const SPEEDUP_CHANGE:String = "speedupChange";
      
      public static const AUTO_FIGHT_CHANGE:String = "autoFightChange";
      
      public static const SHOW_FIGHT_HP_CHANGE:String = "showFightHpChange";
      
      public static const ENERGY_TIMES_CHANGE:String = "energyTimesChange";
      
      public static const STUDY_TIMES_CHANGE:String = "studyTimesChange";
      
      public static const ERROR_11027:String = "error11027";
      
      public static const ERROR_11028:String = "error11028";
      
      public static const ERROR_103303:String = "error103303";
      
      public static const TRANSFORM_START:String = "transformStart";
      
      public static const TRANSFORM_OVER:String = "transformOver";
      
      public static const TASK_EVENT:String = "taskevent";
      
      public static const TASK_EVENTFINISH:String = "taskeventfinish";
      
      public static const ROOM_FIGHT_NOTICE:String = "room_fight_notice";
      
      public static const DIAMOND_BUY:String = "diamondbuy";
      
      public static const GOLD_BUY:String = "goldbuy";
      
      public static const MONEY_BUY:String = "moneybuy";
      
      public static const CANCEL_MONEY_BUY:String = "cancelmoneybuy";
      
      public static const CLOSE_BUY_ITEM_SHOW:String = "CLOSE_BUY_ITEM_SHOW";
      
      public static const OPEN_BUY_ITEM_SHOW:String = "OPEN_BUY_ITEM_SHOW";
      
      public static const CLEAR_BUY_ITEM_SHOW:String = "CLEAR_BUY_ITEM_SHOW";
      
      public static const FIGHT_OVER_UI_CLEAN:String = "fight_over_ui_claen";
      
      public static const BUY_ITEM_PANEL:String = "buy_item_panel";
      
      public static const PET_ROAYLE_FIGHT_BEGIN:String = "pet_roayle_fight_begin";
      
      public static const CLOSE_ITEM_CMD_SHOW:String = "closeItemCMDSHow";
      
      public static const OPEN_ITEM_CMD_SHOW:String = "openItemCMDSHow";
      
      public static const CLEAR_ITEM_CMD:String = "clearItemCMD";
      
      public static const CLOSE_PETBAG:String = "closePetBag";
      
      public static const CLOSE_MUL_BUY_PANEL:String = "closePetBag";
      
      public static const CLOSE_SIMPLE_MODULE_PANEL:String = "closeSimpleModulePanel";
      
      public static const SEERDOU_CHANGE_EVENT:String = "seerdouChangeEvent";
      
      public static const CLOSE_ICON_ALERT:String = "close_icon_alert";
      
      public static const NinthDragonClosePanel:String = "NinthDragonClosePanel";
      
      public static const NinthDragonNotClose:String = "NinthDragonNotClose";
       
      
      private var data:Object = null;
      
      public function RobotEvent(param1:String, param2:Boolean = false, param3:Boolean = false, param4:Object = null)
      {
         super(param1,param2,param3);
         this.data = param4;
      }
      
      override public function clone() : Event
      {
         return new RobotEvent(type,bubbles,cancelable,this.data);
      }
   }
}
